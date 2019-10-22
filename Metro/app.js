import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { loadTheme } from '../Common/load-theme.js';

let BPMElement;

let BPM; 

createHeader();
loadTheme();

let metroSound = document.getElementById('metronome-sound').value;

let runningClock;

const start = document.getElementById('start');
start.addEventListener('click', () => {
    BPMElement = document.getElementById('bpm');
    BPM = parseInt(BPMElement.value);
    runningClock = clock(BPM, metroSound);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
    });
});
