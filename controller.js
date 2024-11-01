function addNewUser(){
    let newUserSignUp = model.input.newUser;
    let newUser = {
        id: model.data.users.length + 1,
        username: newUserSignUp.username,
        password: newUserSignUp.password,
        friends:'',
        bio: newUserSignUp.bio,
        dateOfBirth: newUserSignUp.dateOfBirth,
    };

    console.log(newUser);
    
    model.data.users.push(newUser);
    
    updateView();
}