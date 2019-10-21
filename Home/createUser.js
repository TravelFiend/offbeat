const createUser = (formData) => {
    const user = {
        name: formData.get('user'),
        project: formData.get('project'), 
        theme: formData.get('color-scheme')
    };
    console.log(user.name);
    return user;
};

export default createUser;