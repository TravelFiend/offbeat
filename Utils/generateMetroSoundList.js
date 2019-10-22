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