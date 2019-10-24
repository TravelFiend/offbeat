import { triggerSound } from '../Common/trigger-sound.js';
import { populateLegend } from '../utils/populate-sound-bank.js';
import { loadUser } from '../Common/load-user.js';
import { storeUser } from '../Common/storeUser.js';
let currentRecording = [];

export const mapSound = (soundBoard, note, record) => {
    let user = loadUser();
    for (let i = 0; i < soundBoard.length; i++){
        let poop = soundBoard[i];
        let name = poop.name;
        note = document.getElementById(name);
        const clonedNote = note.cloneNode(true);
        note.replaceWith(clonedNote);
        //const func = triggerSound(poop.path);
        clonedNote.addEventListener('click', () => {
            triggerSound(poop.path);
            if (record) {
                currentRecording.push(poop.name);
                console.log('recording: ' + currentRecording);
            }
            
        });
    }

    populateLegend(soundBoard);

    console.log('at the bottom of mapSound: ' + currentRecording);
    user.currentProject = currentRecording;
    user.projects.push(currentRecording);
    storeUser(user);
    currentRecording = [];
};