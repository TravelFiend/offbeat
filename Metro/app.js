import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';

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
