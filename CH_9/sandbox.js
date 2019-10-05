// array methods
const scores = [10, 30, 15, 25, 50, 40, 5];

updatedScores = scores.filter(score => {
    return score > 20;
});

console.log(updatedScores);

const users = [
    {name: 'matt', premium: true},
    {name: 'jasmine', premium: false},
    {name: 'violet', premium: false},
    {name: 'paul', premium: true},
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);

console.log(salePrices);

const products = [
    {name: 'banana', price: 0.95},
    {name: 'apple', price: 2.00},
    {name: 'berry', price: 2.00},
    {name: 'mellon', price: 3.00},
];

const saleProducts = products.map(product => {
    if(product.price > 1.00){
        return {name: product.name, price: product.price /2};
        } else {
        return product;
        }
    });

console.log(saleProducts);

// reduce method
const grades = [90, 80, 100, 70, 40, 50, 60];

const highGrades = grades.reduce((acc, curr) => {
    if (curr > 80){
        acc++;
    }
    return acc;
}, 0);

console.log(highGrades);

const userScore = [
    {player: 'matt', score: 100},
    {player: 'jasmine', score: 80},
    {player: 'violet', score: 75},
    {player: 'paul', score: 80},
    {player: 'matt', score: 90},
    {player: 'jasmine', score: 80},
    {player: 'violet', score: 75},
    {player: 'paul', score: 80},
    {player: 'matt', score: 95},
    {player: 'jasmine', score: 80},
    {player: 'violet', score: 75},
    {player: 'paul', score: 80},
    {player: 'matt', score: 40},
    {player: 'jasmine', score: 80},
    {player: 'violet', score: 75},
    {player: 'paul', score: 80},
];

const mattTotal = userScore.reduce((acc, curr) => {
    if(curr.player === 'matt'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(mattTotal);

// find method

const temperatures = [5, 65, 90, 45, 85, 95, 105, 40, 20, 30];

firstFreezingDay = temperatures.find(temp => temp < 32);

console.log(firstFreezingDay);

// sort method

const names = ['matt', 'jasmine', 'violet', 'paul'];

names.sort();
names.reverse();
console.log(names);

temperatures.sort().reverse();
console.log(temperatures);


products.sort((a,b) => b.score - a.score);
temperatures.sort((a,b) => a - b);

console.log(temperatures.reverse());

console.log(products);

// chaining array methods

//const filtered = products.filter(product => product.price > 1);

// const promos = filtered.map(product => `the ${product.name} is ${product.price/2} dollars.`);

const promos = products
    .filter(product => product.price > 1)
    .map(product => `the ${product.name} is \$${product.price/2}.`)
console.log(promos);