// http requests

// const getTodos = resource => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4){
//                 reject('error getting resource');
//             }
//         });
        
//         request.open('GET', resource);
//         request.send();
    
//     });   
//     };
    

// getTodos('todos/matt.json').then(data => {
//     console.log('promise resolved:', data);
//     return getTodos('todos/jasmine.json')
// }).then(data => {
//     console.log('promise 2 resolved:', data)
// }).catch(err => {
//     console.log('promise rejected:', err);
// });


// fetch api 

// fetch('todos/matt.json').then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected', err)
// });

// async & await

const getTodos = async (file) => {

    const response = await fetch(file);

    if(response.status !== 200){
        throw new Error('cannot fetch data');
    }

    const data = await response.json();
    return data;

};


getTodos('todos/matt.json')
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err));


getTodos('todos/jasmine.json')
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err));

getTodos('todos/rocky.json')
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err));

