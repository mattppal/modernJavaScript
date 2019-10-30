class User {
    constructor(username, email, score){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteuser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('matt', 'm@ppal.me');
const userTwo = new User('jasmine', 'jasmine7palmer@gmail.com');
const userThree = new Admin('matt', 'admin@ppal.me', 'owner');

console.log(userOne, userTwo, userThree);
userOne.incScore().incScore().logout()

let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteuser(userTwo);
console.log(users);

// 'new' keyword
// 1. new empty object {}
// 2. binds value of 'this' to new epty object
// 3. calls constructor to 'build' the object