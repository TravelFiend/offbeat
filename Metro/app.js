import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';

createHeader();

const start = document.getElementById('start');
start.addEventListener('click', () => {
    const runningClock = clock(120);
    
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
        resetMetState();
    });
});

