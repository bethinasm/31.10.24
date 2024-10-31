updateView()
function updateView(){
    app.innerHTML = /*HTML*/`
        <div>
            <div>
                <p>Add new user:</p>
                <input placeholder="Username" onchange="model.newUser.username = this.value">
                <input placeholder="Password" onchange="model.newUser.password = this.value">
                
                <button onclick="addNewUser()"> Submit </button>
                <br> <br>
                <hr>
            </div>
                
            <div style="display:flex; gap: 100px;">
                <div>
                    Existing users: <br>
                    ${showAllUsers()}
                </div>
                <div>
                    Your friends: <br>

                </div>
            </div>
            <br> <br>
            <hr>
            <div> ${txtBox}</div>
        </div>
    `;
}

function showAllUsers(){
    let html = '';
    
    for (let i = 0; i < model.users.length; i++){
        let username = model.users[i].username;
        html += /*HTML*/ `
         ${username} 
        <button> Add friend </button>
        <button onclick="showProfile(userID)">  View profile </button> <br>
        `;
    }
    return html;
}

function showProfile(userID){
    let user = model.users.find(u=>u.id === userID);
    
    txtBox = /*HTML*/ `
        <div> 
            <p>Welcome to ${user.username}'s profile!</p>
        </div>
    `;
    

    return html;
}