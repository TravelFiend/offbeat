import { masterSoundList } from '../assets/master-list-of-sounds/masterSoundList.js';

let blackKeys = document.getElementsByClassName('black-keys');
let whiteKeys = document.getElementsByClassName('white-keys');
let soundsSelectDropDown = document.createElement('select');
blackKeys.forEach((blackKey) => {
    for (let i = 0; i < Object.keys(masterSoundList).length; i++) {
        let soundOption = document.createElement('option');
        soundOption.textContent = masterSoundList[i].id;
        soundsSelectDropDown.appendChild(soundOption);
        blackKeys.appendChild(blackKey);
    }
});
whiteKeys.forEach((whiteKey) => {
    for (let i = 0; i < Object.keys(masterSoundList).length; i++) {
        let soundOption = document.createElement('option');
        soundOption.textContent = masterSoundList[i].id;
        soundsSelectDropDown.appendChild(soundOption);
        whiteKeys.appendChild(whiteKey);
    }
});