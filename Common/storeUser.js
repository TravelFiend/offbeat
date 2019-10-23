

export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};

export const saveSettings = (user) => {
    const metroSound = document.querySelector('#metronome-sound-menu');
    const keySound = document.querySelector('#select-soundbank');
    const downBeat = document.querySelector('#downbeat-sound-menu');
    const selectValue = document.getElementById('color-scheme');
    user.metroSoundIndex = metroSound.selectedIndex;
    user.keySoundIndex = keySound.selectedIndex;
    user.downBeatIndex = downBeat.selectedIndex;
    user.theme = selectValue.value;
    
    const stringedUser = JSON.stringify(user);

    localStorage.setItem('user', stringedUser);
};