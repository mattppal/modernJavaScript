// FOR LOOPS

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i)
// }
// console.log('loop done')


// const names = ['matt', 'paul', 'violet', 'jasmine','rocky','java'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// };

// WHILE LOOPS
// let i = 0;

// while(i < 5){
//     console.log('in loop:', i);
//     i++;
// }
// console.log('loop done')



// let i = 0;
// do{
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     i++
//     console.log(html);
// }while(i < names.length);

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
// }

// let age = 30;

// if(true){
//     let age = 40;
//     let name = 'matt';
// console.log('inside: ', age, name);
// }

// console.log('outside: ', age, name);

// const pass = '@mbidexterous'

// if (pass.length >= 12 || pass.includes('@')){
//     console.log('great password!')
// } else if (pass.length >= 8){
//     console.log('good password!')
// } else {
//     console.log('password is too short!')
// }

// let user = false;

// if(!user){
//     console.log('false!')

// }
// console.log(!true);
// console.log(false);


// function greet(){
//     console.log('hello there');
// }
// const names = ['matt', 'paul', 'violet', 'jasmine','rocky','java'];
// var talk = [];

// const speak = function(name){
//     return `good day ${name}!`;
// };

// for(let i = 0; i < names.length; i++){
//     talk.push(speak(names[i]));
// }
// console.log(talk);
// greet();


// const calcArea = radius =>  3.14159 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// const greet = () => 'hello world';

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] +products[i] * tax;
//     }
//     return total;
// };


// console.log(greet());
// console.log(bill([1,4,5],.07));


// const name = 'matt';

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     //do something
//     console.log(value);
// });



// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// const ul = document.querySelector('.people');

// const people = ['matt', 'jasmine', 'paul', 'violet'];

// let html = ``;

// people.forEach(person => {
//     // create an html template for each person
//     html += `<li style="color: purple">${person}</li>`
// })

// console.log(html);
// ul.innerHTML = html;