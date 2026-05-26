import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import officeImg from './assets/c1.jpg'
import officeImg2 from './assets/c4.jpeg'
import officeImg3 from './assets/c6.jpg'

import tut1 from './assets/tut1.png'
import tut2 from './assets/tut2.png'
import tut3 from './assets/tut3.png'

import item1 from './assets/ping.png'
 import cash11 from './assets/cash11.png'
import cash12 from './assets/cash12.png'
import cash13 from './assets/cash13.png'
import cash14 from './assets/cash14.png'
import cash15 from './assets/cash15.png'


import hurrysfx from './assets/hurry.mp3'
import boxy from './assets/selectbtn.webp'
import boxy2 from './assets/textboxy.png'
import menumusic from './assets/mustitle.mp3'
import resultmusic from './assets/musresul.mp3'
import selectmusic from './assets/selectmusic.mp3'
import l1music from './assets/back.mp3'
import l2music from './assets/l2.mp3'
import l3music from './assets/l3.mp3'
import clickSfx from './assets/click.mp3'
import correctSfx from './assets/good.mp3'
import wrongSfx from './assets/bad.mp3'
import wobysfx from './assets/woby.mp3'
import endsfx from './assets/end.mp3'
import socs from './assets/socs.webp'
import endbox from "./assets/endbox.png"


import pichsfx from './assets/pich.mp3'
import sounddoor from './assets/sounddoor.mp3'
import losemus from './assets/losemus.mp3'
import bgPlay from './assets/playbg.png'

import tutorialPanels from "./assets/tutorialPanel.webp"

import startlogo  from "./assets/startlogo.png"
import sublogo  from "./assets/sublogo.png"
import caselogo1 from "./assets/inc1.png"
import caselogo2 from "./assets/inc2.png"
import caselogo3 from "./assets/inc3.png"
import exitbutton from "./assets/exitbutton.png"
import settingsbutton from "./assets/settingsbutton.png"

import cash6 from "./assets/cash6.png"
import cash7 from "./assets/cash7.png"
import cash8 from "./assets/cash8.png"
import cash9 from "./assets/cash9.png"
import cash10 from "./assets/cash10.png"
import cash01 from "./assets/cash01.png"
import cash02 from "./assets/cash02.png"
import cash03 from "./assets/cash03.png"
import cash04 from "./assets/cash04.png"
import cash05 from "./assets/cash05.png"
import shad from "./assets/shad.png"
import folder1 from "./assets/folder.png"
import backmain from "./assets/grayback.png"

import mant from "./assets/mant.png"
import manthink from "./assets/manthink.png"

import womant from "./assets/womant.png"
import womanthink from "./assets/womanthink.png"

import plusone  from "./assets/plusone.png"
import correctsign from "./assets/correctsign.png"
import finishsign from "./assets/finishsign.png"
import timeupsign from "./assets/timeupsign.png"
import failsign  from "./assets/failsign.png"
import gatemusic from  './assets/stream.mp3'
import gatepic  from "./assets/gateback.png"
import selpic  from "./assets/selectback.png"

import gatedoor from  "./assets/gatedoor.png"
import selectbox from  "./assets/selectbox.png"
import gatedoorOpen from "./assets/gateopen.png"
import selectpapan from "./assets/selectpapan.png"
import boopaper from "./assets/boopaper.png"
import chib1 from "./assets/chib1.png"
import chib2 from "./assets/chib2.png"
import chib3 from "./assets/chib3.png"
import chib4 from "./assets/chib4.png"
import chib5 from "./assets/chib5.png"
import chib6 from "./assets/chib6.png"
import chib7 from "./assets/chib7.png"
import prop1 from "./assets/prop1.png"
import prop2 from "./assets/prop2.png"
import prop0 from "./assets/prop0.png"
import prop4 from "./assets/prop4.png"
import prop5 from "./assets/prop5.png"
import prop01 from "./assets/prop01.png"
import incomsign from "./assets/incomsign.png"
import buttstart from "./assets/buttstart.png"
import flipfem from "./assets/flipfem.png"
import flipman from "./assets/flipman.png"
import tutback from "./assets/tutback.png"
import endback from "./assets/endback.png"
import lightup from "./assets/lightup.png"
import tutarrow from "./assets/tutarrow.png"
//// 

////
function App() {
  
  const [playerName, setPlayerName] = useState('')
  const [screen, setScreen] = useState('gates')
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answeredCount, setAnsweredCount] = useState(0)
const [numberAnswer, setNumberAnswer] = useState('')
const [feedback, setFeedback] = useState(null)
const [foundPins, setFoundPins] = useState([])
  const [score, setScore] = useState(0)
const [summary, setSummary] = useState(null)
const [level, setLevel] = useState(null)
const [selectedLevel, setSelectedLevel] = useState(null)
const [activePin, setActivePin] = useState(null)
const [timeLeft, setTimeLeft] = useState(31)
const [timerActive, setTimerActive] = useState(false)
const [musicOn, setMusicOn] = useState(true)
const pinSound = useRef(new Audio(clickSfx))
const correctSound = useRef(new Audio(correctSfx))
const wrongSound = useRef(new Audio(wrongSfx))
const timeoutsound = useRef(new Audio(pichsfx))
const hurrySound = useRef(new Audio(hurrysfx))
const endSound = useRef(new Audio(endsfx))
const wobysound = useRef(new Audio(wobysfx))
const [usedQuestionIds, setUsedQuestionIds] = useState([]);

const [levelStatus, setLevelStatus] = useState({});
const [levelwrong, setlevelwrong] = useState({});
/////
const [lastQuestion, setLastQuestion] = useState(null)
const [canredo,setredo] = useState(0);
const [wrec,setwrec] = useState(0);
const [seesuma,setsuma] = useState(0);
const [timeoutOccurred, setTimeoutOccurred] = useState(false);
////
const [levelStartTime, setLevelStartTime] = useState(null);
const [levelEndTime, setLevelEndTime] = useState(null);
const [totalTime, setTotalTime] = useState(0);
const [trec , settrec] = useState({});
const [cleared , setclear]= useState({});
const [pinStatus, setPinStatus] = useState({})
const audioRef = useRef(null)
//////
const [showSettings, setShowSettings] = useState(false)
const [showexit, setShowexit] = useState(false)
const doorSound = useRef(new Audio(sounddoor))
const [showcredit, setshowcredit] = useState(false)
const [musicVolume, setMusicVolume] = useState(0.2)
const [sfxVolume, setSfxVolume] = useState(0.2)
const [muted, setMuted] = useState(false)
const [timeElapsed, setTimeElapsed] = useState(0)
const [gender, setGender] = useState('Male')
const [thistime, setthistime]= useState(false)
const [apper,setapper]= useState(false)
const [doorImg, setDoorImg] = useState(gatedoor);
const [animateDoor, setAnimateDoor] = useState(false);
const [eti,seteti]= useState(false);
const [yay,setyay] = useState(false);
const [eti2,seteti2]= useState(false);
////

///// play pin sound
const playPinSound = () => {

  const audio = pinSound.current
  audio.currentTime = 0
  audio.volume = muted ? 0 : sfxVolume
  pinSound.current.play();

}
const playwoby = () => {

  const audio = wobysound.current
  audio.currentTime = 0
  audio.volume = muted ? 0 : sfxVolume
  wobysound.current.play();

}
///// refrence music for pages

//// refrence page background
const backgrounds = {
  gates: gatepic,
  login: backmain,
  tutorial: tutback,
  levelSelect : selpic,
  play: bgPlay,
  result: endback
}
///// for redoing failed questions 
const handleRedo = () => {
  if (!lastQuestion) return;

  setSummary(null);           // close summary
  setCurrentQuestion(lastQuestion);  // show same question again
  setTimeLeft(prev => prev -1 );            // restart timer
  setTimerActive(true);
  
}
////// gender images
const genderpicref= {
Male: mant,
Female: womant,

}
const genderpicrefthink= {
Male: manthink,
Female: womanthink,

}

///// level refrence varibles
 const levels = [
   {
    id: 'CASE 1 – Client A ',
    bg: officeImg,
     music: l1music,
         logoimg: caselogo1,
         creditc: 'Somehow Prod. Khaim - KHAIM - Dova Syndrome',
    leveltitle: 'Financial statements',
    levelsect1: '\n Income Statement: ',
    levelsect2: '\n Balance Sheet: ',
    leveldesc: '- Revenue: Rp 2.500.000.000 \n - Expenses: Rp 1.600.000.000 \n - Net Income: Rp 900.000.000  \n ',
    leveldesc2:'- Cash: Rp 400.000.000  \n - Inventory: Rp 600.000.000 \n - Fixed Assets: Rp 1.500.000.000  \n - Accounts Payable: Rp 700.000.000 \n ',
    pins: [
      { id: 1, top: '11%', left: '2%', img:shad,  found: false, width: '410px', height: '380px',name:'Bag',limg:cash01 },
      { id: 2, top: '65%', left: '29%', img:shad,  found: false, width: '170px' , height: '160px',name:'Mouse',limg:cash02 },
      { id: 3, top: '48%', left: '42%', img:shad,   found: false, width: '300px', height: '140px',name:'Book',limg:cash03 },
      { id: 4, top: '68%', left: '72%', img:shad,   found: false, width: '230px', height: '290px',name:'ID.Card',limg:cash04 },
      { id: 5, top: '70%', left: '4%', img:shad,   found: false, width: '350px', height: '100px',name:'Marker',limg:cash05 },
    ],
    questions: [
      {
        id: 1,
        type: 'number',
        q: '1. Revenue  \n Sales Transaction Details: \n - Sales to PT Alpha = Rp 1.000.000.000  \n - Sales to PT Beta = Rp 800.000.000 \n - Sales to PT Citra = Rp 200.000.000  \n - Sales to PT Delta = Rp 500.000.000 \n = Total: "??"  \n how much it the total?',
        a: '2500000000',
        desc: 'Result : Rp 2,500,000,000 .'
      },
      {
        id: 2,
        type: 'multiple',
        q: '2. Expenses \n Expense Details: \n - Salary expense = Rp 1,000,000,000 \n - Electricity, water, telephone expenses = Rp 300,000,000 \n - Transportation & operational expenses = Rp 300,000,000 \n = Total: "??"\n how much is the total?',
       options: ['1,600,000,000', '1,500,000,000','1,700,000,000','900,000,000'],
        a: '1,600,000,000',
        desc: 'Result: Rp 1,600,000,000 .'
      },
      {
        id: 3,
        type: 'boolean',
        q: '3. Fixed Assets \n List of Assets: \n - Production machines = Rp 1,000,000,000 \n - Operational vehicles = Rp 500,000,000 \n = Total book value: Rp 1,500,000,000 \n Does the total fixed assets match the financial statements?',
        a: 'Correct',
        desc: 'Result: Correct = Rp 1,500,000,000'
      },
      {
        id: 4,
        type: 'number',
        q: '4. Inventory \n Stock Opname Results: \n - Raw materials = Rp 350,000,000 \n - Goods in process = Rp 150,000,000 \n - Finished goods = Rp 100,000,000 \n = Total: Rp "??" \n how much it the total?',
a: '600000000',
        desc: 'Result: Rp 600,000,000 .'
      },
      {
        id: 5,
        type: 'multiple',
        q: '5. Debt \n Accounts Payable Details: \n - Debt to PT Supplier A = Rp 400,000,000 \n - Debt to PT Supplier B = Rp 300,000,000 \n = Total: "??" \n How much is the total debt in the financial report?',
       options: ['600,000,000', '500,000,000','700,000,000','900,000,000'],
        a: '700,000,000',
        desc: 'Result: Rp 700,000,000 .'
      }
    
    ]
  },

  {
    id: ' CASE 2 – Client B ',
    bg: officeImg2,
    music: l2music,
       logoimg: caselogo2,
       creditc: '探偵は喫茶にいる的なBGM - TAKAO Masaki - Dova Syndrome',
    leveltitle:'Financial statements',
levelsect1: '\n Income Statement: ',
levelsect2: '\n Balance Sheet: ',
    leveldesc: '- Revenue: Rp 2.500.000.000 \n - Expenses: Rp 1.500.000.000  \n - Net Income: Rp 1.000.000.000 \n ',
    leveldesc2: '- Cash: Rp 400.000.000 \n - Inventory: Rp 800.000.000 \n - Fixed Assets: Rp 1.500.000.000 \n - Accounts Payable: Rp 700.000.000  ',
    pins: [
        { id: 1, top: '57%', left: '24%', img: shad,  found: false, width: '80px' , height: '70px',name:'Mouse', limg:cash6 },
      { id: 2, top: '25%', left: '47%', img: shad,   found: false, width: '230px', height: '140px' ,name:'Laptop', limg:cash7 },
      { id: 3, top: '49%', left: '73%', img: shad,  found: false, width: '250px' , height: '90px',name:'Book1', limg:cash8 },
      { id: 4, top: '48%', left: '55%', img: shad,  found: false, width: '190px', height: '130px' ,name:'Book2', limg:cash9 },
      { id: 5, top: '28%', left: '67%', img: shad,  found: false, width: '260px', height: '160px' ,name:'Bag', limg:cash10 },
    ],
    questions: [
      {
        id: 1,
        type: 'boolean',
        q: '1. Revenue \n Sales Transaction Details: \n - Sales to PT Alpha = Rp 1,000,000,000 \n - Sales to PT Beta = Rp 800,000,000 \n - Sales to PT Citra = Rp 200,000,000 \n - Sales to PT Delta = Rp 300,000,000 \n = Total: Rp 2,300,000,000 \n Does the total revenue match the financial report?',
        a: 'Wrong',
        desc: 'Result: False = (Overstatement Rp 200,000,000) .'
      },
      {
        id: 2,
        type: 'number',
        q: '2. Expenses \n Expense Details: \n - Salary expenses = Rp 900,000,000 \n - Electricity, water, telephone expenses = Rp 300,000,000 \n - Transportation & operational expenses = Rp 300,000,000 \n = Total: "??" \n how much is the total?',
        a: '1500000000',
        desc: 'Result:  Rp 1,500,000,000 .'
      },
      {
        id: 3,
        type: 'multiple',
        q: '3. Fixed Assets \n List of Assets: \n - Production machines = Rp. 1,000,000,000 \n - Operational vehicles = Rp."500,000,000"\n Total = Rp "??" \n how much is the total?',
        options: ['1,300,000,000', '1,500,000,000','1,700,000,000','1,600,000,000'],
        a: '1,500,000,000',
        desc: 'Result: Rp 1,500,000,000 .'
      },
      {
        id: 4,
        type: 'boolean',
        q: '4. Inventory \n Stock Opname Results: \n - Raw materials = Rp. 350,000,000 \n - Goods in process = Rp. 150,000,000 \n - Finished goods = Rp. 100,000,000 \n = Total: Rp. 600,000,000 \n Does the total inventory match the financial report?',
        a: 'Wrong',
        desc: 'Result: False (Understatement Rp 200,000,000) .'
      },
      {
        id: 5,
        type: 'multiple',
        q: '5. Debt \n Accounts Payable Details: \n - Debt to PT Supplier A = Rp 400,000,000 \n - Debt to PT Supplier B = Rp 300,000,000 \n = Total: Rp "??" \n how much is the total?',
              options: ['500,000,000', '400,000,000','700,000,000','800,000,000'],
        a: '700,000,000',
        desc: 'Result: Rp: 700,000,000 .'
      }
    ]
  },

  {
    id: 'CASE 3 – Client C ',
    bg: officeImg3,
    music: l3music,
    logoimg: caselogo3,
    creditc: '足跡迷路 - かずち - Dova Syndrome',
    leveltitle:'Financial statements',
levelsect1: '\n Income Statement: ',
levelsect2: '\n Balance Sheet: ',
    leveldesc: '- Revenue: Rp 2.500.000.000 \n - Expenses: Rp 1.400.000.000  \n - Net Income: Rp 1.100.000.000 \n  ',
    leveldesc2: '- Cash: Rp 500.000.000 \n - Inventory: Rp 900.000.000 \n - Fixed Assets: Rp 1.500.000.000 \n - Accounts Payable: Rp 600.000.000  ',
    pins: [
         { id: 1, top: '60%', left: '52%', img: shad,  found: false, width: '200px', height: '150px' ,name:'Paper',limg:cash11 },
      { id: 2, top: '32%', left: '49%', img: shad,  found: false, width: '70px', height: '70px' ,name:'Card', limg:cash12 },
      { id: 3, top: '77%', left: '18%', img: shad, found: false, width: '70px' , height: '40px',name:'USB', limg:cash13 },
      { id: 4, top: '53%', left: '22%', img: shad,  found: false, width: '90px' , height: '50px',name:'Watch', limg:cash14 },
      { id: 5, top: '20%', left: '69%', img: shad , found: false, width: '150px', height: '200px' ,name:'Bag', limg:cash15 },
    ],
    questions: [
      {
        id: 1,
        type: 'multiple',
        q: '1. Revenue \n Sales Transaction Details: \n - Sales to PT Alpha = Rp 1,000,000,000 \n - Sales to PT Beta = Rp 800,000,000 \n - Sales to PT Citra = Rp 200,000,000 \n - Sales to PT Delta = Rp 300,000,000 \n = Total: Rp "??" \n How many is the total should it be?',
                options: ['2,300,000,000', '2,500,000,000','2,700,000,000','2,600,000,000'],
        a: '2,300,000,000',
        desc: 'Hasil:  2,300,000,000 .'
      },
      {
        id: 2,
        type: 'boolean',
        q: '2. Expenses \n Expense Details: \n - Salary expense = Rp 1,000,000,000 \n - Electricity, water, telephone expenses = Rp 400,000,000 \n - Transportation & operational expenses = Rp 300,000,000 \n = Total: Rp 1,700,000,000 \n Does the total expenses match the financial report?',
        a: 'Wrong',
        desc: 'Result:  False (Understated) .'
      },
      {
        id: 3,
        type: 'boolean',
        q: '3. Fixed Assets \n List of Assets: \n - Production machines = Rp 1,000,000,000 \n - Operational vehicles = Rp 500,000,000 \n Total = Rp "??" \n Is the total fixed assets in accordance with the financial statements?',
        a: 'Correct',
        desc: 'Result: True .'
      },
      {
        id: 4,
        type: 'number',
        q: '4. Inventory \n Stock Opname Results: \n - Raw materials = Rp. 350,000,000 \n - Goods in process = Rp. 150,000,000 \n - Finished goods = Rp. 100,000,000 \n = Total: Rp."??" \n How much is the total should be?',
        a: '600000000',
        desc: 'Result: Rp 600,000,000 .'
      },
      {
        id: 5,
        type: 'number',
        q: '5. Debt \n Accounts Payable Details: \n - Debt to PT Supplier A = Rp 500,000,000 \n - Debt to PT Supplier B = Rp 400,000,000 \n = Total: Rp "??" \n How much is the total should be?',
        a: '900000000',
        desc: 'Result:   Rp 900,000,000 .'
      }
    ]
  }
]

////// variable of level check
const currentLevel = levels.find(l => l.id === level)

///function to start level when button press
const startLevel = (lvlId) => {
  setLevel(lvlId);
  setclear(prev => ({
    ...prev,
    [lvlId]: (prev[lvlId] || 0) + 1
  }));
  setTimeLeft(31); setTimerActive(false);
   setLevelStartTime(Date.now()); // ✅ START TIMER
  setLevelEndTime(null);
  setTotalTime(0);
  setTimeElapsed(0)
  setSelectedLevel(lvlId);
  setFoundPins([]);
  setActivePin(null);
  setPinStatus({});
  setUsedQuestionIds([]);
   setSummary(null);  
  setAnsweredCount(0);
  setScore(0);
  setwrec(0);
  setTimeoutOccurred(false);
     setthistime(false);
     setapper (false)
  setCurrentQuestion(null);
  setScreen('play');
}

///// end level if all done
const wow =()=>{
  if (answeredCount + 1 >= currentLevel.pins.length) {
 const end = Date.now();
    setLevelEndTime(end);

    const duration = Math.floor((end - levelStartTime) / 1000); // in seconds
    setTotalTime(duration);

  // Update status the level finished
 
 const isSolved = score >= Math.ceil(5);
let statusText = '';
let wrongrecord= wrec;
let timerecord = duration;

    if (timeoutOccurred) {
      //  timeout happened
      statusText = 'Disclaimer of Opinion';
    } else if (score === currentLevel.pins.length) {
      // no timeouts
      if (level.includes('CASE 1')) statusText = 'Unqualified';
      else if (level.includes('CASE 2')) statusText = 'Qualified';
      else if (level.includes('CASE 3')) statusText = 'Adverse';
    } else {
    
      statusText = 'Not Solved';
    }
    //  Update the levelStatus state using the current level ID as the key
    setLevelStatus(prev => ({
      ...prev,
      [level]: statusText,
  
    }));
    setlevelwrong(prev =>({
...prev,
[level]: wrongrecord,
    }));
    settrec(prev =>({
...prev,
[level]: timerecord,
    }));
     
    setScreen('result')

  
}
}
/////pick unused questions
const handlePointClick = () => {
  // Filter questions have already been answered
  const availableQuestions = currentLevel.questions.filter(
    q => !usedQuestionIds.includes(q.id)
  );

  if (availableQuestions.length > 0) {
    const randomIdx = Math.floor(Math.random() * availableQuestions.length);
    setCurrentQuestion(availableQuestions[randomIdx]);
  } else {

  }
};
/// appear question when pin click
const handlePinClick = (pinId) => {
 if (foundPins.includes(pinId) || currentQuestion || summary) return;
 playPinSound();
  setActivePin(pinId);
  setTimeLeft(31); // Reset seconds 
  setTimerActive(true);
  setapper(true)
  handlePointClick();
}
//// func to answer and retry or success
const handleAnswer = (userAnswer) => {
  if (!currentQuestion) return;
 
  const isCorrect = String(userAnswer) === String(currentQuestion.a);
if (isCorrect) {
    correctSound.currentTime = 0
   setTimerActive(false)
   correctSound.current.volume = muted ? 0 : sfxVolume
    correctSound.current.play();
    setScore(prev => prev + 1);
    setFeedback('You"re right!');
setPinStatus(prev => {
  const newStatus = { ...prev }
  newStatus[activePin] = 'correct'
  
  return newStatus
})

      setUsedQuestionIds(prev => [...prev, currentQuestion.id]);
setAnsweredCount(prev => prev + 1)
        setredo(0);
setsuma(1);
  } else {
    wrongSound.currentTime = 0
    wrongSound.current.volume = muted ? 0 : sfxVolume
    wrongSound.current.play();
    setFeedback('Your answer is wrong, you can try again');
    setPinStatus(prev => ({
  ...prev,
  [activePin]: 'wrong'
}))

    setredo(1);
    setwrec(prev => prev + 1)
    setsuma(0);
  }
 setSummary({
    question: currentQuestion.q,
    description: currentQuestion.desc,
    userAnswer,
    correctAnswer: currentQuestion.a,
    isCorrect
  })
setFoundPins(prev => prev.includes(activePin) ? prev : [...prev, activePin])
  
  setLastQuestion(currentQuestion);
   setCurrentQuestion(null)
setNumberAnswer('')

 
 
}
///

//// timer timeout
useEffect(() => {
  
  let interval;
  if (timerActive && timeLeft > 0) {
    interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
   }  if (timerActive && timeLeft === 5) 
    {
        hurrySound.currentTime = 0
hurrySound.current.volume = muted ? 0 : sfxVolume

      hurrySound.current.play();
    }

   else if  (timerActive && timeLeft === 0) {
  timeoutsound.currentTime = 0
  timeoutsound.current.volume = muted ? 0 : sfxVolume

   timeoutsound.current.play()
   setTimeoutOccurred(true);
   setthistime(true)
   handleAnswer('TIMEOUT ⏰');
   setPinStatus(prev => ({
  ...prev,
  [activePin]: 'timeout'
}))
   setsuma(0);
   setredo(0)
setAnsweredCount(prev => prev + 1)

       setTimerActive(false);

  }
  return () => clearInterval(interval);
}, [timerActive, timeLeft, ])
///// music function can error
useEffect(() => {
  if (!screen || !musicOn) return

  if (audioRef.current) {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  let musicSrc = null

  if (screen === 'play') {
    const levelData = levels.find(l => l.id === level)
    musicSrc = levelData?.music
  } else if (screen === 'tutorial') {
    
    musicSrc = menumusic
      } else if (screen === 'login') {
    musicSrc = gatemusic
  
  } else if (screen === 'result') {
    if(!timeoutOccurred){
    musicSrc = resultmusic
    }
    else if(timeoutOccurred){
      musicSrc = losemus
    }
  }
    else if (screen === 'levelSelect') {
    musicSrc = selectmusic
  }

  if (!musicSrc) return

  const newAudio = new Audio(musicSrc)
  newAudio.loop = true
  newAudio.volume = muted ? 0 : musicVolume

  newAudio.play().catch(() => {})

  audioRef.current = newAudio

  return () => {
    newAudio.pause()
  }
}, [screen, level])

useEffect(() => {
  if (!audioRef.current) return
  audioRef.current.volume = muted ? 0 : musicVolume
}, [musicVolume, muted])
//// turn sec to 00:00 form
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m.toString().padStart(2, '0')}:${s
    .toString()
    .padStart(2, '0')}`;
};

///// start level timer
useEffect(() => {
  if (screen !== 'play') return

 // reset when level starts

  const interval = setInterval(() => {
    setTimeElapsed(prev => prev + 1)
  }, 1000)

  return () => clearInterval(interval)
}, [screen, currentLevel])
///cleanup
 useEffect(() => {
  return () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }
}, [])
////staring gates
  return (
    
   <div className="bgg">
        {/* background images */}

<div className='bggimage'
  style={{
   
    backgroundImage: `url(${backgrounds[screen]})`,
       

  }}>
     {/*<img src={strips} alt="Strips" className="strips" />*/}
             {/* open settings for sound config */}

 <img src={settingsbutton} alt="Settings" 
onClick={() => {
  playPinSound();
  setShowSettings(prev => !prev);
}}
  className={eti?'goneing':'settingbutton'}
  
/>
 
{showSettings && (
  <div
    className='setsetting'
    
  >
    <h4>Settings</h4>

    {/* MUSIC SLIDER */}
    <label>Music: {Math.round(musicVolume * 100)} %</label>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={musicVolume}
      onChange={(e) => {
        const val = Number(e.target.value)
        setMusicVolume(val)
        if (audioRef.current) {
          audioRef.current.volume = muted ? 0 : val
        }
      }}
      style={{ width: '100%' }}
    />

    {/* SFX SLIDER */}
    <label>SFX: {Math.round(sfxVolume * 100)} %</label>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={sfxVolume}
      onChange={(e) => {
        setSfxVolume(Number(e.target.value))
      }}
      style={{ width: '100%' }}
    />

    {/* MUTE BUTTON */}
    <button
      onClick={() => {
        setMuted(prev => !prev)

        if (audioRef.current) {
          audioRef.current.volume = !muted ? 0 : musicVolume
        }
      }}
      style={{
        width: '100%',
        marginTop: '10px',
        padding: '8px',
        borderRadius: '8px',
        border: 'none',
        background: muted ? '#dc3545' : '#28a745',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      {muted ? 'Muted' : 'Sound ON'}
    </button>

    {/* CLOSE */}
    <button
     onClick={() => {
  playPinSound();
  setShowSettings(prev => !prev);
}}
      style={{
        width: '100%',
        marginTop: '8px',
        padding: '8px',
        borderRadius: '8px',
        border: 'none',
        background: '#555',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      Close
    </button>
  </div>
)}
{showcredit && (
  <div
   className='credcredit'
  >

    <h3>Credits
    </h3>
    <h4>Music:</h4>
    <h4>Dova syndrome:</h4>
    <p>Shall we meet?  - MATSU  <br></br> Somebody Prod. Khaim - KHAIM <br></br> Night View - Shaun the Sloth <br></br> Somehow Prod. Khaim - KHAIM <br></br> 探偵は喫茶にいる的なBGM - TAKAO Masaki<br></br> 足跡迷路 - かずち <br></br>野良猫は宇宙を目指した - Sharou <br></br> 神隠しの真相  - Sharou - Dova Syndrome</p>
   <h4>Staff:</h4> 

<p> 
Mikhael Luviandrie  
<br></br> 
Prihandoyo  
<br></br> 
Muhammad Rozaan Aqila
<br></br> 
Weny Cahyani Santoso 
 </p>
    {/* CLOSE */}
    <button
onClick={() => {
  playPinSound();
  setshowcredit(prev => !prev);
}}
      style={{
        width: '100%',
        marginTop: '8px',
        padding: '8px',
        borderRadius: '8px',
        border: 'none',
        background: '#555',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      Close
    </button>
  </div>
)}
  {showexit && (
  <div
    style={{
      position: 'fixed',
      width:'50440px',
      zIndex: 999,
        opacity: '0.7',

    }}
  >
  <img src= {bgPlay} alt="blck" style={{width:'5000px',}} />
  </div>
)}
{showexit && (
  <div
 className='leaveexits'
  >
    <h4>LEAVE THIS CASE?</h4>

    {/* MUTE BUTTON */}
    <button
      onClick={() => {
        setTimerActive(false);
       setScreen('levelSelect')  
             playPinSound()
              
      setShowexit(false)
        
      }}
      style={{
        width: '100%',
        marginTop: '10px',
        padding: '8px',
        borderRadius: '8px',
     
        background:'#dc3545',
          border: '2px solid #FF808C',

        color: '#fff',
        cursor: 'pointer'
      }}
    >
    Yes, Exit
    </button>

    {/* CLOSE */}
    <button
      onClick={() => setShowexit(false)}
      style={{
        width: '100%',
        marginTop: '8px',
        padding: '8px',
        borderRadius: '8px',
        
        background: '#007bff',
            border: '2px solid #8BC3FF',

        color: '#fff',
        cursor: 'pointer'
      }}
    >
     No, Close
    </button>
     <div className="dialogboxexit">
                  <h2>Are you leaving this case?  You will lose progress <br></br> and enter the case selection screen.</h2>
               <h2 className='enddialog'>V</h2>
                  </div>
  </div>
  
)}

        {/* binus logo */}

<img src={socs} alt="Socs" className="socs-img" />

  <div className="screens" >
 {screen === 'gates' && (
        
        <div className="screens" >

 <button  alt="Settings" 
onClick={() => {
  playPinSound();
  setshowcredit(prev => !prev);
}}
  className='creditbtn'
  
>
  Credits
</button>



 <img src={flipfem} alt="Player"  className={eti?'goneing':'player-img2'} />
  
<img src={doorImg} alt="door" className={animateDoor ? "weenimatedoor" : "gatedoors"} /> 
<img src={flipman} alt="Player"  className={eti?'goneing':'player-img21'} />
<p className={eti?'goneing':'cornercred'}>Music: None</p>

  <h4 style={{filter: 'opacity(0)'}}>,</h4>
  <div className={eti?'goneing':'gatesarea'}>
<div className="gatestart">
 {/* <h1 className='main-title'> Audit Case</h1>*/}
  <img src={startlogo} alt="dect" className="logostart" />
<br />
    <img src={sublogo} alt="dect" className="logostartsub" />
<br />
<h2 className='subtitles1'>uncover the truth behind the figures</h2>



  </div>
   <button
                    onMouseEnter={()=>playwoby()}
onClick={() =>{
                           doorSound.currentTime = 0
doorSound.current.volume = muted ? 0 : sfxVolume
setAnimateDoor(true)
      doorSound.current.play();
                     setDoorImg(gatedoorOpen); // change image first
seteti(true);
   
    setTimeout(() => {
      setScreen("login");     // then change screen after 1 sec
      setshowcredit(false);
      setAnimateDoor(false);
    }, 2000);
  setTimeout(()=>{seteti(false)},3000);   
  }} 
                    className="buttonin"
                  >
  Enter office                 </button>
                </div>



        </div>
        
      )}
      
      {/* SCREEN 1: LOGIN  / enter name and gender that is use in game*/}
      {screen === 'login' && (
        
        <div className="screens" >

        {/* player image that change with gender */}
 <button  alt="Settings" 
onClick={() => {
  playPinSound();
  setshowcredit(prev => !prev);
}}
  className='creditbtn'
  
>
  Credits
</button>
<img src={chib2} alt='chib1' className='chibs1'/>
     <img src={chib1} alt='chib1' className='chibs4'/>
                                                <img src={genderpicref[gender]} alt="Player" className="player-img" />
                                                <p className='cornercred'>Music: Shall we meet？ - MATSU - Dova Syndrome</p>

                          <h1 style={{filter: 'opacity(0)'}}>,</h1>
                            <h1 style={{filter: 'opacity(0)'}}>,</h1>

 <div className="login-area">

                <div className="gatestart">

                  <h3>Please enter your name.</h3>
                  <input
                    type="text"
                    placeholder="Auditor's Name Here..."
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="inputName"
                  />
                  <br />
                  <br />
                  {/* gender BUTTON */}
  <div >
      <h3 className='justblack'>Gender: {gender}</h3>
  <button className="gender-selectb" onMouseEnter={()=>playwoby()} onClick={() => {setGender('Male'), playPinSound()}}>Male</button>
  <button className="gender-selectb" onMouseEnter={()=>playwoby()}onClick={() => {setGender('Female'), playPinSound()}}>Female</button>
</div>
 <button
                    onClick={() =>{
                      playerName.trim()
                        ? ( (setScreen("tutorial")),setAnimateDoor(false)  )
                        : alert("Please enter a name!")
                    
                    }}
                    className="actionBtnStyleb"
                  >
  Enter Name                 </button>
                </div>
              </div>
    <h3></h3>

       
  <div className="dialogbox">
                  <h2>Welcome, Auditor! Please identify yourself.</h2>
               <h2 className='enddialog'>V</h2>
                  </div>
        </div>
        
      )}

      {/* SCREEN 2: TUTORIAL/ show how to play keep simple */ }

      {screen === 'tutorial' && (
        <div className="screens" >
               <img src={prop2} alt='chib1' className='props2'/>

   <img src={chib3} alt='chib1' className='chibs1'/>
   

             <img src={genderpicref[gender]} alt="Player" className="player-img" />
<p className='cornercred'>Music:  Somebody Prod. Khaim - KHAIM - Dova Syndrome</p>

          <h1 className='title'>Tutorial:</h1>
           <div className="tutorial">
                        <div className="panel">
                          <img src={tutorialPanels} alt="Tutorial 1" />
                          <div className="panel-text">
                            <p className="black-letter">Step 1</p>
                            <h3 className="tut-1">FIND THE OBJECT</h3>
                            <img src={tut1} alt="Tutorial 1" />
                          </div>
                        </div>
          
                        <div className="panel">
                          <img src={tutorialPanels} alt="Tutorial 1" />
                          <div className="panel-text">
                            <p className="black-letter">Step 2</p>
                            <h3 className="tut-2">VERIFY TRANSACTIONS</h3>
                            <img src={tut2} alt="Tutorial 2" />
                          </div>
                        </div>
          
                        <div className="panel">
                          <img src={tutorialPanels} alt="Tutorial 1" />
                          <div className="panel-text">
                             <p className="black-letter">Step 3</p>
                            <h3 className="tut-3">AUDIT OPINION</h3>
                            <img src={tut3} alt="Tutorial 3" />
                          </div>
                        </div>
                
                      </div>
             <h1> </h1>
          
          <button onClick={() => 
          {setScreen('levelSelect')  
             playPinSound() 
             }}    className="actionBtnStyle">Start Audit</button>
          <h1></h1>
        
<div className="dialogbox">
                  <h2 >Welcome, Auditor '{playerName}' !<br></br> Before auditing you must know the procedures.</h2>
      <h2 className='enddialog'>V</h2>
                  </div>
          
 
        </div>
      )}
      {/* SCREEN 2.5: LEVEL SELECT / pilih level/ case yang dimain*/}
{screen === 'levelSelect' && (
           <div>
  <div className="selects">
 
            <h1 className="select-text">.</h1>
            <h5 className="select-text">.</h5>
    {/* Horizontal Scroll Container */}
    <div className='select-container' >
    {levels.map((lvl) => {
        const status = levelStatus[lvl.id]; // Get current status
        {/*} const statwrong = levelwrong[lvl.id];
           const stattime= trec[lvl.id];
           const statclear = cleared[lvl.id];*/}
        return (
          <div key={lvl.id} className="select-button select-text2">
            <img src={lvl.logoimg} alt={lvl.name} className='selogo-img' />
            <h3> {lvl.id}</h3>
            {status ? null: <h3 style={{filter: 'opacity(0)'}}>,</h3>}

            {/* Status Badge */}
           {status && (
  <div className='statbadge' style={{
  
         background: status === 'Disclaimer of Opinion' ? ' #ff4759' : ' #06d143',
           border:  status === 'Disclaimer of Opinion'? '2px solid #ff4d4f' : '2px solid #00bfa5',
color: status === 'Disclaimer of Opinion'? 'rgb(0, 0, 0)' : 'white',

    
  }}>
    Opinion: {status}  
  {/*  Wrong : {statwrong} |
     Time : {stattime} |
     attempt : {statclear} */}
  </div>
)}

            <button 
              onClick={() =>{ setAnimateDoor(true),seteti(true),seteti2(true),playPinSound(),setTimeout(() =>{startLevel(lvl.id),setAnimateDoor(false)}, 2000), setTimeout(()=>{seteti(false)},3000),setTimeout(()=>{seteti2(false)},6000) }}
              className="actionBtnStyle"
            >
              {status ? 'Play Again' : 'Play'}
            </button>
              

          </div>
          
        );
      })}

                             <img src={genderpicref[gender]} alt="Player" className="player-img" />
<p className='cornercred'>Music: Night View - Shaun the Sloth - Dova Syndrome</p>
    </div>
    <h1></h1>
      <img src={prop4} alt='chib1' className='props4'/>

       <img src={chib4} alt='chib2' className='chibs2'/>
  <img
  src={folder1}
  className={animateDoor ? "weenimate" : ""}
  style={{ position: "fixed", left: "500%", top:"20%" }}
/>
</div>
     <div className="dialogbox">
                  <h2>Please choose between these clients to start auditing.</h2>
               <h2 className='enddialog'>V</h2>
                  </div>
  </div>
)}


      {/* SCREEN 3: PLAY (AUDIT MODE) /tempat main case*/}
      {screen === 'play' && (
        <div className="play-area">



<div className="titlebox" >
 {/* <img src={headerplay} alt="head" className='headerplay' />*/}
  <div className="timer">
  ⏱ {formatTime(timeElapsed)}
</div> 

<img src={exitbutton} alt="Exit" onClick={() => 
          {  setShowexit(prev => !prev)

             playPinSound() 
             }} className='exitbtn'   />
  

   <span className="title-a">{level}</span>
   <span style={{display: "inline-block", width: "11px",}}></span>
   <span className='title-b'>{playerName}</span>
   <span style={{display: "inline-block", width: "11px",}}></span>
     <span className='title-c'>Item: {answeredCount}/{currentLevel.pins.length}</span>
    
{/*<h3>Score: {score}</h3>
<h3>Wrong: {wrec}</h3>*/}

</div>
 <div className={eti2?'dialogbox1':'goneing'}>
                  <h2>Good luck, Auditor '{playerName}.</h2>
               <h2 className='enddialog'>V</h2>
                  </div>
<div className="progress-bar">
  <div
    className="progress-fill"
    style={{
      width: `${(answeredCount / currentLevel.pins.length) * 100}%`
    }}
  />
</div>
      
       {apper ? <img src={ genderpicrefthink[gender] } alt="Player" className="player-img1" /> : null}
       <div className='tbo'>
<img src={boxy2}  className='tboxy-play'  /> 
    <div className='titlebox1' >
      
      <div className='levelts'>
         {currentLevel.leveltitle}
        </div>
        <div className='levelts'>
         {currentLevel.levelsect1}
        </div>
          {currentLevel.leveldesc}

        <div className='levelts'>
         {currentLevel.levelsect2}
        </div>
  {currentLevel.leveldesc2}
</div>
</div>
<div className="play-area-right" >

            <div className="img-container" style={{  filter: apper ? 'grayscale(40%) brightness(60%)' : 'none',}}>
           <img src={currentLevel.bg} alt="BG" className="bg-img"  />
           <p className='cornercred'>Music: {currentLevel.creditc}</p>

{currentLevel.pins.map(pin => {
  const isFound = foundPins.includes(pin.id)

  return (
    <div
      key={pin.id}
      style={{
        position: 'absolute',
        top: pin.top,
        left: pin.left,
      }}
    >
        {isFound ?  <img
        src={item1}
       
        className='pinstyle'
      
      /> : null}
     
      <img
      src={pin.img}
       onClick={() => handlePinClick(pin.id)}
      className='pinstyleb'
       key={pin.id}
      style={{
        width: pin.width,
          height: pin.height,
      }}
      />
      {/* ✅ CHECKMARK OVERLAY */}
      {isFound && (
        <div className="checkmark-overlay" >
          
        </div>
      )}
    </div>
  )
})}  
            </div>

            {/* list BOX */}
             <div className='listtitle'> <p>Object List</p> </div>
            <div className="object-list">
             
  {currentLevel.pins.map((pin) => {
const status = pinStatus[pin.id]
    return (
<div
  key={pin.id}
  className="object-item"
  style={{
    backgroundColor:
      status === 'correct'
        ? '#00c853'   // green
        : status === 'wrong'
        ? '#ffd600'   // yellow
        : status === 'timeout'
        ? '#d50000'   // red
        : 'transparent',
    border: '2px solid white'
  }}
>
        <img src={pin.limg} alt="item" />
        <p className='objectname'>{pin.name}</p>
      </div>
     
      
    )
  })}
</div>
{/* QUESTION BOX */}
            {currentQuestion && (
              
              <div className="questionbox">

                <div className={`time-left ${timeLeft <= 10 ? 'danger' : ''}`}>
              
      ⏱ {formatTime(timeLeft)}s
    </div>
                {timeLeft <= 10 ?  <h1 className='hurrytext'>HURRY UP</h1> : null}

             <h3 className="laporantitle" >Findings Report</h3>   
                <p className="question-text" >{currentQuestion.q}</p>
                
                <div className='divquestion' >

  {/* MULTIPLE CHOICE */}
  {currentQuestion.type === 'multiple' && (
    currentQuestion.options.map(opt => (
      <button
        key={opt}
        onClick={() => handleAnswer(opt)}
        className="btnStyle"
      >
        {opt}
      </button>
    ))
  )}

  {/* BOOLEAN */}
  {currentQuestion.type === 'boolean' && (
    <>
      <button onClick={() => handleAnswer('Correct')} className="btnStyle">Right / Yes</button>
      <button onClick={() => handleAnswer('Wrong')} className="btnStyle">Wrong / No</button>
    </>
  )}

  {/* NUMBER INPUT */}
  {currentQuestion.type === 'number' && (
    <>
      <input
        type="number"
        value={numberAnswer}
        onChange={(e) => setNumberAnswer(e.target.value)}
        placeholder="Enter number..."
        className="inputName"
       
      />

      <button
        onClick={() => handleAnswer(numberAnswer)}
        className="actionBtnStyle"
   
      >
           
        Confirm
      </button>
    </>
  )}

</div>
              {/*  <button onClick={() => setCurrentQuestion(null)} className='rejectbtn' >Batalkan</button> */}
              </div>
            )}
          </div>
{summary && (
  <div className="summary">
                              
                                 <img src={summary.isCorrect  ? plusone:shad } alt="plus" className="plusstyle" />
<img src={summary.isCorrect  ? correctsign:thistime  ? timeupsign: failsign } alt="plus" className="sumsign" />
    <h3 className='topz' >Summary of Findings</h3>

    <p className='question-text'><strong>Question:</strong><br />{summary.question}</p>
       <div className="time-left">
      ⏱ {formatTime(timeLeft)}s
    </div>
{seesuma ? <p className="summary-desc" style={{
    backgroundColor: summary.isCorrect ? '#e6fffa' : '#fff5f5',
  border: summary.isCorrect ? '2px solid #00bfa5' : '2px solid #ff4d4f',
  
}}>
  
  {summary.description}
</p>
 : null }
    <p>
      <strong>Your Answer:</strong><br />
      {String(summary.userAnswer)}
    </p>

{/*{seesuma ?     <p>
       <strong>Correct Answer:</strong><br />
      {String(summary.correctAnswer)}
    </p> : null }*/}

    {/*<p className='iscorrectstyle'style={{
      color: summary.isCorrect ? '#28a745' : '#dc3545',
  border: summary.isCorrect ? '2px solid #00bfa5' : '2px solid #ff4d4f',

    }}>
      {summary.isCorrect ? 'Valid' : 'Tidak valid'}
    </p>*/}
  
        {canredo ? <button className='lanjutbtn' onClick={handleRedo}>TRY AGAIN</button> :  <button
      onClick={() => {
playPinSound()
   setthistime(false)
setapper(false)
        setSummary(null);
      }}
      className="lanjutbtn"
    >
      Continue Audit
    </button>}
  {canredo ?  <h1 className='hurrytext'>TRY AGAIN</h1> : null}

    
  </div>
)}
{answeredCount >= currentLevel.pins.length && (
  <div>
*<img src={finishsign}  className='finsign'  />
  <button onClick={() => {
    timeoutsound.currentTime = 0
    timeoutsound.current.volume = muted ? 0 : sfxVolume

    endSound.currentTime = 0
    endSound.current.volume = muted ? 0 : sfxVolume
   { timeoutOccurred ?   timeoutsound.current.play() : endSound.current.play() }
    setSummary(null);
    wow()
  }} className="finalBtnStyle">
    Finish Case
  </button>
  </div>
)}
          <br />

 
        </div>
      )}

      {/* SCREEN 4: RESULT/ give score can go back to title or level select */}
      {screen === 'result' && (
        <div className='screens'>
          <img src={prop5} alt='chib1' className='props1'/>
          <img src={chib5} alt="door" className={timeoutOccurred ? "goneing" : "chibs11"} /> 
          <img src={chib6} alt="door" className={timeoutOccurred ? "goneing" : "chibs3"} /> 
          <img src={chib7} alt="door" className={timeoutOccurred ? "goneing" : "chibs4"} /> 

                       <img src={timeoutOccurred  ? genderpicrefthink[gender]:genderpicref[gender]} alt="Player" className="player-img" />
   {timeoutOccurred  ?  <p className='cornercred'>Music: 神隠しの真相  - Sharou - Dova Syndrome</p> :<p className='cornercred'>Music: 野良猫は宇宙を目指した - Sharou - Dova Syndrome</p>}
          <div className='resultup'>
              <img src={boxy}  className='resimage'  />
                   <img src={timeoutOccurred  ? incomsign:finishsign} className='ressign'  />
          <div className='resulttext'>
     

         <h2>Name: {playerName}</h2>
          <h2>Case {selectedLevel} completed</h2>
          <h2>⏱ Time :{formatTime(totalTime)}</h2>
<h2>🗝Item: {score} / {currentLevel.pins.length}</h2>
{/*<h2>Berapa Jawaban salah: {wrec}</h2>*/}
       {timeoutOccurred  ?    <h2>Sorry Auditor <strong>{playerName}</strong>, you have failed the case.</h2> : <h2>Thank you Auditor <strong>{playerName}</strong>, you have completed the case.</h2>  }
          </div>
          </div>
          <button onClick={() => {setScreen('levelSelect'), playPinSound()}} className="actionBtnStyleagain">
  Pick Another Case 
</button>
<div>
 <h4></h4>
</div>
          <button onClick={() => window.location.reload()} className="actionBtnStyle">Change Name</button>
        <h2>Case Status:</h2>
         {levels.map(lvl => {
        const status = levelStatus[lvl.id]; // Get current status
            const statwrong = levelwrong[lvl.id];
                const stattime= trec[lvl.id];
                           const statclear = cleared[lvl.id];

        return (
          <div key={lvl.id} className='endcard'>
<h1></h1>
            <h3 className='endcase'>{lvl.id}</h3>
            
            {/* Status Badge */}
       {status && (
  <div className='endstatus' style={{
     background: status === 'Disclaimer of Opinion' ? ' #ff4759' : ' #06d143',
           border:  status === 'Disclaimer of Opinion'? '2px solid #ff4d4f' : '2px solid #00bfa5',
color: status === 'Disclaimer of Opinion'? 'rgb(0, 0, 0)' : 'white',
  }}>
    Audit Opinion: {status}  
   {/*  Wrong : {statwrong} |
     Time : {stattime} |
     attempt : {statclear} */}
  </div>
)}

          
          </div>
        );
      })}
    
 <button  alt="Settings" 
  onClick={() => {playPinSound(),setshowcredit(prev => !prev)}}
  className='creditbtn'
  
>
  Credits
</button>
  
    
        
   

        </div>
      )}
      </div>


</div>
    </div>
  )
}

// STYLING HELPERS

///
export default App