import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { loadTheme } from '../Common/load-theme.js';

createHeader();
loadTheme();

let metroSound = document.getElementById('metronome-sound').value;

const start = document.getElementById('start');
start.addEventListener('click', () => {
    const runningClock = clock(120, metroSound);
    
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
    });
});