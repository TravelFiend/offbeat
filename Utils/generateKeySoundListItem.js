export const generateKeySoundListItem = (soundArray) => {
    soundArray.forEach(soundObj => {
        const item = document.createElement('option');
        item.textContent = soundObj.name;
        item.value = soundObj.path;
        const keyList = document.getElementById('select-soundbank');
        keyList.appendChild(item);
    });
};