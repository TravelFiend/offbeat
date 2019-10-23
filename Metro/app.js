import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { metroSounds } from '../assets/metro-sounds/metroSounds.js';
import { generateMetroSoundList } from '../Utils/generateMetroSoundList.js';
import { mapSound } from './mapsound.js';
import { soundBoards } from './data/soundboards.js';
//import { SoundBoard } from '../utils/make-sound-board.js'; //class
import { whiteKeysColorChange, blackKeysColorChange } from './color-change.js';

//let soundBoard = new SoundBoard(soundBoards[0]);
let soundBoard = soundBoards[0];

for (let i = 0; i < Object.keys(soundBoard).length; i++){
    if (!soundBoard[i].path){
        soundBoard[i] = soundBoard[0];
    }
}

createHeader();
loadTheme();
whiteKeysColorChange();
blackKeysColorChange();

const metroSoundForm = document.getElementById('metronome-sound');
metroSoundForm.appendChild(generateMetroSoundList(metroSounds));

const start = document.getElementById('start');
start.addEventListener('click', () => {
    start.disabled = true;
    let BPMElement = document.getElementById('bpm');
    let BPM = parseInt(BPMElement.value);
    
    let metroSound = document.getElementById('metronome-sound-menu').value;
    let runningClock = clock(BPM, metroSound);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        start.disabled = false;
        clearTimeout(runningClock);
        resetMetState();
    });
});

let note;
mapSound(soundBoard, note);
