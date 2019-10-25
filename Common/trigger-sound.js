export const triggerSound = (note) => {
    let value = note;
    let audio = new Audio(value);
    audio.play();
};
