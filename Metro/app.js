import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { mapSound } from './mapsound.js';
import { soundBoards } from './data/soundboards.js';

let note;

let soundBoard = soundBoards[0];

let BPMElement;

let BPM; 

let runningClock;

createHeader();
loadTheme();

let metroSound = document.getElementById('metronome-sound').value;


const start = document.getElementById('start');
start.addEventListener('click', () => {
    BPMElement = document.getElementById('bpm');
    BPM = parseInt(BPMElement.value);
    runningClock = clock(BPM, metroSound);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
        resetMetState();
    });
});

mapSound(soundBoard, note);
