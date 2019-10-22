export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < soundBoard.length; i++){
        note = document.getElementById(soundBoard[0].name);
        note.value = soundBoard[0].value;
    }
};