export const clock = (bpm) => {
    const runningClock = setInterval(() => {
        
        console.log('play sound');
        //fire sound trigger
        console.log('update graphic');
        //update graphics

    }, bpmToMs(bpm));
};

export const bpmToMs = (bpm) => {
    return 60000 / bpm;
};