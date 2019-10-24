import { triggerSound } from '../Common/trigger-sound.js';
import { populateLegend } from '../utils/populate-sound-bank.js';

export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < soundBoard.length; i++){
        let specificSounds = soundBoard[i];
        let name = specificSounds.name;
        note = document.getElementById(name);
        const clonedNote = note.cloneNode(true);
        note.replaceWith(clonedNote);
        clonedNote.addEventListener('click', () => {
            triggerSound(specificSounds.path);
        });
    }

    populateLegend(soundBoard);
};
