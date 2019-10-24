export const generateKeySoundListItem = (soundArray) => {
    soundArray.forEach(soundObj => {
        let item = document.createElement('option');
        item.textContent = soundObj.title;
        item.value = soundObj.title;
        let keyList = document.getElementById('select-soundbank');
        keyList.appendChild(item);
    });
};