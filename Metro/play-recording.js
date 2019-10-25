import { loadUser } from '../Common/load-user.js';
import { bpmToMs } from '../utils/clock.js';

let user = loadUser();
let i = 0
let currentAvailableSong = user.projects

playBackItem = user.projects[]

//show on side bar
//event handlers
//current song = clicked

const playBack = setInterval(() => {
    let nextSound = new Audio(playBackItem[i]);
    nextSound.play();
    i++
    if (i === currentRecording.length) i = 0;
}, bpmToMs(bpm));