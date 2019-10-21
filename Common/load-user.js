export const loadUser = () => {
    const stringUser = localStorage.getItem('user');
    if (!stringUser) null;

    const parsedData = JSON.parse(stringUser);
    return parsedData;
};