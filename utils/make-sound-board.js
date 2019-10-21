export class soundBoard {
    constructor(soundBoard) {
        this.soundBoard = soundBoard.slice();
    }
    adjustValue(newValue){
        this.soundBoard.value = newValue;
    }   
}