const recordButton = document.getElementById('record');

recordButton.addEventListener('click', recordEvent);

let record = false;

function recordEvent() {
    // seems like a toggle; if so, could be replaced with record = !record
    if (record) {
        record = false;
    } else {
        record = true;
    }

}
