import { storeUser } from '../Common/storeUser.js';
import createUser from './createUser.js';
import { colorObject } from '../Metro/data/color-api.js';

const userData = document.getElementById('user-form');
const themePicker = document.getElementById('color-scheme');
const hotBod = document.querySelector('body');

userData.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(userData);
    const user = createUser(formData);
    storeUser(user);
    window.location = '../Metro';
});

themePicker.addEventListener('change', (event) => {
    let theme = event.target.value;
    console.log(theme);
    hotBod.style.backgroundColor = colorObject[theme].background;
    hotBod.style.color = colorObject[theme].main;
});