export function populateLegend(selectedSoundBank) {
    for (let i = 0; i < 12; i++) {
        document.getElementById('step-' + i).textContent = selectedSoundBank.sounds[i].id;
    }
}