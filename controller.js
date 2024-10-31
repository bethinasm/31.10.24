function addNewUser(){
    let newUserSignUp = model.newUser;
    let newUser = {
        userID: model.users.length + 1,
        username: newUserSignUp.username,
        password: newUserSignUp.password,
    };
    console.log(newUser);
    model.users.push(newUser);
    
    updateView();
}