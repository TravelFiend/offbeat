import { changeMetColor } from '../Metro/color-change.js';

export const clock = (bpm) => {
    const runningClock = setInterval(() => {
        
        console.log('play sound');
        //fire sound trigger
        changeMetColor();
        //update graphics
        return runningClock;
    }, bpmToMs(bpm));
    return runningClock;
};

export const bpmToMs = (bpm) => {
    return 60000 / bpm;
};