import { clock } from '../Utils/clock.js';

const start = document.getElementById('start');
start.addEventListener('click', () => {
    const runningClock = clock(120);
    
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
    });
});