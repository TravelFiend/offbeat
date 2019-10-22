import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';

let BPMElement;

let BPM; 

debugger
createHeader();

let runningClock;

const start = document.getElementById('start');
start.addEventListener('click', () => {
    BPMElement = document.getElementById('bpm');
    BPM = parseInt(BPMElement.value);
    runningClock = clock(BPM);
    debugger
    
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
    });
});


