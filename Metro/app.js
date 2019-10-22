import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { mapSound } from './mapsound.js';
import { soundBoards } from './data/soundboards.js';
import { SoundBoard } from '../utils/make-sound-board.js'; //class

let note;
let soundBoard = new SoundBoard(soundBoards[0]);

for (let i = 0; i < soundBoard.length; i++){
    if (!soundBoards[0][i].value){
        soundBoards[0][i] = soundBoards[0][0];
    }
}

let BPMElement;

let BPM; 

let runningClock;

createHeader();
loadTheme();

let metroSound = document.getElementById('metronome-sound').value;


const start = document.getElementById('start');

start.addEventListener('click', () => {
    start.disabled = true;
    BPMElement = document.getElementById('bpm');
    BPM = parseInt(BPMElement.value);
    runningClock = clock(BPM, metroSound);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        start.disabled = false;
        clearTimeout(runningClock);
        resetMetState();
    });
});

mapSound(soundBoard, note);
