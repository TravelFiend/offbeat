// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { triggerSound } from '../../Common/trigger-sound.js';

const test = QUnit.test;

test('function will trigger sound', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    event.target.value = '../../assets/middle-C-clarinet.wav';
    //const audioFileToPlay = '../../assets/middle-C-clarinet.wav';
    //Act 
    // Call the function you're testing and set the result to a const
    triggerSound();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
