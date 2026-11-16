/* ============================================================
   数据回收桥（bridge.js）
   ------------------------------------------------------------
   职责：
   1) 把 PsychoJS 实验结束时的完整试次数据（CSV）上报到 Supabase
   2) 上报失败时自动让被试下载 CSV 作为兜底，并在页面上提示
   3) 实验结束后的页面遮罩与自动跳转（实验一 -> 实验二 -> 完成页）

   【只需改下面 3 个值就能开启自动上传】
   SUPABASE_URL / SUPABASE_ANON_KEY 留空时，站点仍可正常运行，
   只是数据不会上传，改为结束时自动下载 CSV。
   ============================================================ */

window.EXP_CONFIG = {
  SUPABASE_URL: "https://bvjhgrvgmzycoybhmcku.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_OVSzRVt0uRaJSGSH3Csgew_o0KbEIll",
  TABLE: "exp_results",      // 数据表名
  NEXT_PAGE: "",             // 由各实验页覆盖，如 "../ex2/"
  REDIRECT_DELAY: 2400       // 毫秒
};

(function () {
  var LS_KEY = "exp_pending_csv";

  function qs() {
    try { return new URLSearchParams(window.location.search); } catch (e) { return null; }
  }

  function cfg() { return window.EXP_CONFIG || {}; }

  function isMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone|HarmonyOS|Mobile/i.test(navigator.userAgent);
  }

  /* ---------- 元信息：用于事后核对设备与异常 ---------- */
  function collectMeta() {
    var m = {
      ua: navigator.userAgent,
      platform: navigator.platform,
      screen: (screen.width || 0) + "x" + (screen.height || 0),
      dpr: window.devicePixelRatio || 1,
      lang: navigator.language || "",
      tz: (function () { try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return ""; } })(),
      started_at: window.EXP_START_AT || "",
      ended_at: new Date().toISOString(),
      url: location.href
    };
    return m;
  }
  window.__collectMeta = collectMeta;

  /* ---------- 本地兜底下载 ---------- */
  window.__fallbackDownload = function (filename, text) {
    try {
      var blob = new Blob([text], { type: "text/csv;charset=utf-8" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
      }, 1500);
      return true;
    } catch (e) {
      console.error("[bridge] 下载兜底失败", e);
      return false;
    }
  };

  /* ---------- 上报到 Supabase ---------- */
  window.__submitData = function (payload) {
    var c = cfg();
    var row = {
      participant: payload.participant || "",
      experiment: payload.experiment || "",
      session: payload.session || "",
      completed: !!payload.completed,
      csv: payload.csv || "",
      meta: collectMeta()
    };

    // 未配置数据库：只留本地兜底
    if (!c.SUPABASE_URL || !c.SUPABASE_ANON_KEY) {
      try { localStorage.setItem(LS_KEY, JSON.stringify(row)); } catch (e) {}
      console.warn("[bridge] 未配置 Supabase，数据未上传（已本地备份）");
      return Promise.resolve({ ok: false, mode: "unconfigured" });
    }

    var url = c.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/" + (c.TABLE || "exp_results");
    var headers = {
      "Content-Type": "application/json",
      "apikey": c.SUPABASE_ANON_KEY,
      "Authorization": "Bearer " + c.SUPABASE_ANON_KEY,
      "Prefer": "return=minimal"
    };

    // 注意：带 keepalive 的请求体有 64KB 上限，大 CSV 会被浏览器直接拒绝。
    // 所以先用普通请求，失败再退回 keepalive 重试一次（应对页面即将跳转的场景）。
    function send(opts) {
      return fetch(url, Object.assign({
        method: "POST",
        headers: headers,
        body: JSON.stringify(row)
      }, opts || {})).then(function (res) {
        if (!res.ok) {
          return res.text().then(function (t) {
            throw new Error("HTTP " + res.status + " " + String(t).slice(0, 200));
          });
        }
        return { ok: true, mode: "supabase" };
      });
    }

    return send().catch(function (e1) {
      console.warn("[bridge] 普通请求失败，改用 keepalive 重试", e1);
      return send({ keepalive: true });
    }).then(function (res) {
      try { localStorage.removeItem(LS_KEY); } catch (e) {}
      return res;
    }).catch(function (err) {
      console.error("[bridge] 上传失败", err);
      try { localStorage.setItem(LS_KEY, JSON.stringify(row)); } catch (e) {}
      return { ok: false, mode: "error", error: String(err) };
    });
  };

  /* ---------- 实验结束后的遮罩 + 跳转 ---------- */
  window.__afterExperiment = function (info) {
    var c = cfg();
    var next = window.EXP_NEXT || c.NEXT_PAGE || "";
    var pid = (qs() && qs().get("participant")) || info.participant || "";
    var sess = (qs() && qs().get("session")) || "001";

    var mask = document.createElement("div");
    mask.style.cssText = [
      "position:fixed", "inset:0", "z-index:99999",
      "background:rgba(12,20,18,.92)", "color:#fff",
      "display:flex", "flex-direction:column",
      "align-items:center", "justify-content:center",
      "font-family:'Microsoft YaHei',sans-serif", "text-align:center", "padding:24px"
    ].join(";");

    var title, sub;
    if (!info.completed) {
      title = "实验已中断";
      sub = "检测到中途退出，已记录到当前进度。如需重新参与，请联系主试。";
      next = "";
    } else if (next) {
      title = "本部分已完成";
      sub = "正在进入下一部分，请不要关闭页面……";
    } else {
      title = "全部完成";
      sub = "感谢你的参与！";
      next = "";
    }

    mask.innerHTML =
      '<div style="font-size:26px;font-weight:700;margin-bottom:14px">' + title + "</div>" +
      '<div style="font-size:15px;opacity:.85;max-width:520px;line-height:1.7">' + sub + "</div>" +
      '<div style="margin-top:26px;font-size:13px;opacity:.6">编号 ' + pid + "</div>";

    document.body.appendChild(mask);

    if (next && info.completed) {
      setTimeout(function () {
        var target = next + (next.indexOf("?") === -1 ? "?" : "&") +
          "participant=" + encodeURIComponent(pid) + "&session=" + encodeURIComponent(sess);
        location.replace(target);
      }, c.REDIRECT_DELAY || 2400);
    }
  };

  /* ---------- 页面级小工具 ---------- */
  window.__genPid = function () {
    var d = new Date();
    var ymd = String(d.getFullYear()).slice(2) +
      String(d.getMonth() + 1).padStart(2, "0") +
      String(d.getDate()).padStart(2, "0");
    var rnd = String(Math.floor(Math.random() * 9000) + 1000);
    return "P" + ymd + rnd;
  };

  window.__isMobile = isMobile;
  window.__startedAt = function () {
    window.EXP_START_AT = new Date().toISOString();
  };
})();
