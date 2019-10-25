import { clock, playBack } from '../Utils/clock.js';
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

let user = loadUser();
let theme = user.theme;

let currentRecording = [];

const saveSound = document.getElementById('save-sound');
const keyboardSoundSelect = document.getElementById('select-soundbank');
let soundBoard = soundBoards[0].sounds;
let note;

const recordButton = document.getElementById('record');
recordButton.addEventListener('click', recordEventTakeTwo);

const saveRecordingButton = document.getElementById('save-record');
saveRecordingButton.addEventListener('click', saveRecording);

createHeader();
loadTheme();
whiteKeysColorChange(theme);
blackKeysColorChange(theme);
mapSound(soundBoard, note);

generateKeySoundListItem(soundBoards);


keyboardSoundSelect.addEventListener('input', (event) => {
    soundBoards.forEach(soundObj => {
        // if (event.target.value !== event.target.value)
        if (event.target.value === soundObj.title){
            mapSound(soundObj.sounds, note);
        }
    });
});


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

function recordEventTakeTwo() {
    currentRecording = [];
    //only initialize
    let keys = document.querySelectorAll('li');
    for (let i = 6; i < 19; i++) {
        keys[i].addEventListener('click', recordNote);
    }
}

function recordNote() {
    let id = event.target.id;
    console.log(sbSelect.value);
    currentRecording.push(id);
}

function saveRecording() {
    user.projects.push(currentRecording);
    user.currentProject = currentRecording;
    storeUser(user);
}

function findSb(sb) {
    let sbSelect = document.getElementById('select-soundbank');
    for (let i = 0; i < sb.length; i++) {
        if (sb[i].title === sbSelect.value) return sb[i].sounds;
    }
}

function newFunk(sbSelect, array) {
    let soundPathArray = [];
    for (let i = 0; i < array.length; i++) {
        sbSelect.forEach(sound => {
            if (sound.name === array[i]) {
                soundPathArray.push(sound.path);
                console.log(soundPathArray);
            }
            
        });
    }
    return soundPathArray;
}

const playRecordingButton = document.getElementById('play-record');
const stopPlaybackButton = document.getElementById('stop-record');
playRecordingButton.addEventListener('click', () => {
    let BPMElement = document.getElementById('bpm');
    let BPM = parseInt(BPMElement.value);
    let sbValue = findSb(soundBoards);
    let pathArray = newFunk(sbValue, user.currentProject);
    playBack(BPM, pathArray);
    let runningPlayback = playBack(BPM, pathArray);
    playRecordingButton.disabled = true;

    stopPlaybackButton.addEventListener('click', () => {
        playRecordingButton.disabled = false;
        clearTimeout(runningPlayback);
    });
});
