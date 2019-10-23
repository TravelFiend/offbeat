export const loadUser = () => {
    const stringUser = localStorage.getItem('user');

    const parsedData = JSON.parse(stringUser);
    return parsedData;
};