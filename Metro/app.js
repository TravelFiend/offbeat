import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { metroSounds } from '../assets/metro-sounds/metroSounds.js';
import { generateMetroSoundList } from '../Utils/generateMetroSoundList.js';

let BPMElement;

let BPM; 

let runningClock;

createHeader();
loadTheme();
const metroSoundForm = document.getElementById('metronome-sound');
metroSoundForm.appendChild(generateMetroSoundList(metroSounds));


const start = document.getElementById('start');
start.addEventListener('click', () => {
    BPMElement = document.getElementById('bpm');
    BPM = parseInt(BPMElement.value);
    
    let metroSound = document.getElementById('metronome-sound-menu').value;
    runningClock = clock(BPM, metroSound);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearTimeout(runningClock);
        resetMetState();
    });
});
