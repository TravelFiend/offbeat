const board1 = [{
    name : 'c',
    path: '../assets/pussycat/Pussycat.116.wav', //path to assets and respective sound (piano to start?)
    noteNumber: 0,
},
{
    name: 'c-sharp',
    path: '../assets/pussycat/Pussycat.498.wav',
    noteNumber: 1,
},
{
    name: 'd',
    path: '../assets/pussycat/Pussycat.531.wav',
    noteNumber: 2,
},
{
    name: 'd-sharp',
    path: '../assets/pussycat/Pussycat.3110.wav',
    noteNumber: 3,
},
{
    name: 'e',
    path: '../assets/pussycat/Pussycat.3311.wav',
    noteNumber: 4,
},
{
    name: 'f',
    path: '../assets/pussycat/Pussycat.116.wav',
    noteNumber: 5,
},
{
    name: 'f-sharp',
    path: '../assets/pussycat/Pussycat.154.wav',
    noteNumber: 6,
},
{
    name: 'g',
    path: '../assets/pussycat/Pussycat.195.wav',
    noteNumber: 7,
},
{
    name: 'g-sharp',
    path: '../assets/pussycat/Pussycat.299.wav',
    noteNumber: 8,
},
{
    name: 'a',
    path: '../assets/pussycat/Pussycat.372.wav',
    noteNumber: 9,
},
{
    name: 'a-sharp',
    path: '../assets/pussycat/Pussycat.393.wav',
    noteNumber: 10,
},
{
    name: 'b',
    path: '../assets/pussycat/Pussycat.457.wav',
    noteNumber: 11,
}];

const synthBank = [
    {
        name:'Pad1',
        path:'../assets/ian-sounds/Abduct Pad1.wav',
        noteNumber: 0
    }, {
        name: 'Synth1',
        path: '../assets/ian-sounds/Caniptions ML2.wav',
        noteNumber: 1

    }, {
        name: 'Synth2',
        path: '../assets/ian-sounds/Club MS1.wav',
        noteNumber: 2
    }, {
        name: 'Synth3',
        path: '../assets/ian-sounds/Club MS3.wav',
        noteNumber: 3
    }, {
        name: 'Synth4',
        path: '../assets/ian-sounds/Club MS4.wav',
        noteNumber: 4
    }, {
        name: 'Synth5',
        path: '../assets/ian-sounds/Ixlaeijh MS1.wav',
        noteNumber: 5

    }, {
        name: 'Pad2',
        path: '../assets/ian-sounds/Manage Juno1.wav',
        noteNumber: 6
    }, {
        name: 'Synth6',
        path: '../assets/ian-sounds/Manage MS2.wav',
        noteNumber: 7
    }, {
        name: 'Whack',
        path: '../assets/ian-sounds/OPulent CS6R5.wav',
        noteNumber: 8
    }, {
        name: 'Pad3',
        path: '../assets/ian-sounds/Second CS6R2.wav',
        noteNumber: 9
    }, {
        name: 'Synth7',
        path: '../assets/ian-sounds/Stanley CS6R2.wav',
        noteNumber: 10
    }, {
        name: 'Synth8',
        path: '../assets/ian-sounds/Synth 1.wav',
        noteNumber: 11
    }, {
        name: 'Synth9',
        patch: '../assets/ian-sounds/Synth 2.wav',
        noteNumber: 12
    }
];

const mikeBank = [
    {
        name: 'Air Wrench',
        path: '../assets/mike-sounds/airWrench.wav',
        noteNumber: 0
    }, {
        name: 'Cough',
        path: '../assets/mike-sounds/cough.wav',
        noteNumber: 1
    }, {
        name: 'Dial-up',
        path: '../assets/mike-sounds/dial-up.wav',
        noteNumber: 2
    }, {
        name: 'Fart',
        path: '../assets/mike-sounds/fart.wav',
        noteNumber: 3
    }, {
        name: 'Fire Crackers',
        path: '../assets/mike-sounds/fireCrackers.wav',
        noteNumber: 4
    }, {
        name: 'Fizzle',
        path: '../assets/mike-sounds/fizzle.wav',
        noteNumber: 5
    }, {
        name: 'Guillotine',
        path: '../assets/mike-sounds/guillotine.wav',
        noteNumber: 6
    }, {
        name: 'Laugh',
        path: '../assets/mike-sounds/laugh.wav',
        noteNumber: 7
    }, {
        name: 'M16',
        path: '../assets/mike-sounds/m16.wav',
        noteNumber: 8
    }, {
        name: 'Moo',
        path: '../assets/mike-sounds/moo.wav',
        noteNumber: 9
    }, {
        name: 'Pew',
        path: '../assets/mike-sounds/pew.wav',
        noteNumber: 10
    }, {
        name: 'Sniff',
        path: '../assets/mike-sounds/sniff.wav',
        noteNumber: 11
    }
];

const soundBoards = [board1, synthBank, mikeBank];
export { soundBoards };