

setInterval(() => {

    console.log('hi');
    //fire sound trigger

    //update graphics

}, bpmToMs(120)); //userNumber gets set in app.js, change to a var later.

export function bpmToMs(bpm) {
    return 60000 / bpm;
};