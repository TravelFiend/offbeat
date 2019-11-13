// seems like this could live in a file with other functions
export const loadUser = () => {
    const stringUser = localStorage.getItem('user');

    const parsedData = JSON.parse(stringUser);
    return parsedData;
};