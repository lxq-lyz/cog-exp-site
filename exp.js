/*************** 
 * 认知任务实验 *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '认知任务实验';  // from the Builder filename that created this script
const __qs = new URLSearchParams(window.location.search);
let expInfo = {
    'participant': (__qs.get('participant') || 'ANON'),
    'session': (__qs.get('session') || '001'),
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'norm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: "点击 OK 开始（编号已自动带入，请勿修改）"
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(stroop_instructionRoutineBegin());
flowScheduler.add(stroop_instructionRoutineEachFrame());
flowScheduler.add(stroop_instructionRoutineEnd());
const prac_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_loopLoopBegin(prac_loopLoopScheduler));
flowScheduler.add(prac_loopLoopScheduler);
flowScheduler.add(prac_loopLoopEnd);



flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
const str_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(str_loopLoopBegin(str_loopLoopScheduler));
flowScheduler.add(str_loopLoopScheduler);
flowScheduler.add(str_loopLoopEnd);


flowScheduler.add(break_2RoutineBegin());
flowScheduler.add(break_2RoutineEachFrame());
flowScheduler.add(break_2RoutineEnd());
flowScheduler.add(clarityRoutineBegin());
flowScheduler.add(clarityRoutineEachFrame());
flowScheduler.add(clarityRoutineEnd());
flowScheduler.add(d2_instruction1RoutineBegin());
flowScheduler.add(d2_instruction1RoutineEachFrame());
flowScheduler.add(d2_instruction1RoutineEnd());
const d2_trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(d2_trials_2LoopBegin(d2_trials_2LoopScheduler));
flowScheduler.add(d2_trials_2LoopScheduler);
flowScheduler.add(d2_trials_2LoopEnd);




flowScheduler.add(d2_inst2RoutineBegin());
flowScheduler.add(d2_inst2RoutineEachFrame());
flowScheduler.add(d2_inst2RoutineEnd());
const d2_trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(d2_trials_3LoopBegin(d2_trials_3LoopScheduler));
flowScheduler.add(d2_trials_3LoopScheduler);
flowScheduler.add(d2_trials_3LoopEnd);


flowScheduler.add(d2_inst3RoutineBegin());
flowScheduler.add(d2_inst3RoutineEachFrame());
flowScheduler.add(d2_inst3RoutineEnd());
flowScheduler.add(d2_anal_praRoutineBegin());
flowScheduler.add(d2_anal_praRoutineEachFrame());
flowScheduler.add(d2_anal_praRoutineEnd());
flowScheduler.add(d2_anal_pra_inputRoutineBegin());
flowScheduler.add(d2_anal_pra_inputRoutineEachFrame());
flowScheduler.add(d2_anal_pra_inputRoutineEnd());
flowScheduler.add(d2_inst4RoutineBegin());
flowScheduler.add(d2_inst4RoutineEachFrame());
flowScheduler.add(d2_inst4RoutineEnd());
const d2_trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(d2_trials_4LoopBegin(d2_trials_4LoopScheduler));
flowScheduler.add(d2_trials_4LoopScheduler);
flowScheduler.add(d2_trials_4LoopEnd);



flowScheduler.add(d2_inst5RoutineBegin());
flowScheduler.add(d2_inst5RoutineEachFrame());
flowScheduler.add(d2_inst5RoutineEnd());
flowScheduler.add(__finishAndUpload, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(__finishAndUpload, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'prac.xlsx', 'path': 'prac.xlsx'},
    {'name': 'str_loop.xlsx', 'path': 'str_loop.xlsx'},
    {'name': 'DRM_loop2.xlsx', 'path': 'DRM_loop2.xlsx'},
    {'name': 'DRM材料/listA.xlsx', 'path': 'DRM材料/listA.xlsx'},
    {'name': 'DRM材料/listB.xlsx', 'path': 'DRM材料/listB.xlsx'},
    {'name': 'DRM材料/listC.xlsx', 'path': 'DRM材料/listC.xlsx'},
    {'name': 'DRM材料/listD.xlsx', 'path': 'DRM材料/listD.xlsx'},
    {'name': 'DRM材料/listE.xlsx', 'path': 'DRM材料/listE.xlsx'},
    {'name': 'DRM材料/listF.xlsx', 'path': 'DRM材料/listF.xlsx'},
    {'name': 'DRMTEST.xlsx', 'path': 'DRMTEST.xlsx'},
    {'name': 'analogy.xlsx', 'path': 'analogy.xlsx'},
    {'name': '实验一指导语/指导语 1.png', 'path': '实验一指导语/指导语 1.png'},
    {'name': 'default.png', 'path': 'assets/default.png'},
    {'name': '实验一指导语/指导语 2.png', 'path': '实验一指导语/指导语 2.png'},
    {'name': '实验二 指导语/幻灯片1.png', 'path': '实验二 指导语/幻灯片1.png'},
    {'name': '实验二 指导语/幻灯片2.png', 'path': '实验二 指导语/幻灯片2.png'},
    {'name': '实验二 指导语/幻灯片3.png', 'path': '实验二 指导语/幻灯片3.png'},
    {'name': '实验二 指导语/幻灯片4.png', 'path': '实验二 指导语/幻灯片4.png'},
    {'name': '实验二 指导语/幻灯片5.png', 'path': '实验二 指导语/幻灯片5.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var stroop_instructionClock;
var ins1;
var key_resp;
var practionClock;
var text_3;
var text_18;
var key_resp_2;
var feedback1Clock;
var practice_correct;
var practice_trials;
var total_practice_trials;
var feedback;
var text_2;
var instruction1Clock;
var image;
var stroopClock;
var text_4;
var text_15;
var key_resp_3;
var break_2Clock;
var text_7;
var text_8;
var key_resp_6;
var clarityClock;
var key_resp_7;
var text_16;
var d2_instruction1Clock;
var d2_image;
var d2_key_resp;
var d2_DRM_learnClock;
var d2_text;
var d2_text_2;
var d2_inst2Clock;
var d2_image_2;
var d2_key_resp_3;
var d2_DRM_testClock;
var d2_text_4;
var d2_text_5;
var d2_key_resp_2;
var d2_inst3Clock;
var d2_image_3;
var d2_key_resp_4;
var d2_anal_praClock;
var d2_text_6;
var d2_key_resp_5;
var d2_anal_pra_inputClock;
var d2_anal_pra_input_tip;
var d2_anal_pra_input_item;
var d2_anal_pra_input_item2;
var d2_anal_pra_input_answer;
var d2_anal_pra_input_key;
var d2_inst4Clock;
var d2_image_4;
var d2_key_resp_6;
var d2_analClock;
var d2_text_7;
var d2_key_resp_7;
var d2_anal_inputClock;
var d2_anal_input_tip;
var d2_anal_input_item;
var d2_anal_input_item2;
var d2_anal_input_answer;
var d2_anal_input_key;
var d2_inst5Clock;
var d2_image_5;
var d2_key_resp_8;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "stroop_instruction"
  stroop_instructionClock = new util.Clock();
  ins1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ins1', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "praction"
  practionClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback1"
  feedback1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code
  practice_correct = 0;
  practice_trials = 0;
  total_practice_trials = 9;
  feedback = "";
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'norm', 
    image : '实验一指导语/指导语 2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "stroop"
  stroopClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '现在请休息30秒\n如果您想继续实验请按"Q"键继续',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0.2], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "clarity"
  clarityClock = new util.Clock();
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '接下来是词语记忆任务\n请调整好状态，准备好后按 Q 键开始',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "d2_instruction1"
  d2_instruction1Clock = new util.Clock();
  d2_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd2_image', units : 'norm', 
    image : '实验二 指导语/幻灯片1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  d2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_DRM_learn"
  d2_DRM_learnClock = new util.Clock();
  d2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text_2',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "d2_inst2"
  d2_inst2Clock = new util.Clock();
  d2_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd2_image_2', units : 'norm', 
    image : '实验二 指导语/幻灯片2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  d2_key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_DRM_test"
  d2_DRM_testClock = new util.Clock();
  d2_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text_4',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text_5',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  d2_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_inst3"
  d2_inst3Clock = new util.Clock();
  d2_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd2_image_3', units : 'norm', 
    image : '实验二 指导语/幻灯片3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  d2_key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_anal_pra"
  d2_anal_praClock = new util.Clock();
  d2_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text_6',
    text: '站：地面 坐：？',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_anal_pra_input"
  d2_anal_pra_inputClock = new util.Clock();
  d2_anal_pra_input_tip = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_pra_input_tip',
    text: '请在下面的框里输入你想到的答案，按回车键（Enter）确认',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.3], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_anal_pra_input_item = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_pra_input_item',
    text: '站：地面\u3000坐：？',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.14], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  d2_anal_pra_input_item2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_pra_input_item2',
    text: '（想到就写下你心里的那个词，写完按回车）',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.02], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  d2_anal_pra_input_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'd2_anal_pra_input_answer',
    text: '',
    placeholder: '在这里输入答案',
    font: 'Microsoft YaHei',
    pos: [0, (- 0.05)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.15],  units: 'norm', 
    ori: 0.0,
    color: [0.0, 0.0, 0.0], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  d2_anal_pra_input_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_inst4"
  d2_inst4Clock = new util.Clock();
  d2_image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd2_image_4', units : 'norm', 
    image : '实验二 指导语/幻灯片4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  d2_key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_anal"
  d2_analClock = new util.Clock();
  d2_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_text_7',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_anal_input"
  d2_anal_inputClock = new util.Clock();
  d2_anal_input_tip = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_input_tip',
    text: '请在下面的框里输入你想到的答案，按回车键（Enter）确认',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.3], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  d2_anal_input_item = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_input_item',
    text: '',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.14], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  d2_anal_input_item2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'd2_anal_input_item2',
    text: '（想到就写下你心里的那个词，写完按回车）',
    font: 'Microsoft YaHei',
    units: 'norm', 
    pos: [0, 0.02], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  d2_anal_input_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'd2_anal_input_answer',
    text: '',
    placeholder: '在这里输入答案',
    font: 'Microsoft YaHei',
    pos: [0, (- 0.05)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.15],  units: 'norm', 
    ori: 0.0,
    color: [0.0, 0.0, 0.0], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: [0.0, 0.0, 0.0],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  d2_anal_input_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_inst5"
  d2_inst5Clock = new util.Clock();
  d2_image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd2_image_5', units : 'norm', 
    image : '实验二 指导语/幻灯片5.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 0.5625],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  d2_key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var stroop_instructionMaxDurationReached;
var _key_resp_allKeys;
var stroop_instructionMaxDuration;
var stroop_instructionComponents;
function stroop_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stroop_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stroop_instructionClock.reset();
    routineTimer.reset();
    stroop_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    ins1.setImage('实验一指导语/指导语 1.png');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('stroop_instruction.started', globalClock.getTime());
    stroop_instructionMaxDuration = null
    // keep track of which components have finished
    stroop_instructionComponents = [];
    stroop_instructionComponents.push(ins1);
    stroop_instructionComponents.push(key_resp);
    
    for (const thisComponent of stroop_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stroop_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stroop_instruction' ---
    // get current time
    t = stroop_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ins1* updates
    if (t >= 0.0 && ins1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins1.tStart = t;  // (not accounting for frame time here)
      ins1.frameNStart = frameN;  // exact frame index
      
      ins1.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['q'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stroop_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stroop_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stroop_instruction' ---
    for (const thisComponent of stroop_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stroop_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "stroop_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_loop;
function prac_loopLoopBegin(prac_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'prac.xlsx',
      seed: undefined, name: 'prac_loop'
    });
    psychoJS.experiment.addLoop(prac_loop); // add the loop to the experiment
    currentLoop = prac_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_loop of prac_loop) {
      snapshot = prac_loop.getSnapshot();
      prac_loopLoopScheduler.add(importConditions(snapshot));
      prac_loopLoopScheduler.add(practionRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(practionRoutineEachFrame());
      prac_loopLoopScheduler.add(practionRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(feedback1RoutineBegin(snapshot));
      prac_loopLoopScheduler.add(feedback1RoutineEachFrame());
      prac_loopLoopScheduler.add(feedback1RoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_loopLoopEndIteration(prac_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var str_loop;
function str_loopLoopBegin(str_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    str_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 8, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'str_loop.xlsx',
      seed: undefined, name: 'str_loop'
    });
    psychoJS.experiment.addLoop(str_loop); // add the loop to the experiment
    currentLoop = str_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStr_loop of str_loop) {
      snapshot = str_loop.getSnapshot();
      str_loopLoopScheduler.add(importConditions(snapshot));
      str_loopLoopScheduler.add(stroopRoutineBegin(snapshot));
      str_loopLoopScheduler.add(stroopRoutineEachFrame());
      str_loopLoopScheduler.add(stroopRoutineEnd(snapshot));
      str_loopLoopScheduler.add(str_loopLoopEndIteration(str_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function str_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(str_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function str_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var d2_trials_2;
function d2_trials_2LoopBegin(d2_trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    d2_trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DRM_loop2.xlsx',
      seed: undefined, name: 'd2_trials_2'
    });
    psychoJS.experiment.addLoop(d2_trials_2); // add the loop to the experiment
    currentLoop = d2_trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisD2_trial_2 of d2_trials_2) {
      snapshot = d2_trials_2.getSnapshot();
      d2_trials_2LoopScheduler.add(importConditions(snapshot));
      const d2_trialsLoopScheduler = new Scheduler(psychoJS);
      d2_trials_2LoopScheduler.add(d2_trialsLoopBegin(d2_trialsLoopScheduler, snapshot));
      d2_trials_2LoopScheduler.add(d2_trialsLoopScheduler);
      d2_trials_2LoopScheduler.add(d2_trialsLoopEnd);
      d2_trials_2LoopScheduler.add(d2_trials_2LoopEndIteration(d2_trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var d2_trials;
function d2_trialsLoopBegin(d2_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    d2_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: file1,
      seed: undefined, name: 'd2_trials'
    });
    psychoJS.experiment.addLoop(d2_trials); // add the loop to the experiment
    currentLoop = d2_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisD2_trial of d2_trials) {
      snapshot = d2_trials.getSnapshot();
      d2_trialsLoopScheduler.add(importConditions(snapshot));
      d2_trialsLoopScheduler.add(d2_DRM_learnRoutineBegin(snapshot));
      d2_trialsLoopScheduler.add(d2_DRM_learnRoutineEachFrame());
      d2_trialsLoopScheduler.add(d2_DRM_learnRoutineEnd(snapshot));
      d2_trialsLoopScheduler.add(d2_trialsLoopEndIteration(d2_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function d2_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(d2_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function d2_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function d2_trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(d2_trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function d2_trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var d2_trials_3;
function d2_trials_3LoopBegin(d2_trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    d2_trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DRMTEST.xlsx',
      seed: undefined, name: 'd2_trials_3'
    });
    psychoJS.experiment.addLoop(d2_trials_3); // add the loop to the experiment
    currentLoop = d2_trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisD2_trial_3 of d2_trials_3) {
      snapshot = d2_trials_3.getSnapshot();
      d2_trials_3LoopScheduler.add(importConditions(snapshot));
      d2_trials_3LoopScheduler.add(d2_DRM_testRoutineBegin(snapshot));
      d2_trials_3LoopScheduler.add(d2_DRM_testRoutineEachFrame());
      d2_trials_3LoopScheduler.add(d2_DRM_testRoutineEnd(snapshot));
      d2_trials_3LoopScheduler.add(d2_trials_3LoopEndIteration(d2_trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function d2_trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(d2_trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function d2_trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var d2_trials_4;
function d2_trials_4LoopBegin(d2_trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    d2_trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'analogy.xlsx',
      seed: undefined, name: 'd2_trials_4'
    });
    psychoJS.experiment.addLoop(d2_trials_4); // add the loop to the experiment
    currentLoop = d2_trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisD2_trial_4 of d2_trials_4) {
      snapshot = d2_trials_4.getSnapshot();
      d2_trials_4LoopScheduler.add(importConditions(snapshot));
      d2_trials_4LoopScheduler.add(d2_analRoutineBegin(snapshot));
      d2_trials_4LoopScheduler.add(d2_analRoutineEachFrame());
      d2_trials_4LoopScheduler.add(d2_analRoutineEnd(snapshot));
      d2_trials_4LoopScheduler.add(d2_anal_inputRoutineBegin(snapshot));
      d2_trials_4LoopScheduler.add(d2_anal_inputRoutineEachFrame());
      d2_trials_4LoopScheduler.add(d2_anal_inputRoutineEnd(snapshot));
      d2_trials_4LoopScheduler.add(d2_trials_4LoopEndIteration(d2_trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function d2_trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(d2_trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function d2_trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practionMaxDurationReached;
var _key_resp_2_allKeys;
var practionMaxDuration;
var practionComponents;
function practionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'praction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practionClock.reset(routineTimer.getTime());
    routineTimer.add(1.750000);
    practionMaxDurationReached = false;
    // update component parameters for each repeat
    text_3.setColor(new util.Color(pra_col));
    text_3.setText(pra_text);
    text_18.setText('');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('praction.started', globalClock.getTime());
    practionMaxDuration = null
    // keep track of which components have finished
    practionComponents = [];
    practionComponents.push(text_3);
    practionComponents.push(text_18);
    practionComponents.push(key_resp_2);
    
    for (const thisComponent of practionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'praction' ---
    // get current time
    t = practionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_18* updates
    if (t >= 1.5 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_18.setAutoDraw(false);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['d', 'g', 'j'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == pra_ans) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'praction' ---
    for (const thisComponent of practionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('praction.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(pra_ans)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    if (practionMaxDurationReached) {
        practionClock.add(practionMaxDuration);
    } else {
        practionClock.add(1.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback1MaxDurationReached;
var accuracy;
var feedback1MaxDuration;
var feedback1Components;
function feedback1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback1Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if ((key_resp_2.corr === 1)) {
        practice_correct += 1;
    }
    practice_trials += 1;
    if ((practice_trials === total_practice_trials)) {
        accuracy = (practice_correct / total_practice_trials);
        if ((accuracy >= 0.8)) {
            feedback = `恭喜！练习正确率为${util.pad(Number.parseFloat((accuracy * 100)).toFixed(1), 1)}%，
    已达80%，进入正式实验～`
    ;
            prac_loop.finished = true;prac_loop.thisRepN = prac_loop.nReps;
        } else {
            feedback = `遗憾，练习正确率为${util.pad(Number.parseFloat((accuracy * 100)).toFixed(1), 1)}%，
    未达80%。请继续练习～`
    ;
            practice_correct = 0;
            practice_trials = 0;
        }
    } else {
        if ((key_resp_2.corr === 1)) {
            feedback = "\u56de\u7b54\u6b63\u786e\uff01\u7ee7\u7eed\uff5e";
        } else {
            feedback = "\u56de\u7b54\u9519\u8bef\uff0c\u518d\u8bd5\u8bd5\uff5e";
        }
    }
    
    text_2.setText(feedback);
    psychoJS.experiment.addData('feedback1.started', globalClock.getTime());
    feedback1MaxDuration = null
    // keep track of which components have finished
    feedback1Components = [];
    feedback1Components.push(text_2);
    
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback1' ---
    // get current time
    t = feedback1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback1' ---
    for (const thisComponent of feedback1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback1.stopped', globalClock.getTime());
    if (feedback1MaxDurationReached) {
        feedback1Clock.add(feedback1MaxDuration);
    } else {
        feedback1Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction1MaxDurationReached;
var instruction1MaxDuration;
var instruction1Components;
function instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction1Clock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    instruction1MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction1.started', globalClock.getTime());
    instruction1MaxDuration = null
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(image);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction1' ---
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction1' ---
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction1.stopped', globalClock.getTime());
    if (instruction1MaxDurationReached) {
        instruction1Clock.add(instruction1MaxDuration);
    } else {
        instruction1Clock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stroopMaxDurationReached;
var _key_resp_3_allKeys;
var stroopMaxDuration;
var stroopComponents;
function stroopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stroop' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stroopClock.reset(routineTimer.getTime());
    routineTimer.add(1.750000);
    stroopMaxDurationReached = false;
    // update component parameters for each repeat
    text_4.setColor(new util.Color(col));
    text_4.setText(text);
    text_4.setFont('Open Sans');
    text_15.setText('');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('stroop.started', globalClock.getTime());
    stroopMaxDuration = null
    // keep track of which components have finished
    stroopComponents = [];
    stroopComponents.push(text_4);
    stroopComponents.push(text_15);
    stroopComponents.push(key_resp_3);
    
    for (const thisComponent of stroopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stroopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stroop' ---
    // get current time
    t = stroopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    // *text_15* updates
    if (t >= 1.5 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['d', 'g', 'j'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_3.keys == ans) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stroopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stroopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stroop' ---
    for (const thisComponent of stroopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stroop.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(ans)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    if (stroopMaxDurationReached) {
        stroopClock.add(stroopMaxDuration);
    } else {
        stroopClock.add(1.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break_2MaxDurationReached;
var msg;
var _key_resp_6_allKeys;
var break_2MaxDuration;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    break_2Clock.reset();
    routineTimer.reset();
    break_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    msg = 31;
    
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('break_2.started', globalClock.getTime());
    break_2MaxDuration = null
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(text_7);
    break_2Components.push(text_8);
    break_2Components.push(key_resp_6);
    
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_2' ---
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    if (((frameN % 60) === 0)) {
        msg -= 1;
    }
    if ((msg === 0)) {
        continueRoutine = false;
    }
    
    
    if (text_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_7.setText(msg, false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['q'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_2' ---
    for (const thisComponent of break_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('break_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var clarityMaxDurationReached;
var _key_resp_7_allKeys;
var clarityMaxDuration;
var clarityComponents;
function clarityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'clarity' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    clarityClock.reset();
    routineTimer.reset();
    clarityMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('clarity.started', globalClock.getTime());
    clarityMaxDuration = null
    // keep track of which components have finished
    clarityComponents = [];
    clarityComponents.push(key_resp_7);
    clarityComponents.push(text_16);
    
    for (const thisComponent of clarityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function clarityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'clarity' ---
    // get current time
    t = clarityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['q'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of clarityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function clarityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'clarity' ---
    for (const thisComponent of clarityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('clarity.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "clarity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_instruction1MaxDurationReached;
var _d2_key_resp_allKeys;
var d2_instruction1MaxDuration;
var d2_instruction1Components;
function d2_instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_instruction1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_instruction1Clock.reset();
    routineTimer.reset();
    d2_instruction1MaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp.keys = undefined;
    d2_key_resp.rt = undefined;
    _d2_key_resp_allKeys = [];
    psychoJS.experiment.addData('d2_instruction1.started', globalClock.getTime());
    d2_instruction1MaxDuration = null
    // keep track of which components have finished
    d2_instruction1Components = [];
    d2_instruction1Components.push(d2_image);
    d2_instruction1Components.push(d2_key_resp);
    
    for (const thisComponent of d2_instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_instruction1' ---
    // get current time
    t = d2_instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_image* updates
    if (t >= 0.0 && d2_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_image.tStart = t;  // (not accounting for frame time here)
      d2_image.frameNStart = frameN;  // exact frame index
      
      d2_image.setAutoDraw(true);
    }
    
    
    // *d2_key_resp* updates
    if (t >= 0.0 && d2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp.tStart = t;  // (not accounting for frame time here)
      d2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp.clearEvents(); });
    }
    
    if (d2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp.getKeys({keyList: ['q'], waitRelease: false});
      _d2_key_resp_allKeys = _d2_key_resp_allKeys.concat(theseKeys);
      if (_d2_key_resp_allKeys.length > 0) {
        d2_key_resp.keys = _d2_key_resp_allKeys[_d2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp.rt = _d2_key_resp_allKeys[_d2_key_resp_allKeys.length - 1].rt;
        d2_key_resp.duration = _d2_key_resp_allKeys[_d2_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_instruction1' ---
    for (const thisComponent of d2_instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_instruction1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp.keys', d2_key_resp.keys);
    if (typeof d2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp.rt', d2_key_resp.rt);
        psychoJS.experiment.addData('d2_key_resp.duration', d2_key_resp.duration);
        routineTimer.reset();
        }
    
    d2_key_resp.stop();
    // the Routine "d2_instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_DRM_learnMaxDurationReached;
var d2_DRM_learnMaxDuration;
var d2_DRM_learnComponents;
function d2_DRM_learnRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_DRM_learn' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_DRM_learnClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    d2_DRM_learnMaxDurationReached = false;
    // update component parameters for each repeat
    d2_text_2.setText(word1);
    psychoJS.experiment.addData('d2_DRM_learn.started', globalClock.getTime());
    d2_DRM_learnMaxDuration = null
    // keep track of which components have finished
    d2_DRM_learnComponents = [];
    d2_DRM_learnComponents.push(d2_text);
    d2_DRM_learnComponents.push(d2_text_2);
    
    for (const thisComponent of d2_DRM_learnComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_DRM_learnRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_DRM_learn' ---
    // get current time
    t = d2_DRM_learnClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_text* updates
    if (t >= 0.0 && d2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text.tStart = t;  // (not accounting for frame time here)
      d2_text.frameNStart = frameN;  // exact frame index
      
      d2_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text.setAutoDraw(false);
    }
    
    
    // *d2_text_2* updates
    if (t >= 0.5 && d2_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text_2.tStart = t;  // (not accounting for frame time here)
      d2_text_2.frameNStart = frameN;  // exact frame index
      
      d2_text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_DRM_learnComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_DRM_learnRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_DRM_learn' ---
    for (const thisComponent of d2_DRM_learnComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_DRM_learn.stopped', globalClock.getTime());
    if (d2_DRM_learnMaxDurationReached) {
        d2_DRM_learnClock.add(d2_DRM_learnMaxDuration);
    } else {
        d2_DRM_learnClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_inst2MaxDurationReached;
var _d2_key_resp_3_allKeys;
var d2_inst2MaxDuration;
var d2_inst2Components;
function d2_inst2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_inst2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_inst2Clock.reset();
    routineTimer.reset();
    d2_inst2MaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp_3.keys = undefined;
    d2_key_resp_3.rt = undefined;
    _d2_key_resp_3_allKeys = [];
    psychoJS.experiment.addData('d2_inst2.started', globalClock.getTime());
    d2_inst2MaxDuration = null
    // keep track of which components have finished
    d2_inst2Components = [];
    d2_inst2Components.push(d2_image_2);
    d2_inst2Components.push(d2_key_resp_3);
    
    for (const thisComponent of d2_inst2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_inst2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_inst2' ---
    // get current time
    t = d2_inst2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_image_2* updates
    if (t >= 0.0 && d2_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_image_2.tStart = t;  // (not accounting for frame time here)
      d2_image_2.frameNStart = frameN;  // exact frame index
      
      d2_image_2.setAutoDraw(true);
    }
    
    
    // *d2_key_resp_3* updates
    if (t >= 0.0 && d2_key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_3.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_3.clearEvents(); });
    }
    
    if (d2_key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_3.getKeys({keyList: ['q'], waitRelease: false});
      _d2_key_resp_3_allKeys = _d2_key_resp_3_allKeys.concat(theseKeys);
      if (_d2_key_resp_3_allKeys.length > 0) {
        d2_key_resp_3.keys = _d2_key_resp_3_allKeys[_d2_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_3.rt = _d2_key_resp_3_allKeys[_d2_key_resp_3_allKeys.length - 1].rt;
        d2_key_resp_3.duration = _d2_key_resp_3_allKeys[_d2_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_inst2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_inst2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_inst2' ---
    for (const thisComponent of d2_inst2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_inst2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_3.keys', d2_key_resp_3.keys);
    if (typeof d2_key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_3.rt', d2_key_resp_3.rt);
        psychoJS.experiment.addData('d2_key_resp_3.duration', d2_key_resp_3.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_3.stop();
    // the Routine "d2_inst2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_DRM_testMaxDurationReached;
var _d2_key_resp_2_allKeys;
var d2_DRM_testMaxDuration;
var d2_DRM_testComponents;
function d2_DRM_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_DRM_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_DRM_testClock.reset(routineTimer.getTime());
    routineTimer.add(2.300000);
    d2_DRM_testMaxDurationReached = false;
    // update component parameters for each repeat
    d2_text_4.setText(word2);
    d2_key_resp_2.keys = undefined;
    d2_key_resp_2.rt = undefined;
    _d2_key_resp_2_allKeys = [];
    psychoJS.experiment.addData('d2_DRM_test.started', globalClock.getTime());
    d2_DRM_testMaxDuration = null
    // keep track of which components have finished
    d2_DRM_testComponents = [];
    d2_DRM_testComponents.push(d2_text_4);
    d2_DRM_testComponents.push(d2_text_5);
    d2_DRM_testComponents.push(d2_key_resp_2);
    
    for (const thisComponent of d2_DRM_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_DRM_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_DRM_test' ---
    // get current time
    t = d2_DRM_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_text_4* updates
    if (t >= 0 && d2_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text_4.tStart = t;  // (not accounting for frame time here)
      d2_text_4.frameNStart = frameN;  // exact frame index
      
      d2_text_4.setAutoDraw(true);
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text_4.setAutoDraw(false);
    }
    
    
    // *d2_text_5* updates
    if (t >= 2 && d2_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text_5.tStart = t;  // (not accounting for frame time here)
      d2_text_5.frameNStart = frameN;  // exact frame index
      
      d2_text_5.setAutoDraw(true);
    }
    
    frameRemains = 2 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text_5.setAutoDraw(false);
    }
    
    
    // *d2_key_resp_2* updates
    if (t >= 0.0 && d2_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_2.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_2.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_key_resp_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (d2_key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_2.getKeys({keyList: ['d', 'j'], waitRelease: false});
      _d2_key_resp_2_allKeys = _d2_key_resp_2_allKeys.concat(theseKeys);
      if (_d2_key_resp_2_allKeys.length > 0) {
        d2_key_resp_2.keys = _d2_key_resp_2_allKeys[_d2_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_2.rt = _d2_key_resp_2_allKeys[_d2_key_resp_2_allKeys.length - 1].rt;
        d2_key_resp_2.duration = _d2_key_resp_2_allKeys[_d2_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (d2_key_resp_2.keys == ans1) {
            d2_key_resp_2.corr = 1;
        } else {
            d2_key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_DRM_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_DRM_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_DRM_test' ---
    for (const thisComponent of d2_DRM_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_DRM_test.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (d2_key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(ans1)) {
         d2_key_resp_2.corr = 1;  // correct non-response
      } else {
         d2_key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_2.keys', d2_key_resp_2.keys);
    psychoJS.experiment.addData('d2_key_resp_2.corr', d2_key_resp_2.corr);
    if (typeof d2_key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_2.rt', d2_key_resp_2.rt);
        psychoJS.experiment.addData('d2_key_resp_2.duration', d2_key_resp_2.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_2.stop();
    if (d2_DRM_testMaxDurationReached) {
        d2_DRM_testClock.add(d2_DRM_testMaxDuration);
    } else {
        d2_DRM_testClock.add(2.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_inst3MaxDurationReached;
var _d2_key_resp_4_allKeys;
var d2_inst3MaxDuration;
var d2_inst3Components;
function d2_inst3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_inst3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_inst3Clock.reset();
    routineTimer.reset();
    d2_inst3MaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp_4.keys = undefined;
    d2_key_resp_4.rt = undefined;
    _d2_key_resp_4_allKeys = [];
    psychoJS.experiment.addData('d2_inst3.started', globalClock.getTime());
    d2_inst3MaxDuration = null
    // keep track of which components have finished
    d2_inst3Components = [];
    d2_inst3Components.push(d2_image_3);
    d2_inst3Components.push(d2_key_resp_4);
    
    for (const thisComponent of d2_inst3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_inst3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_inst3' ---
    // get current time
    t = d2_inst3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_image_3* updates
    if (t >= 0.0 && d2_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_image_3.tStart = t;  // (not accounting for frame time here)
      d2_image_3.frameNStart = frameN;  // exact frame index
      
      d2_image_3.setAutoDraw(true);
    }
    
    
    // *d2_key_resp_4* updates
    if (t >= 0.0 && d2_key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_4.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_4.clearEvents(); });
    }
    
    if (d2_key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_4.getKeys({keyList: ['q'], waitRelease: false});
      _d2_key_resp_4_allKeys = _d2_key_resp_4_allKeys.concat(theseKeys);
      if (_d2_key_resp_4_allKeys.length > 0) {
        d2_key_resp_4.keys = _d2_key_resp_4_allKeys[_d2_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_4.rt = _d2_key_resp_4_allKeys[_d2_key_resp_4_allKeys.length - 1].rt;
        d2_key_resp_4.duration = _d2_key_resp_4_allKeys[_d2_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_inst3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_inst3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_inst3' ---
    for (const thisComponent of d2_inst3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_inst3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_4.keys', d2_key_resp_4.keys);
    if (typeof d2_key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_4.rt', d2_key_resp_4.rt);
        psychoJS.experiment.addData('d2_key_resp_4.duration', d2_key_resp_4.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_4.stop();
    // the Routine "d2_inst3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_anal_praMaxDurationReached;
var _d2_key_resp_5_allKeys;
var d2_anal_praMaxDuration;
var d2_anal_praComponents;
function d2_anal_praRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_anal_pra' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_anal_praClock.reset(routineTimer.getTime());
    routineTimer.add(60.000000);
    d2_anal_praMaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp_5.keys = undefined;
    d2_key_resp_5.rt = undefined;
    _d2_key_resp_5_allKeys = [];
    psychoJS.experiment.addData('d2_anal_pra.started', globalClock.getTime());
    d2_anal_praMaxDuration = null
    // keep track of which components have finished
    d2_anal_praComponents = [];
    d2_anal_praComponents.push(d2_text_6);
    d2_anal_praComponents.push(d2_key_resp_5);
    
    for (const thisComponent of d2_anal_praComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_anal_praRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_anal_pra' ---
    // get current time
    t = d2_anal_praClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_text_6* updates
    if (t >= 0.0 && d2_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text_6.tStart = t;  // (not accounting for frame time here)
      d2_text_6.frameNStart = frameN;  // exact frame index
      
      d2_text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text_6.setAutoDraw(false);
    }
    
    
    // *d2_key_resp_5* updates
    if (t >= 0.0 && d2_key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_5.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_5.clearEvents(); });
    }
    
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_key_resp_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_key_resp_5.status = PsychoJS.Status.FINISHED;
        }
      
    if (d2_key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_5.getKeys({keyList: ['g'], waitRelease: false});
      _d2_key_resp_5_allKeys = _d2_key_resp_5_allKeys.concat(theseKeys);
      if (_d2_key_resp_5_allKeys.length > 0) {
        d2_key_resp_5.keys = _d2_key_resp_5_allKeys[_d2_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_5.rt = _d2_key_resp_5_allKeys[_d2_key_resp_5_allKeys.length - 1].rt;
        d2_key_resp_5.duration = _d2_key_resp_5_allKeys[_d2_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_anal_praComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_anal_praRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_anal_pra' ---
    for (const thisComponent of d2_anal_praComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_anal_pra.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_5.keys', d2_key_resp_5.keys);
    if (typeof d2_key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_5.rt', d2_key_resp_5.rt);
        psychoJS.experiment.addData('d2_key_resp_5.duration', d2_key_resp_5.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_5.stop();
    if (d2_anal_praMaxDurationReached) {
        d2_anal_praClock.add(d2_anal_praMaxDuration);
    } else {
        d2_anal_praClock.add(60.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_anal_pra_inputMaxDurationReached;
var _d2_anal_pra_input_key_allKeys;
var d2_anal_pra_inputMaxDuration;
var d2_anal_pra_inputComponents;
function d2_anal_pra_inputRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_anal_pra_input' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_anal_pra_inputClock.reset();
    routineTimer.reset();
    d2_anal_pra_inputMaxDurationReached = false;
    // update component parameters for each repeat
    d2_anal_pra_input_answer.setText('');
    d2_anal_pra_input_answer.refresh();
    d2_anal_pra_input_key.keys = undefined;
    d2_anal_pra_input_key.rt = undefined;
    _d2_anal_pra_input_key_allKeys = [];
    psychoJS.experiment.addData('d2_anal_pra_input.started', globalClock.getTime());
    d2_anal_pra_inputMaxDuration = null
    // keep track of which components have finished
    d2_anal_pra_inputComponents = [];
    d2_anal_pra_inputComponents.push(d2_anal_pra_input_tip);
    d2_anal_pra_inputComponents.push(d2_anal_pra_input_item);
    d2_anal_pra_inputComponents.push(d2_anal_pra_input_item2);
    d2_anal_pra_inputComponents.push(d2_anal_pra_input_answer);
    d2_anal_pra_inputComponents.push(d2_anal_pra_input_key);
    
    for (const thisComponent of d2_anal_pra_inputComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_anal_pra_inputRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_anal_pra_input' ---
    // get current time
    t = d2_anal_pra_inputClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_anal_pra_input_tip* updates
    if (t >= 0.0 && d2_anal_pra_input_tip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_pra_input_tip.tStart = t;  // (not accounting for frame time here)
      d2_anal_pra_input_tip.frameNStart = frameN;  // exact frame index
      
      d2_anal_pra_input_tip.setAutoDraw(true);
    }
    
    
    // *d2_anal_pra_input_item* updates
    if (t >= 0.0 && d2_anal_pra_input_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_pra_input_item.tStart = t;  // (not accounting for frame time here)
      d2_anal_pra_input_item.frameNStart = frameN;  // exact frame index
      
      d2_anal_pra_input_item.setAutoDraw(true);
    }
    
    
    // *d2_anal_pra_input_item2* updates
    if (t >= 0.0 && d2_anal_pra_input_item2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_pra_input_item2.tStart = t;  // (not accounting for frame time here)
      d2_anal_pra_input_item2.frameNStart = frameN;  // exact frame index
      
      d2_anal_pra_input_item2.setAutoDraw(true);
    }
    
    
    // *d2_anal_pra_input_answer* updates
    if (t >= 0.0 && d2_anal_pra_input_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_pra_input_answer.tStart = t;  // (not accounting for frame time here)
      d2_anal_pra_input_answer.frameNStart = frameN;  // exact frame index
      
      d2_anal_pra_input_answer.setAutoDraw(true);
    }
    
    
    // *d2_anal_pra_input_key* updates
    if (t >= 0.0 && d2_anal_pra_input_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_pra_input_key.tStart = t;  // (not accounting for frame time here)
      d2_anal_pra_input_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_anal_pra_input_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_anal_pra_input_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_anal_pra_input_key.clearEvents(); });
    }
    
    if (d2_anal_pra_input_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_anal_pra_input_key.getKeys({keyList: ['return'], waitRelease: false});
      _d2_anal_pra_input_key_allKeys = _d2_anal_pra_input_key_allKeys.concat(theseKeys);
      if (_d2_anal_pra_input_key_allKeys.length > 0) {
        d2_anal_pra_input_key.keys = _d2_anal_pra_input_key_allKeys[_d2_anal_pra_input_key_allKeys.length - 1].name;  // just the last key pressed
        d2_anal_pra_input_key.rt = _d2_anal_pra_input_key_allKeys[_d2_anal_pra_input_key_allKeys.length - 1].rt;
        d2_anal_pra_input_key.duration = _d2_anal_pra_input_key_allKeys[_d2_anal_pra_input_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_anal_pra_inputComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_anal_pra_inputRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_anal_pra_input' ---
    for (const thisComponent of d2_anal_pra_inputComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_anal_pra_input.stopped', globalClock.getTime());
    psychoJS.experiment.addData('d2_anal_pra_input_answer.text',d2_anal_pra_input_answer.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_anal_pra_input_key.corr, level);
    }
    psychoJS.experiment.addData('d2_anal_pra_input_key.keys', d2_anal_pra_input_key.keys);
    if (typeof d2_anal_pra_input_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_anal_pra_input_key.rt', d2_anal_pra_input_key.rt);
        psychoJS.experiment.addData('d2_anal_pra_input_key.duration', d2_anal_pra_input_key.duration);
        routineTimer.reset();
        }
    
    d2_anal_pra_input_key.stop();
    // the Routine "d2_anal_pra_input" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_inst4MaxDurationReached;
var _d2_key_resp_6_allKeys;
var d2_inst4MaxDuration;
var d2_inst4Components;
function d2_inst4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_inst4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_inst4Clock.reset();
    routineTimer.reset();
    d2_inst4MaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp_6.keys = undefined;
    d2_key_resp_6.rt = undefined;
    _d2_key_resp_6_allKeys = [];
    psychoJS.experiment.addData('d2_inst4.started', globalClock.getTime());
    d2_inst4MaxDuration = null
    // keep track of which components have finished
    d2_inst4Components = [];
    d2_inst4Components.push(d2_image_4);
    d2_inst4Components.push(d2_key_resp_6);
    
    for (const thisComponent of d2_inst4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_inst4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_inst4' ---
    // get current time
    t = d2_inst4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_image_4* updates
    if (t >= 0.0 && d2_image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_image_4.tStart = t;  // (not accounting for frame time here)
      d2_image_4.frameNStart = frameN;  // exact frame index
      
      d2_image_4.setAutoDraw(true);
    }
    
    
    // *d2_key_resp_6* updates
    if (t >= 0.0 && d2_key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_6.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_6.clearEvents(); });
    }
    
    if (d2_key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_6.getKeys({keyList: ['q'], waitRelease: false});
      _d2_key_resp_6_allKeys = _d2_key_resp_6_allKeys.concat(theseKeys);
      if (_d2_key_resp_6_allKeys.length > 0) {
        d2_key_resp_6.keys = _d2_key_resp_6_allKeys[_d2_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_6.rt = _d2_key_resp_6_allKeys[_d2_key_resp_6_allKeys.length - 1].rt;
        d2_key_resp_6.duration = _d2_key_resp_6_allKeys[_d2_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_inst4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_inst4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_inst4' ---
    for (const thisComponent of d2_inst4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_inst4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_6.keys', d2_key_resp_6.keys);
    if (typeof d2_key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_6.rt', d2_key_resp_6.rt);
        psychoJS.experiment.addData('d2_key_resp_6.duration', d2_key_resp_6.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_6.stop();
    // the Routine "d2_inst4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_analMaxDurationReached;
var _d2_key_resp_7_allKeys;
var d2_analMaxDuration;
var d2_analComponents;
function d2_analRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_anal' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_analClock.reset(routineTimer.getTime());
    routineTimer.add(60.000000);
    d2_analMaxDurationReached = false;
    // update component parameters for each repeat
    d2_text_7.setText(word3);
    d2_key_resp_7.keys = undefined;
    d2_key_resp_7.rt = undefined;
    _d2_key_resp_7_allKeys = [];
    psychoJS.experiment.addData('d2_anal.started', globalClock.getTime());
    d2_analMaxDuration = null
    // keep track of which components have finished
    d2_analComponents = [];
    d2_analComponents.push(d2_text_7);
    d2_analComponents.push(d2_key_resp_7);
    
    for (const thisComponent of d2_analComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_analRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_anal' ---
    // get current time
    t = d2_analClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_text_7* updates
    if (t >= 0.0 && d2_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_text_7.tStart = t;  // (not accounting for frame time here)
      d2_text_7.frameNStart = frameN;  // exact frame index
      
      d2_text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_text_7.setAutoDraw(false);
    }
    
    
    // *d2_key_resp_7* updates
    if (t >= 0.0 && d2_key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_7.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_7.clearEvents(); });
    }
    
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (d2_key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      d2_key_resp_7.status = PsychoJS.Status.FINISHED;
        }
      
    if (d2_key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_7.getKeys({keyList: ['g'], waitRelease: false});
      _d2_key_resp_7_allKeys = _d2_key_resp_7_allKeys.concat(theseKeys);
      if (_d2_key_resp_7_allKeys.length > 0) {
        d2_key_resp_7.keys = _d2_key_resp_7_allKeys[_d2_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_7.rt = _d2_key_resp_7_allKeys[_d2_key_resp_7_allKeys.length - 1].rt;
        d2_key_resp_7.duration = _d2_key_resp_7_allKeys[_d2_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_analComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_analRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_anal' ---
    for (const thisComponent of d2_analComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_anal.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_7.keys', d2_key_resp_7.keys);
    if (typeof d2_key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_7.rt', d2_key_resp_7.rt);
        psychoJS.experiment.addData('d2_key_resp_7.duration', d2_key_resp_7.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_7.stop();
    if (d2_analMaxDurationReached) {
        d2_analClock.add(d2_analMaxDuration);
    } else {
        d2_analClock.add(60.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_anal_inputMaxDurationReached;
var _d2_anal_input_key_allKeys;
var d2_anal_inputMaxDuration;
var d2_anal_inputComponents;
function d2_anal_inputRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_anal_input' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_anal_inputClock.reset();
    routineTimer.reset();
    d2_anal_inputMaxDurationReached = false;
    // update component parameters for each repeat
    d2_anal_input_item.setText(word3);
    d2_anal_input_answer.setText('');
    d2_anal_input_answer.refresh();
    d2_anal_input_key.keys = undefined;
    d2_anal_input_key.rt = undefined;
    _d2_anal_input_key_allKeys = [];
    psychoJS.experiment.addData('d2_anal_input.started', globalClock.getTime());
    d2_anal_inputMaxDuration = null
    // keep track of which components have finished
    d2_anal_inputComponents = [];
    d2_anal_inputComponents.push(d2_anal_input_tip);
    d2_anal_inputComponents.push(d2_anal_input_item);
    d2_anal_inputComponents.push(d2_anal_input_item2);
    d2_anal_inputComponents.push(d2_anal_input_answer);
    d2_anal_inputComponents.push(d2_anal_input_key);
    
    for (const thisComponent of d2_anal_inputComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_anal_inputRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_anal_input' ---
    // get current time
    t = d2_anal_inputClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_anal_input_tip* updates
    if (t >= 0.0 && d2_anal_input_tip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_input_tip.tStart = t;  // (not accounting for frame time here)
      d2_anal_input_tip.frameNStart = frameN;  // exact frame index
      
      d2_anal_input_tip.setAutoDraw(true);
    }
    
    
    // *d2_anal_input_item* updates
    if (t >= 0.0 && d2_anal_input_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_input_item.tStart = t;  // (not accounting for frame time here)
      d2_anal_input_item.frameNStart = frameN;  // exact frame index
      
      d2_anal_input_item.setAutoDraw(true);
    }
    
    
    // *d2_anal_input_item2* updates
    if (t >= 0.0 && d2_anal_input_item2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_input_item2.tStart = t;  // (not accounting for frame time here)
      d2_anal_input_item2.frameNStart = frameN;  // exact frame index
      
      d2_anal_input_item2.setAutoDraw(true);
    }
    
    
    // *d2_anal_input_answer* updates
    if (t >= 0.0 && d2_anal_input_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_input_answer.tStart = t;  // (not accounting for frame time here)
      d2_anal_input_answer.frameNStart = frameN;  // exact frame index
      
      d2_anal_input_answer.setAutoDraw(true);
    }
    
    
    // *d2_anal_input_key* updates
    if (t >= 0.0 && d2_anal_input_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_anal_input_key.tStart = t;  // (not accounting for frame time here)
      d2_anal_input_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_anal_input_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_anal_input_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_anal_input_key.clearEvents(); });
    }
    
    if (d2_anal_input_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_anal_input_key.getKeys({keyList: ['return'], waitRelease: false});
      _d2_anal_input_key_allKeys = _d2_anal_input_key_allKeys.concat(theseKeys);
      if (_d2_anal_input_key_allKeys.length > 0) {
        d2_anal_input_key.keys = _d2_anal_input_key_allKeys[_d2_anal_input_key_allKeys.length - 1].name;  // just the last key pressed
        d2_anal_input_key.rt = _d2_anal_input_key_allKeys[_d2_anal_input_key_allKeys.length - 1].rt;
        d2_anal_input_key.duration = _d2_anal_input_key_allKeys[_d2_anal_input_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_anal_inputComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_anal_inputRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_anal_input' ---
    for (const thisComponent of d2_anal_inputComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_anal_input.stopped', globalClock.getTime());
    psychoJS.experiment.addData('d2_anal_input_answer.text',d2_anal_input_answer.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_anal_input_key.corr, level);
    }
    psychoJS.experiment.addData('d2_anal_input_key.keys', d2_anal_input_key.keys);
    if (typeof d2_anal_input_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_anal_input_key.rt', d2_anal_input_key.rt);
        psychoJS.experiment.addData('d2_anal_input_key.duration', d2_anal_input_key.duration);
        routineTimer.reset();
        }
    
    d2_anal_input_key.stop();
    // the Routine "d2_anal_input" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var d2_inst5MaxDurationReached;
var _d2_key_resp_8_allKeys;
var d2_inst5MaxDuration;
var d2_inst5Components;
function d2_inst5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd2_inst5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    d2_inst5Clock.reset();
    routineTimer.reset();
    d2_inst5MaxDurationReached = false;
    // update component parameters for each repeat
    d2_key_resp_8.keys = undefined;
    d2_key_resp_8.rt = undefined;
    _d2_key_resp_8_allKeys = [];
    psychoJS.experiment.addData('d2_inst5.started', globalClock.getTime());
    d2_inst5MaxDuration = null
    // keep track of which components have finished
    d2_inst5Components = [];
    d2_inst5Components.push(d2_image_5);
    d2_inst5Components.push(d2_key_resp_8);
    
    for (const thisComponent of d2_inst5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function d2_inst5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd2_inst5' ---
    // get current time
    t = d2_inst5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *d2_image_5* updates
    if (t >= 0.0 && d2_image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_image_5.tStart = t;  // (not accounting for frame time here)
      d2_image_5.frameNStart = frameN;  // exact frame index
      
      d2_image_5.setAutoDraw(true);
    }
    
    
    // *d2_key_resp_8* updates
    if (t >= 0.0 && d2_key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d2_key_resp_8.tStart = t;  // (not accounting for frame time here)
      d2_key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { d2_key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { d2_key_resp_8.clearEvents(); });
    }
    
    if (d2_key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = d2_key_resp_8.getKeys({keyList: ['q'], waitRelease: false});
      _d2_key_resp_8_allKeys = _d2_key_resp_8_allKeys.concat(theseKeys);
      if (_d2_key_resp_8_allKeys.length > 0) {
        d2_key_resp_8.keys = _d2_key_resp_8_allKeys[_d2_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        d2_key_resp_8.rt = _d2_key_resp_8_allKeys[_d2_key_resp_8_allKeys.length - 1].rt;
        d2_key_resp_8.duration = _d2_key_resp_8_allKeys[_d2_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return __finishAndUpload('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_inst5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_inst5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd2_inst5' ---
    for (const thisComponent of d2_inst5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('d2_inst5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(d2_key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('d2_key_resp_8.keys', d2_key_resp_8.keys);
    if (typeof d2_key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('d2_key_resp_8.rt', d2_key_resp_8.rt);
        psychoJS.experiment.addData('d2_key_resp_8.duration', d2_key_resp_8.duration);
        routineTimer.reset();
        }
    
    d2_key_resp_8.stop();
    // the Routine "d2_inst5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}


/* ===== 本站注入：实验结束 -> 上传数据 -> 跳转 ===== */
async function __finishAndUpload(message, isCompleted)
{
  let csv = "";
  try {
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    csv = psychoJS.experiment.getResultAsCsv();
    if (window.__submitData) {
      const __res = await window.__submitData({
        participant: expInfo["participant"],
        experiment: expName,
        session: expInfo["session"],
        completed: (isCompleted === true),
        csv: csv
      });
      if (!__res || __res.ok !== true) {
        window.__fallbackDownload(expName + "_" + expInfo["participant"] + ".csv", csv);
      }
    }
  } catch (err) {
    console.error("[bridge] 上传失败", err);
    if (window.__fallbackDownload && csv) {
      window.__fallbackDownload(expName + "_" + expInfo["participant"] + ".csv", csv);
    }
  }
  if (window.__afterExperiment) {
    window.__afterExperiment({ experiment: expName, participant: expInfo["participant"], completed: (isCompleted === true), message: message });
  }
  return Scheduler.Event.QUIT;
}
