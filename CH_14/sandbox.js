const todos = [
    { text: "run a 5k", author: "matt"},
    { text: "buy some oats", author: "matt"},
    { text: "deadlift heavy", author: "matt"}
];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos')
console.log(JSON.parse(stored));