setInterval(() => {
    console.log('hi');
    //fire sound trigger

    //update graphics

}, 1000);

export const bpmToMs = (bpm) => {
    const bps = bpm / 60; 
    return bps * 1000;
};