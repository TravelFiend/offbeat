// seems like this could live in a file with other functions
import { loadUser } from './load-user.js';
import { colorObject } from '../Metro/data/color-api.js';

let theme = loadUser().theme;
const body = document.querySelector('body');

export const loadTheme = () => {
    body.style.backgroundColor = colorObject[theme].background;
    body.style.color = colorObject[theme].main;
};

