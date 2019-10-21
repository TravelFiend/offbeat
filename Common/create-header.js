import { loadUser } from '../Common/load-user.js';

export const createHeader = () => {
    const projectName = document.getElementById('project-name');
    const userName = document.getElementById('user-name');

    const user = loadUser();

    projectName.textContent = user.project;
    userName.textContent = user.name;
};