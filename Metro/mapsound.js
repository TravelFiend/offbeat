import { triggerSound } from '../Common/trigger-sound.js';
import { populateLegend } from '../utils/populate-sound-bank.js';
import { loadUser } from '../Common/load-user.js';
import { storeUser } from '../Common/storeUser.js';
import { soundBoards } from './data/soundboards.js';
let currentRecording = [];
let record = false;
let user = loadUser();
let note;
let soundBoard = soundBoards[0].sounds;


export const mapSound = (soundBoard, note, record) => {
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
    
    currentRecording = [];
};

export function recordEvent() {
    if (record === true){
        console.log(record);
        mapSound(soundBoard, note, record);
        //change icon back
        record = false;
    } else if (record === false) {
        console.log(record);
        user.currentProject = currentRecording;
        user.projects.push(currentRecording);
        storeUser(user);
        record = true;
        //change icon
        //add event listens to each key
        //when a key is pressed add that key's name to currentproject array
    }
}