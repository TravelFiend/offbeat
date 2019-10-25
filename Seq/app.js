import { storeUser } from 'offbeat/Common/storeUser.js';

let patternTable = document.querySelector('tbody');

const user = JSON.parse(localStorage.getItem('user'));
let projectArray = user.projects;

const renderPattern = (pattern) => {
    let row = document.createElement('tr');
    let dataCellForButton = document.createElement('td');
    let loadButton = document.createElement('button');
    loadButton.textContent = 'LOAD';
    dataCellForButton.appendChild(loadButton);
    row.appendChild(dataCellForButton);
    
    let cellSound = document.createElement('td');
    cellSound.textContent = pattern;
    row.appendChild(cellSound);
    
    return row;
};
projectArray.forEach(pattern => {
    let currentPattern = renderPattern(pattern);
    patternTable.appendChild(currentPattern);

});

let table = document.querySelector('table');

table.addEventListener('click', (event) => {
    let buttonToLoad = event.target;
    let patternString = buttonToLoad.parentElement.nextSibling.textContent;
    let newPatternArray = patternString.split(',');
    user.currentProject = newPatternArray;
    storeUser(user);
    window.location = '/offbeat/Metro';
});
