export const storeUser = (user) => {
    const jsonUser = JSON.stringify(user);
    localStorage.set('user', jsonUser);
};

export const getUser = () => {
    const jsonUser = localStorage.getItem('user');
    if (!jsonUser) {
        return null;
    }
    const user = JSON.parse(jsonUser);
    return user;
};