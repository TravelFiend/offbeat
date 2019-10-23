import { triggerSound } from '../Common/trigger-sound.js';
import { populateLegend } from '../utils/populate-sound-bank.js';
export const mapSound = (soundBoard, note) => {
    for (let i = 0; i < Object.keys(soundBoard).length; i++){
        let poop = soundBoard[i];
        let name = poop.name;
        populateLegend(poop);
        note = document.getElementById(name);
        note.value = poop.path;
        note.addEventListener('click', triggerSound(poop.path));
    }
};