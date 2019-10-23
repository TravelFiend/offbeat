const AudioContext = window.AudioContext;
const audioCtx = new AudioContext();

let osc1 = audioCtx.createOscillator();
osc1.type = 'square';
osc1.frequency.value = 680;

let amp = audioCtx.createGain();

osc1.connect(amp).connect(audioCtx.destination);

let osc1freq = document.getElementById('osc1Freq');
osc1freq.addEventListener('input', () => {
    osc1.frequency.value = osc1freq.value;
});

let ampRange = document.getElementById('ampGain');
ampRange.addEventListener('input', () => {
    amp.gain.value = ampRange.value;
}, false);

//const sampleSource = audioCtx.createBufferSource();
//sampleSource.buffer =  FileReader() '../assets/middle-C-clarinet.wav';
//console.log(sampleSource);  

let sampleTrigger = document.getElementById('sampleTrigger');
sampleTrigger.addEventListener('click', () => {

});


osc1.start();