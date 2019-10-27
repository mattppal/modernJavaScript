const userOne = {
    username: 'matt',
    email: 'm@ppal.me',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'jasmine',
    email: 'jasmine7palmer@gmail.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userOne.login();

