export const storeUser = (user) => {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
};