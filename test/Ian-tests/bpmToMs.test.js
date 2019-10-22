import { bpmToMs } from '../../Utils/clock.js'; 

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('Shouls return BPM to ms/beat', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bpm = 60;
    const expected = 1000;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = bpmToMs(bpm);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Shouls return BPM to ms/beat', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bpm = 120;
    const expected = 500;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = bpmToMs(bpm);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
