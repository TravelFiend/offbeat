// seems like this could live in a file with other functions

export const triggerSound = (note) => {
    let value = note;
    let audio = new Audio(value);
    audio.play();
};
