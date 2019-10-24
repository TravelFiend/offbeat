const board1 = 
{
    title: 'pussycat',
    sounds : [{
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
    }]
};

const synthBank =
    { title : 'synth1',
        sounds : [{   
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
        }], //{
    //     id: 'Synth9',
    //     patch: '../assets/ian-sounds/Synth 2.wav',
    //     noteNumber: 12
    // }
    };

const mikeBank = {
    title : 'misc',
    sounds :  [{
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
    }]
};
const tones = {
    title : 'Electronic Piano',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianocpitch.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianocsharp.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianodpitch.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianodsharp.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianoepitch.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianofpitch.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianofsharp.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianogpitch.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianogsharp.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianoapitch.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianoasharp.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: '../../assets/metro-sounds/classicElectricPiano/Classic Electric Pianobpitch.wav',
        noteNumber: 11
    }]
};
const luda = {
    title : 'Luda',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: '../../assets/ludacris/Area Codes.7.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: '../../assets/ludacris/Get Up Get Out.7.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: '../../assets/ludacris/Get Up Get Out.11.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: '../../assets/ludacris/Blueberry Yum Yum Lyrics.3.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: '../../assets/ludacris/Blueberry Yum Yum Lyrics.7.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: '../../assets/ludacris/Blueberry Yum Yum Lyrics.11.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: '../../assets/ludacris/Blueberry Yum Yum Lyrics.15.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: '../../assets/ludacris/Blueberry Yum Yum Lyrics.19.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: '../../assets/ludacris/What Them Girls Like (Album Version (Edited)).3.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: '../../assets/ludacris/What Them Girls Like (Album Version (Edited)).19.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: '../../assets/ludacris/What Them Girls Like (Album Version (Edited)).21.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: '../../assets/ludacris/Yeah! Usher featuring Lil Jon and Ludacris.3.wav',
        noteNumber: 11
    }]
};
const wiz = {
    title : 'wiz',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: '../../assets/wiz-khalifa/Hustlin.3.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: '../../assets/wiz-khalifa/Hustlin.11.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: '../../assets/wiz-khalifa/Hustlin.15.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).3.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).7.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).11.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).15.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).19.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).23.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).27.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).31.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: '../../assets/wiz-khalifa/Taylor Gang (Bonus Track).3.wav',
        noteNumber: 11
    }]
};

const soundBoards = [board1, synthBank, mikeBank, tones, luda, wiz];
export { soundBoards };