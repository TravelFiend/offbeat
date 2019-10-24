import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { metroSounds } from '../assets/metro-sounds/metroSounds.js';
import { generateMetroSoundList, generateDownBeat } from '../Utils/generateMetroSoundList.js';
import { mapSound } from './mapsound.js';
import { soundBoards } from './data/soundboards.js';
import { saveSettings, storeUser } from '../Common/storeUser.js';
import { loadUser } from '../Common/load-user.js';
import { changeTheme } from '../Common/change-theme.js';
import { whiteKeysColorChange, blackKeysColorChange } from './color-change.js';
import { generateKeySoundListItem } from '../utils/generateKeySoundListItem.js';

let theme = loadUser().theme;

let currentRecording = [];

const saveSound = document.getElementById('save-sound');
const keyboardSoundSelect = document.getElementById('select-soundbank');
let soundBoard = soundBoards[0].sounds;
let note;
let record = false;

const recordButton = document.getElementById('record');
recordButton.addEventListener('click', recordEventTakeTwo);

const saveRecordingButton = document.getElementById('save-record');
saveRecordingButton.addEventListener('click', saveRecording);


createHeader();
loadTheme();
whiteKeysColorChange(theme);
blackKeysColorChange(theme);
mapSound(soundBoard, note, record);

generateKeySoundListItem(soundBoards);

keyboardSoundSelect.addEventListener('input', (event) => {
    soundBoards.forEach(soundObj => {
        // if (event.target.value !== event.target.value)
        if (event.target.value === soundObj.title){
            mapSound(soundObj.sounds, note, record);
        }
    });
});

let user = loadUser();

const selectMenu = document.getElementById('color-scheme');
selectMenu.addEventListener('input', changeTheme);


const metroSoundForm = document.getElementById('metronome-sound');
const downBeatSoundForm = document.getElementById('downbeat-sound');
metroSoundForm.appendChild(generateMetroSoundList(metroSounds));
downBeatSoundForm.appendChild(generateDownBeat(metroSounds));


const start = document.getElementById('start');
start.addEventListener('click', () => {
    start.disabled = true;
    let BPMElement = document.getElementById('bpm');
    let BPM = parseInt(BPMElement.value);
    
    let beats = Number(document.getElementById('time-sig').value);
    let metroSound = document.getElementById('metronome-sound-menu').value;
    let downBeatSound = document.getElementById('downbeat-sound-menu').value;
    let runningClock = clock(BPM, metroSound, downBeatSound, beats);

    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        start.disabled = false;
        clearTimeout(runningClock);
        resetMetState();
    });
});

const sbSelect = document.getElementById('select-soundbank');
const metSelect = document.getElementById('metronome-sound-menu');
const downSelect = document.getElementById('downbeat-sound-menu');

if (user.keySoundIndex) sbSelect.selectedIndex = user.keySoundIndex;
if (user.metroSoundIndex) metSelect.selectedIndex = user.metroSoundIndex;
if (user.downBeatIndex) downSelect.selectedIndex = user.downBeatIndex;

saveSound.addEventListener('click', () => {
    let userNow = loadUser();
    
    saveSettings(userNow);
});

// function recordEvent() {
//     if (record === true){
//         console.log(record);
//         mapSound(soundBoard, note, record);
//         //change icon back
//         record = false;
//     } else if (record === false) {
//         console.log(record);
//         record = true;
//         //change icon
//         //add event listens to each key
//         //when a key is pressed add that key's name to currentproject array
//     }
// }

function recordEventTakeTwo() {
    currentRecording = [];
    let keys = document.querySelectorAll('li');
    for (let i = 6; i < 19; i++) {
        keys[i].addEventListener('click', recordNote);
    }
}

function recordNote() {
    let id = event.target.id;
    currentRecording.push(id);
}

function saveRecording() {
    user.projects.push(currentRecording);
    storeUser(user);
}