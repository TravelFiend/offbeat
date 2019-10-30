// seems like this could live in a file with other functions

import { colorObject } from '../Metro/data/color-api.js';
import { whiteKeysColorChange, blackKeysColorChange } from '../Metro/color-change.js';
import { saveSettings } from './storeUser.js';
import { loadUser } from '../Common/load-user.js';

// this theme stuff is such a cool feature. great work.

const body = document.querySelector('body');

export function changeTheme() {
    let userNow = loadUser();
    saveSettings(userNow);
    let theme = event.target.value;
    let mainColor = colorObject[theme].main;
    let backColor = colorObject[theme].background;

    body.style.backgroundColor = backColor;
    body.style.color = mainColor;

    whiteKeysColorChange(theme);
    blackKeysColorChange(theme);

}