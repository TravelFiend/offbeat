export const generateMetroSoundListItem = (itemObject) => {
    const item = document.createElement('option');
    item.value = itemObject.path;
    item.textContent = itemObject.name;

    return item;
};

export const generateMetroSoundList = (allSounds) => {
    const menu = document.createElement('select');
    menu.name = 'metronome-sound';
    menu.id = 'metronome-sound-menu';
    // menu.textContent = 'metronome-sound';

    allSounds.forEach(obj => {
        menu.append(generateMetroSoundListItem(obj));

    });
    return menu;
};