

export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};

export const saveSettings = (user) => {
    const metroSound = document.querySelector('#metronome-sound-menu');
    const keySound = document.querySelector('#keyboard-sound-menu');
    const downBeat = document.querySelector('#downbeat-sound-menu');
    user.metroSoundIndex = metroSound.selectedIndex;
    user.keySoundIndex = keySound.selectedIndex;
    user.downBeatIndex = downBeat.selectedIndex;
    const stringedUser = JSON.stringify(user);

    localStorage.setItem('user', stringedUser);
};