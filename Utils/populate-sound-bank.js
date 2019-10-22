export function populateLegend(selectedSoundboardArray) {
    for (let i = 0; i < selectedSoundboardArray.length; i++) {
        document.getElementById('step-' + i).textContent = selectedSoundboardArray[i];
    }
}