import { changeMetColor } from '../Metro/color-change.js';

let i = 0;

export const clock = (bpm, soundPath, downBeatPath, beats) => {
    let count = 0;
    const clickSound = new Audio(soundPath);
    const downBeat = new Audio(downBeatPath);

    const runningClock = setInterval(() => {
        count++;
        if (count === 1){
            downBeat.play();
        } else {
            clickSound.play();
        }
        changeMetColor(beats);
        if (count === beats) {
            count = 0;
        }
        return runningClock;
    }, bpmToMs(bpm));

    return runningClock;
};

export const bpmToMs = (bpm) => {
    return 60000 / bpm;
};

export const playBack = (bpm, currentRecording) => {
    setInterval(() => {
        let nextSound = new Audio(currentRecording[i]);
        nextSound.play();
        i++;
        if (i === currentRecording.length) i = 0;
    }, bpmToMs(bpm));
}