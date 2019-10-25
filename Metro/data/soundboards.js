const board1 = 
{
    title: 'pussycat',
    sounds : [{
        name : 'c',
        id: 'Woah Oh Woah',
        path: 'offbeat/assets/pussycat/Pussycat.116.wav',
        noteNumber: 0,
    },
    {
        name: 'c-sharp',
        id: 'Delicious',
        path: 'offbeat/assets/pussycat/Pussycat.498.wav',
        noteNumber: 1,
    },
    {
        name: 'd',
        id: 'True',
        path: 'offbeat/assets/pussycat/Pussycat.531.wav',
        noteNumber: 2,
    },
    {
        name: 'd-sharp',
        id: 'Yesss',
        path: 'offbeat/assets/pussycat/Pussycat.3110.wav',
        noteNumber: 3,
    },
    {
        name: 'e',
        id: 'I do',
        path: 'offbeat/assets/pussycat/Pussycat.3311.wav',
        noteNumber: 4,
    },
    {
        name: 'f',
        id: 'Woah Oh Woah',
        path: 'offbeat/assets/pussycat/Pussycat.116.wav',
        noteNumber: 5,
    },
    {
        name: 'f-sharp',
        id: 'Pussycat',
        path: 'offbeat/assets/pussycat/Pussycat.154.wav',
        noteNumber: 6,
    },
    {
        name: 'g',
        id: 'I\'ve Got Flowers',
        path: 'offbeat/assets/pussycat/Pussycat.195.wav',
        noteNumber: 7,
    },
    {
        name: 'g-sharp',
        id: 'I Love You',
        path: 'offbeat/assets/pussycat/Pussycat.299.wav',
        noteNumber: 8,
    },
    {
        name: 'a',
        id: 'What\'s New',
        path: 'offbeat/assets/pussycat/Pussycat.372.wav',
        noteNumber: 9,
    },
    {
        name: 'a-sharp',
        id: 'Quick Pussycat',
        path: 'offbeat/assets/pussycat/Pussycat.393.wav',
        noteNumber: 10,
    },
    {
        name: 'b',
        id: 'Pussycat Down',
        path: 'offbeat/assets/pussycat/Pussycat.457.wav',
        noteNumber: 11,
    }]
};

const synthBank =
    { title : 'synth1',
        sounds : [{   
            name: 'c',
            id:'Pad1',
            path:'offbeat/assets/ian-sounds/Abduct_Pad1.wav',
            noteNumber: 0
        }, {
            name: 'c-sharp',
            id: 'Synth1',
            path: 'offbeat/assets/ian-sounds/Caniptions_ML2.wav',
            noteNumber: 1

        }, {
            name: 'd',
            id: 'Synth2',
            path: 'offbeat/assets/ian-sounds/Club_MS1.wav',
            noteNumber: 2
        }, {
            name: 'd-sharp',
            id: 'Synth3',
            path: 'offbeat/assets/ian-sounds/Club_MS3.wav',
            noteNumber: 3
        }, {
            name: 'e',
            id: 'Synth4',
            path: 'offbeat/assets/ian-sounds/Club_MS4.wav',
            noteNumber: 4
        }, {
            name: 'f',
            id: 'Synth5',
            path: 'offbeat/assets/ian-sounds/Ixlaeijh_MS1.wav',
            noteNumber: 5

        }, {
            name: 'f-sharp',
            id: 'Pad2',
            path: 'offbeat/assets/ian-sounds/Manage_Juno1.wav',
            noteNumber: 6
        }, {
            name: 'g',
            id: 'Synth6',
            path: 'offbeat/assets/ian-sounds/Manage_MS2.wav',
            noteNumber: 7
        }, {
            name: 'g-sharp',
            id: 'Whack',
            path: 'offbeat/assets/ian-sounds/OPulent_CS6R5.wav',
            noteNumber: 8
        }, {
            name: 'a',
            id: 'Pad3',
            path: 'offbeat/assets/ian-sounds/Second_CS6R2.wav',
            noteNumber: 9
        }, {
            name: 'a-sharp',
            id: 'Synth7',
            path: 'offbeat/assets/ian-sounds/Stanley_CS6R2.wav',
            noteNumber: 10
        }, {
            name: 'b',
            id: 'Synth8',
            path: 'offbeat/assets/ian-sounds/Synth_1.wav',
            noteNumber: 11
        }], //{
    //     id: 'Synth9',
    //     patch: 'offbeat/assets/ian-sounds/Synth 2.wav',
    //     noteNumber: 12
    // }
    };

const mikeBank = {
    title : 'misc',
    sounds :  [{
        name: 'c',
        id: 'Air Wrench',
        path: 'offbeat/assets/mike-sounds/airWrench.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'Cough',
        path: 'offbeat/assets/mike-sounds/cough.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'Dial-up',
        path: 'offbeat/assets/mike-sounds/dial-up.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'Fart',
        path: 'offbeat/assets/mike-sounds/fart.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'Fire Crackers',
        path: 'offbeat/assets/mike-sounds/fireCrackers.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'Fizzle',
        path: 'offbeat/assets/mike-sounds/fizzle.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'Guillotine',
        path: 'offbeat/assets/mike-sounds/guillotine.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'Laugh',
        path: 'offbeat/assets/mike-sounds/laugh.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'M16',
        path: 'offbeat/assets/mike-sounds/m16.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'Moo',
        path: 'offbeat/assets/mike-sounds/moo.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'Pew',
        path: 'offbeat/assets/mike-sounds/pew.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'Sniff',
        path: 'offbeat/assets/mike-sounds/sniff.wav',
        noteNumber: 11
    }]
};
const tones = {
    title : 'Electronic Piano',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianocpitch.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianocsharp.wav',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianocsharp.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'Dial-up',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianodpitch.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic-Electric_Pianodsharp.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianoepitch.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianofpitch.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianofsharp.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianogpitch.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianogsharp.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianoapitch.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianoasharp.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: 'offbeat/assets/metro-sounds/classicElectricPiano/Classic_Electric_Pianobpitch.wav',
        noteNumber: 11
    }]
};
const luda = {
    title : 'Luda',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: 'offbeat/assets/ludacris/Area_Codes.7.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: 'offbeat/assets/ludacris/Get_Up_Get_Out.7.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: 'offbeat/assets/ludacris/Get_Up_Get_Out.11.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: 'offbeat/assets/ludacris/Blueberry_Yum_Yum_Lyrics.3.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: 'offbeat/assets/ludacris/Blueberry_Yum_Yum_Lyrics.7.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: 'offbeat/assets/ludacris/Blueberry_Yum_Yum_Lyrics.11.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: 'offbeat/assets/ludacris/Blueberry_Yum_Yum_Lyrics.15.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: 'offbeat/assets/ludacris/Blueberry_Yum_Yum_Lyrics.19.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: 'offbeat/assets/ludacris/What_Them_Girls_Like_(Album_Version_(Edited)).3.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: 'offbeat/assets/ludacris/What_Them_Girls_Like_(Album_Version_(Edited)).19.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: 'offbeat/assets/ludacris/What_Them_Girls_Like_(Album_Version_(Edited)).21.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: 'offbeat/assets/ludacris/Yeah!_Usher_featuring_Lil_Jon_and_Ludacris.3.wav',
        noteNumber: 11
    }]
};
const wiz = {
    title : 'wiz',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: 'offbeat/assets/wiz-khalifa/Hustlin.3.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: 'offbeat/assets/wiz-khalifa/Hustlin.11.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: 'offbeat/assets/wiz-khalifa/Hustlin.15.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).3.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).7.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).11.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: 'offbeat/assets/wiz-khalifa/Taylor Gang_(Bonus_Track).15.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).19.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).23.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).27.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang _Bonus_Track).31.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: 'offbeat/assets/wiz-khalifa/Taylor_Gang_(Bonus_Track).3.wav',
        noteNumber: 11
    }]
};
const cMinor = {
    title : 'C-',
    sounds :  [{
        name: 'c',
        id: 'C',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavC.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'C#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavDflat.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'D',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavD.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'D#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavEflat.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'E',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavE.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'F',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavF.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'F#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavFsharp.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'G',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavG.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'G#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavAflat.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'A',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavA.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'A#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavBflat.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'A#',
        path: 'offbeat/assets/clavChords/70s_Funk_ClavB.wav',
        noteNumber: 11
    }]
};

const peeWee = {
    title : 'Pee Wee',
    sounds :  [{
        name: 'c',
        id: 'Aaahhhh',
        path: 'offbeat/assets/joels-sounds/aahhhh.wav',
        noteNumber: 0
    }, {
        name: 'c-sharp',
        id: 'Big Butt',
        path: 'offbeat/assets/joels-sounds/big_but.wav',
        noteNumber: 1
    }, {
        name: 'd',
        id: 'I Dont Know',
        path: 'offbeat/assets/joels-sounds/dont_know.wav',
        noteNumber: 2
    }, {
        name: 'd-sharp',
        id: 'Ha ha heh heh',
        path: 'offbeat/assets/joels-sounds/ha_ha_heh_heh.wav',
        noteNumber: 3
    }, {
        name: 'e',
        id: 'Huh huh',
        path: 'offbeat/assets/joels-sounds/huh_huh.wav',
        noteNumber: 4
    }, {
        name: 'f',
        id: 'I know you are',
        path: 'offbeat/assets/joels-sounds/know_you_are1.wav',
        noteNumber: 5
    }, {
        name: 'f-sharp',
        id: 'La la la',
        path: 'offbeat/assets/joels-sounds/la_la_la.wav',
        noteNumber: 6
    }, {
        name: 'g',
        id: 'Rahhr',
        path: 'offbeat/assets/joels-sounds/rahhr.wav',
        noteNumber: 7
    }, {
        name: 'g-sharp',
        id: 'Significance',
        path: 'offbeat/assets/joels-sounds/significance.wav',
        noteNumber: 8
    }, {
        name: 'a',
        id: 'Sorry',
        path: 'offbeat/assets/joels-sounds/sorry.wav',
        noteNumber: 9
    }, {
        name: 'a-sharp',
        id: 'Too late',
        path: 'offbeat/assets/joels-sounds/too_late.wav',
        noteNumber: 10
    }, {
        name: 'b',
        id: 'Use the phone',
        path: 'offbeat/assets/joels-sounds/use_the_phone.wav',
        noteNumber: 11
    }]
};

const soundBoards = [board1, synthBank, mikeBank, tones, luda, wiz, cMinor, peeWee];
export { soundBoards };