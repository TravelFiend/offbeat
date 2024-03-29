import { colorObject } from './data/color-api.js';
import { loadUser } from '../Common/load-user.js';

let theme;
let mainColor;
let secondaryColor;

let metPosition = 0;
let currentBeat = document.getElementById('met-4');
const metCircles = document.getElementsByClassName('metronome');

export function changeMetColor(beats) {
    theme = loadUser().theme;
    mainColor = colorObject[theme].main;
    secondaryColor = colorObject[theme].secondary;
    currentBeat.style.backgroundColor = 'black';
    currentBeat.style.boxShadow = 'none';
    metPosition++;
    currentBeat = document.getElementById('met-' + metPosition);
    currentBeat.style.backgroundColor = mainColor;
    currentBeat.style.boxShadow = '0px 0px 30px ' + secondaryColor;

    if (metPosition === beats) {
        metPosition = 0;
    }
}

export function resetMetState() {
    for (let i = 0; i < metCircles.length; i++) {
        metCircles[i].style.backgroundColor = 'black';
        metCircles[i].style.boxShadow = 'none';
    }
    metPosition = 0;
    currentBeat = document.getElementById('met-4');
}

export function whiteKeysColorChange(theme) {
    let mainColor = colorObject[theme].main;
    let secondaryColor = colorObject[theme].secondary;
    const whiteKeys = document.querySelectorAll('li');
    for (let i = 12; i < 19; i++) {
        whiteKeys[i].style.backgroundColor = mainColor;
        whiteKeys[i].style.color = secondaryColor;
    }
}

export function blackKeysColorChange(theme) {
    let secondaryColor = colorObject[theme].secondary;
    const blackKeys = document.querySelectorAll('li');
    for (let i = 6; i < 12; i++) {
        blackKeys[i].style.backgroundColor = 'black';
        blackKeys[i].style.color = secondaryColor;
    }
}

export function toggleRecColor(button, boolean) {
    if (boolean) {
        button.style.color = 'red';
    } else {
        button.style.color = 'white';
    }
}