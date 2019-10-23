import { clock } from '../Utils/clock.js';
import { createHeader } from '../Common/create-header.js';
import { resetMetState } from '../Metro/color-change.js';
import { loadTheme } from '../Common/load-theme.js';
import { metroSounds } from '../assets/metro-sounds/metroSounds.js';
import { generateMetroSoundList, generateDownBeat } from '../Utils/generateMetroSoundList.js';
import { mapSound } from './mapsound.js';
import { soundBoards } from './data/soundboards.js';
// import { SoundBoard } from '../utils/make-sound-board.js'; //class
// import { addOptions } from '../Home/createUser.js';
import { saveSettings } from '../Common/storeUser.js';
import { loadUser } from '../Common/load-user.js';
import { changeTheme } from '../Common/change-theme.js';
//import { SoundBoard } from '../utils/make-sound-board.js'; //class
import { whiteKeysColorChange, blackKeysColorChange } from './color-change.js';
import { generateKeySoundListItem } from '../utils/generateKeySoundListItem.js';

let theme = loadUser().theme;

const saveSound = document.getElementById('save-sound');
//let soundBoard = new SoundBoard(soundBoards[0]);
let soundBoard = soundBoards[0];



createHeader();
loadTheme();
whiteKeysColorChange(theme);
blackKeysColorChange(theme);
generateKeySoundListItem(soundBoards);

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
    
    let metroSound = document.getElementById('metronome-sound-menu').value;
    let downBeatSound = document.getElementById('downbeat-sound-menu').value;
    let runningClock = clock(BPM, metroSound, downBeatSound);

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
 
let note;

mapSound(soundBoard, note);
