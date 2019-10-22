import { changeMetColor } from '../Metro/color-change.js';

export const clock = (bpm, soundPath) => {
    const clickSound = new Audio(soundPath);
    const runningClock = setInterval(() => {
        clickSound.play();
        changeMetColor();
        return runningClock;
    }, bpmToMs(bpm));
    return runningClock;
};

export const bpmToMs = (bpm) => {
    return 60000 / bpm;
};