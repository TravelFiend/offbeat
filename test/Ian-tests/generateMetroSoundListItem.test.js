// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { generateMetroSoundListItem } from '../../Utils/generateMetroSoundListItem.js';
import { metroSounds } from '../../assets/metro-sounds/metroSounds.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<option value="../assets/metro-sounds/rimshotshort.wav">rimshot</option>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = generateMetroSoundListItem(metroSounds[0]);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.outerHTML, expected);
});
