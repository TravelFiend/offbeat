import { colorObject } from '../Metro/data/color-api.js';
import { whiteKeysColorChange, blackKeysColorChange } from '../Metro/color-change.js';
import { saveSettings } from './storeUser.js';
import { loadUser } from '../Common/load-user.js';

const body = document.querySelector('body');
const anchor = document.querySelectorAll('a');
const myHeader = document.querySelector('header');

export function changeTheme() {
    let userNow = loadUser();
    saveSettings(userNow);
    let theme = event.target.value;
    let mainColor = colorObject[theme].main;
    let backColor = colorObject[theme].background;

    body.style.backgroundColor = backColor;
    body.style.color = mainColor;
    anchor.style.color = mainColor;
    myHeader.style.backgroundColor = backColor;

    whiteKeysColorChange(theme);
    blackKeysColorChange(theme);
}