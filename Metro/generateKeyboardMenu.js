export const generateKeyboardMenu = (soundBoards) => {
    const keyboardSoundMenu = document.getElementById('select-soundbank');

    soundBoards.forEach(bank => {
        let item = document.createElement('option');
        item.value = bank;
        item.context = ``;
        keyboardSoundMenu.appendChild(item);
    });
};
