import { colorObject } from './data/color-api.js';
import { loadUser } from '../Common/load-user.js';

let theme = loadUser().theme;
let mainColor = colorObject[theme].main;
let secondaryColor = colorObject[theme].secondary;

let metPosition = 0;
let currentBeat = document.getElementById('met-4');
const metCircles = document.getElementsByClassName('metronome');

export function changeMetColor() {
    currentBeat.style.backgroundColor = 'black';
    metPosition++;
    currentBeat = document.getElementById('met-' + metPosition);
    currentBeat.style.backgroundColor = mainColor;

    if (metPosition === 4) {
        metPosition = 0;
    }
}

export function resetMetState() {
    for (let i = 0; i < metCircles.length; i++) {
        metCircles[i].style.backgroundColor = 'black';
    }
    metPosition = 0;
    currentBeat = document.getElementById('met-4');
}

export function whiteKeysColorChange() {
    const whiteKeys = document.querySelectorAll('li');
    for (let i = 12; i < 19; i++) {
        whiteKeys[i].style.backgroundColor = mainColor;
        whiteKeys[i].style.color = secondaryColor;
    }
}

export function blackKeysColorChange() {
    const whiteKeys = document.querySelectorAll('li');
    for (let i = 6; i < 12; i++) {
        whiteKeys[i].style.backgroundColor = 'black';
        whiteKeys[i].style.color = secondaryColor;
    }
}