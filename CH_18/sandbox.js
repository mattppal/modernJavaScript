// rest parameter

const double = (...nums) => {
    // do something
    return nums.map(num => num * 2)
}

const result = double(1,6,10,20)
console.log(result);

// spread syntax (arrays)

const people = ['matt', 'jasmine', 'paul', 'violet'];
const members = ['java', 'rocky', ...people]

// console.log(...people);
// console.log(members);

// spread syntax (objects)

const person = { name: 'matt', age: 24, job: 'data analyst'};
const personClone = {...person, location: 'nova'};
//console.log(person, personClone);

// sets
const peopleClone = [...people, 'matt']
// console.log(peopleClone);
// const namesSet = new Set(peopleClone);
// console.log(namesSet);

// const uniqueNames = [...namesSet]
// console.log(uniqueNames);

const uniqueNames = [...new Set(peopleClone)]
console.log(uniqueNames);

const ages = new Set();
ages.add(24).add(22).add(65).add(69);
console.log(ages.size);
console.log(ages.has(24), ages.has(35));

ages.forEach(age => console.log(age));

// symbols in JS
const symbolOne = Symbol('hi');
const symbolTwo = Symbol('hello');
console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const matt = {};

matt.age = 24;
matt['loc'] = 'nova';
matt['job'] = 'scrub';
matt[symbolOne] = 'exercise'
matt[symbolTwo] = 'food'
console.log(matt);



