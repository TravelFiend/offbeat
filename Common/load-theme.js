import { loadUser } from './load-user.js';

let theme = loadUser().theme;
const body = document.querySelector('body');

export const loadTheme = () => {
    if (theme === 'monochrome'){
        body.classList.add('monochrome');
        body.classList.remove('halloween');
        body.classList.remove('neon');
    } else if (theme === 'halloween'){
        body.classList.add('halloween');
        body.classList.remove('monochrome');
        body.classList.remove('neon');
    } else if (theme === 'neon'){
        body.classList.add('neon');
        body.classList.remove('halloween');
        body.classList.remove('monochrome');
    }
};

