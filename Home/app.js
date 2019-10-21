import { storeUser } from '../Common/storeUser.js';
import createUser from './createUser.js';

const userData = document.getElementById('user-form');

userData.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(userData);
    const user = createUser(formData);
    storeUser(user);
    window.location = '../Metro';
});