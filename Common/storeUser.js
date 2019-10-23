

export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};

export const saveSettings = (user) => {
    const metroSound = document.querySelector('#metronome-sound-menu');
    const selectValue = document.getElementById('color-scheme');
    const keySound = document.querySelector('#select-soundbank');
    user.metroSoundIndex = metroSound.selectedIndex;
    user.keySoundIndex = keySound.selectedIndex;
    user.theme = selectValue.value;
    const stringedUser = JSON.stringify(user);

    localStorage.setItem('user', stringedUser);
};