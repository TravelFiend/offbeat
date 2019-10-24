import { mapSound } from "./mapsound";
import { soundBoards } from "./data/soundboards";

const recordButton = document.getElementById('record');

recordButton.addEventListener('click', recordEvent);

let record = false;

function recordEvent() {
    if (record){
        record = false;
        //change icon back
         //push currentProjectArray to localstorage
    } else {
        record = true;
        //mapSound(soundBoard, note);
        //change icon
        //add event listens to each key
        //when a key is pressed add that key's name to currentproject array
    }
}

/*export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < soundBoard.length; i++){
        let poop = soundBoard[i];
        let name = poop.name;
        note = document.getElementById(name);
        const clonedNote = note.cloneNode(true);
        note.replaceWith(clonedNote);
        clonedNote.addEventListener('click', func);
        function
    }
    populateLegend(soundBoard);
};*/

