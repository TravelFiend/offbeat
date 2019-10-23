import { colorObject } from '../Metro/data/color-api.js';
import { whiteKeysColorChange, blackKeysColorChange } from '../Metro/color-change.js'

const body = document.querySelector('body');

export function changeTheme() {
    let theme = event.target.value;
    let mainColor = colorObject[theme].main;
    //let secondaryColor = colorObject[theme].secondary;
    let backColor = colorObject[theme].background;

    body.style.backgroundColor = backColor;
    body.style.color = mainColor;
    whiteKeysColorChange(theme);
    blackKeysColorChange(theme);

}