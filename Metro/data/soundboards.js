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
        name: 'c',
        id:'Pad1',
        path:'../assets/ian-sounds/Abduct Pad1.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'Synth1',
        path: '../assets/ian-sounds/Caniptions ML2.wav',
        noteNumber: 1

    }, {
        name: 'd',
        id: 'Synth2',
        path: '../assets/ian-sounds/Club MS1.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'Synth3',
        path: '../assets/ian-sounds/Club MS3.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'Synth4',
        path: '../assets/ian-sounds/Club MS4.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'Synth5',
        path: '../assets/ian-sounds/Ixlaeijh MS1.wav',
        noteNumber: 5

    }, {
        name: 'f-sharp',
        id: 'Pad2',
        path: '../assets/ian-sounds/Manage Juno1.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'Synth6',
        path: '../assets/ian-sounds/Manage MS2.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'Whack',
        path: '../assets/ian-sounds/OPulent CS6R5.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'Pad3',
        path: '../assets/ian-sounds/Second CS6R2.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'Synth7',
        path: '../assets/ian-sounds/Stanley CS6R2.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'Synth8',
        path: '../assets/ian-sounds/Synth 1.wav',
        noteNumber: 11
    }, //{
    //     id: 'Synth9',
    //     patch: '../assets/ian-sounds/Synth 2.wav',
    //     noteNumber: 12
    // }
];

const mikeBank = [
    {
        name: 'c',
        id: 'Air Wrench',
        path: '../assets/mike-sounds/airWrench.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'Cough',
        path: '../assets/mike-sounds/cough.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'Dial-up',
        path: '../assets/mike-sounds/dial-up.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'Fart',
        path: '../assets/mike-sounds/fart.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'Fire Crackers',
        path: '../assets/mike-sounds/fireCrackers.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'Fizzle',
        path: '../assets/mike-sounds/fizzle.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'Guillotine',
        path: '../assets/mike-sounds/guillotine.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'Laugh',
        path: '../assets/mike-sounds/laugh.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'M16',
        path: '../assets/mike-sounds/m16.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'Moo',
        path: '../assets/mike-sounds/moo.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'Pew',
        path: '../assets/mike-sounds/pew.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'Sniff',
        path: '../assets/mike-sounds/sniff.wav',
        noteNumber: 11
    }
];

const soundBoards = [board1, synthBank, mikeBank];
export { soundBoards };