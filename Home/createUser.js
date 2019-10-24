const createUser = (formData) => {
    const user = {
        name: formData.get('user'),
        theme: formData.get('color-scheme'),
        projectName: formData.get('project'),
        projects: [],
        currentProject: {
            name: '',
            recording: [],
        } 
    };
    return user;
};

export default createUser;