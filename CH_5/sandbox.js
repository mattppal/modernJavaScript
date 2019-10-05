// object literals




let user = {
    name: 'matt',
    age: 24,
    email: 'm@ppal.me',
    blogs: [
        {title: 'ppal.me', likes: 0},
        {title: 'cheese.com', likes: 500000},
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    },
};


// console.log(user);
// console.log(user.name);
// user.name = 'not matt';
// console.log(user.name);
// console.log(user['name']);
// user['name'] = 'jk it\'s matt'
// console.log(user.name);

// const key = 'name';
// console.log(user[key]);


// console.log(typeof user);

// user.login();
// user.logout();
// user.logBlogs();

// console.log(Math.PI);
// console.log(Math.E);

// const float = 7.7;

// console.log(Math.round(float));
// console.log(Math.floor(float));
// console.log(Math.ceil(float));
// console.log(Math.trunc(float));

// const random = Math.random();
// console.log(random)

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}.`)

const userOne = {name: 'matt', age: 24};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;

console.log(userOne, userTwo);
