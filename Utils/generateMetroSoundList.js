import { generateMetroSoundListItem } from '../Utils/generateMetroSoundListItem.js';

export const generateMetroSoundList = (allSounds) => {
    const menu = document.createElement('select');
    menu.name = 'metronome-sound';
    menu.id = 'metronome-sound-menu';
    menu.textContent = 'metronome-sound';

    allSounds.forEach(obj => {
        menu.append(generateMetroSoundListItem(obj));
        
    });
    return menu;
};

export const generateDownBeat = (allSounds) => {
    const menu = document.createElement('select');
    menu.name = 'downbeat-sound';
    menu.id = 'downbeat-sound-menu';
    menu.textContent = 'downbeat-sound';

    allSounds.forEach(obj => {
        menu.append(generateMetroSoundListItem(obj));
        
    });
    return menu;
};