export class SoundBoard {
    constructor(soundBoard) {
        this.soundBoard = soundBoard.slice();
    }
    adjustValue(newValue){
        for (let i = 0; i < soundBoard.length; i++){
            this.soundBoard[i].value = newValue;
        }   
    }
    dominantSeventhChord() {
        let dominantSeventhArray = [this.soundBoard[0].value, this.soundBoard[4].value, this.soundBoard[7].value, this.soundBoard[10].value];
        dominantSeventhArray.forEach(item => {
            item.play();
        });
    }
    rootlessDominantSeventhChord() {
        let rootlessDominantSeventhArray = [this.soundBoard[4].value, this.soundBoard[10].value];
        rootlessDominantSeventhArray.forEach(item => {
            item.play();
        });
    }
    minorSevenChord() {
        let minorSevenArray = [this.soundBoard[0].value, this.soundBoard[3].value, this.soundBoard[7].value, this.soundBoard[10].value];
        minorSevenArray.forEach(item => {
            item.play();
        });
    }
    rootlessMinorSevenChordWithFive() {
        let rootlessMinorSevenArray = [this.soundBoard[3].value, this.soundBoard[7].value, this.soundBoard[11].value];
        rootlessMinorSevenArray.forEach(item => {
            item.play();
        });
    }
    rootlessMinorSeventhChordWithoutFive() {
        let rootlessMinorSevenArrayWithoutFive = [this.soundBoard[3].value, this.soundBoard[10].value];
        rootlessMinorSevenArrayWithoutFive.forEach(item => {
            item.play();
        });
    }
    majorSevenChord() {
        let majorSevenArray = [this.soundBoard[0].value, this.soundBoard[4].value, this.soundBoard[7].value, this.soundBoard[11].value];
        majorSevenArray.forEach(item => {
            item.play();
        });
    }
    rootlessMajorSevenChordWithFive() {
        let rootlessMajorSevenArray = [this.soundBoard[4].value, this.soundBoard[7].value, this.soundBoard[11].value];
        rootlessMajorSevenArray.forEach(item => {
            item.play();
        });
    }
    rootlessMajorSevenChordWithoutFive() {
        let rootlessMajorSevenArray = [this.soundBoard[4].value, this.soundBoard[11].value];
        rootlessMajorSevenArray.forEach(item => {
            item.play();
        });
    }

}