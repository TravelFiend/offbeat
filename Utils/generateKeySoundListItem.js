export const generateKeySoundListItem = (soundArray, item) => {
    soundArray.forEach(soundObj => {
        item = document.createElement('option');
        item.textContent = soundObj.title;
        item.value = soundObj.title;
        const keyList = document.getElementById('select-soundbank');
        keyList.appendChild(item);   
    });
};