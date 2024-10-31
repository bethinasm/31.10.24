
const app = document.getElementById('app');
let txtBox ='';

const  model = {

    currentUser: null,

    newUser: {
            userID: '',
            username: '',
            password: '',
        },
    
    users: [
        {
            userID: 1,
            username: 'Bethina',
            password: '123',
            friends:[2],
            bio: 'Heihei! Jeg er sliten',
            dateOfBirth: '15.08.1996'
        },
        {
            userID: 2,
            username: 'Oscar',
            password: '12345',
            friends:[1],
            bio: 'Fluffy matvrak',
            dateOfBirth: '11.03.2024',
        },
    ]

}