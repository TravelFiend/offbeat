// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { triggerSound } from '../../Common/trigger-sound';

const test = QUnit.test;

test('function will trigger sound', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const thingValue = event.target.value;
    const audioFileToPlay = '../../assets/middle-C-clarinet.wav';
    //Act 
    // Call the function you're testing and set the result to a const
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
