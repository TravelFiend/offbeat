export const clock = (bpm) => {
    const clickSound = new Audio('../assets/rimshotshort.wav');

    const runningClock = setInterval(() => {
        clickSound.play();
        console.log('update graphic');
        //update graphics
        return runningClock;
    }, bpmToMs(bpm));
    return runningClock;
};

export const bpmToMs = (bpm) => {
    return 60000 / bpm;
};