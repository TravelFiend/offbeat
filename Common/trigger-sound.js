export const triggerSound = (event) => {
    let value = event.target.value;
    let audio = new Audio(value);
    audio.play();
};
