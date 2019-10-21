const createUser = (formData) => {
    const user = {
        name: formData.get('user'),
        project: formData.get('project'), 
        theme: formData.get('color-scheme')
    };
    return user;
};

export default createUser;