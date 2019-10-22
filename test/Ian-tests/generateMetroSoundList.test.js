// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { generateMetroSoundList } from '../../Utils/generateMetroSoundList.js';
import { metroSounds } from '../../assets/metro-sounds/metroSounds.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const sounds = metroSounds.slice(0, 2);
    const expected = '<select name="metronome-sound" id="metronome-sound-menu">metronome-sound<option value="../assets/metro-sounds/rimshotshort.wav">rimshot</option><option value="../assets/metro-sounds/880hz 50ms.mp3">880hz</option></select>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = generateMetroSoundList(sounds);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.outerHTML, expected);
});
