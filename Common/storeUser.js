

export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};

export const saveSettings = (user) => {
    const metroSound = document.querySelector('#metronome-sound-menu');
    // const metroSound = document.querySelector('#keyboard-sound-menu');
    user.metroSoundIndex = metroSound.selectedIndex;
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};