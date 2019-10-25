export const hideUnusedMetro = beats => {
    let leds = document.querySelectorAll('#metronome-display >li');
    for (let i = 0; i < beats; i++) {
        leds[i].classList.remove('hidden');
    }
    for (let i = beats; i < 4; i++) {
        leds[i].classList.add('hidden');
        
    }};