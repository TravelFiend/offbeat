export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < soundBoard.length; i++){
        note = document.getElementById(soundBoard[i].name);
        note.value = soundBoard[i].value;
    }
};