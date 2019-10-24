let patternTable = document.querySelector('tbody');

const user = JSON.parse(localStorage.getItem('user'));
let projectArray = user.projects;

projectArray.forEach(pattern => {
    let currentPattern = renderPattern(pattern);
    patternTable.appendChild(currentPattern);

});

const renderPattern = (pattern) => {
    let row = document.createElement('tr');
    let cellSound = document.createElement('td');
    cellSound.textContent = pattern;
    row.appendChild(cellSound);
    return row;
};