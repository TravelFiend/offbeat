//These two variables will need to be globally scopped in the app this function is called.
let metPosition = 0;
let currentBeat = document.getElementById('met-4');

export function changeMetColor() {
    currentBeat.style.backgroundColor = 'black';
    metPosition++;
    currentBeat = document.getElementById('met-' + metPosition);
    currentBeat.style.backgroundColor = 'green';

    if (metPosition === 4) {
        metPosition = 1;
    }
}