const recordButton = document.getElementById('record');

recordButton.addEventListener('click', recordEvent);

let record = false;

function recordEvent() {
    if (record){
        record = false;
    } else {
        record = true;
    }
}
