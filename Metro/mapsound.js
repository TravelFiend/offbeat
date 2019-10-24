import { triggerSound } from '../Common/trigger-sound.js';
import { populateLegend } from '../utils/populate-sound-bank.js';

export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < soundBoard.length; i++){
        let poop = soundBoard[i];
        let name = poop.name;
        note = document.getElementById(name);
        const clonedNote = note.cloneNode(true);
        note.replaceWith(clonedNote);
        const func = triggerSound(poop.path); //note.value = poop.path; 
        clonedNote.addEventListener('click', func);
    }
    populateLegend(soundBoard);
};