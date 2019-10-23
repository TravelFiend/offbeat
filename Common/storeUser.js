

export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};

export const saveSettings = (user) => {
    const metroSound = document.querySelector('#metronome-sound-menu');
    //const keySound = document.querySelector('#keyboard-sound-menu');
    const selectValue = document.getElementById('color-scheme');
    user.metroSoundIndex = metroSound.selectedIndex;
    //user.keySoundIndex = keySound.selectedIndex;
    user.theme = selectValue.value;
    const stringedUser = JSON.stringify(user);

    localStorage.setItem('user', stringedUser);
};