import { storeUser } from '../Common/storeUser.js';
import createUser from './createUser.js';
import { changeTheme } from '../Common/change-theme.js'

const userData = document.getElementById('user-form');
const selectMenu = document.getElementById('color-scheme');

userData.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(userData);
    const user = createUser(formData);
    storeUser(user);
    window.location = '../Metro';
});

selectMenu.addEventListener('input', changeTheme);