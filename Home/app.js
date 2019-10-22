import { storeUser } from '../Common/storeUser.js';
import createUser from './createUser.js';

const userData = document.getElementById('user-form');
const selectMenu = document.getElementById('color-scheme');
const body = document.querySelector('body');

userData.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(userData);
    const user = createUser(formData);
    storeUser(user);
    window.location = '../Metro';
});

selectMenu.addEventListener('input', (event) => {
    if (event.target.value === 'monochrome') {
        body.classList.add('monochrome');
        body.classList.remove('halloween');
        body.classList.remove('neon');
    } else if (event.target.value === 'halloween') {
        body.classList.add('halloween');
        body.classList.remove('monochrome');
        body.classList.remove('neon');
    } else if (event.target.value === 'neon') {
        body.classList.add('neon');
        body.classList.remove('halloween');
        body.classList.remove('monochrome');
    }
});