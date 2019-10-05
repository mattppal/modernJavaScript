// const para = document.querySelector('p');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// paras.forEach(para => {
//     console.log(para)
// });


// grab an element by ID

// const title = document.getElementById('page title');
// console.log(title);

// grab an element by class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get elements by tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras);


// const para = document.querySelector('p');
// para.innerText = 'goodbye world';
// para.innerText = 'hello again world';
// para.innerText += ', my old friend';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' sit dolor amet.';
// })

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);

// // content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['matt', 'jasmine', 'paul', 'violet'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.google.com');

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('style','color:green')
// console.log(msg)

// const title = document.querySelector('h1');


// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '40px';
// title.style.margin = '';

// console.log(title.style.color);

// const content = document.querySelectorAll('p');


// My attempt
// content.forEach(function successError(ptag) {
//     if (ptag.innerText.includes('success')) {
//         ptag.classList.add('success');
//      } else if (ptag.innerText.includes('error')) {
//         ptag.classList.add('error')
//      }
// });


//Solution. TextContent returns all text, not just visible
// content.forEach(p => {
//     if (p.textContent.includes('success')) {
//         p.classList.add('success');
//      } else if (p.textContent.includes('error')) {
//         p.classList.add('error')
//      };
// });

// const title = document.querySelector('.title');
// title.classList.toggle('test');

// const article = document.querySelector('article');
// console.log(article.children);
// articleArray = Array.from(article.children);
// console.log(articleArray);
// articleArray.forEach(child => {
//     child.classList.add('article-element');
// });
// const title = document.querySelector('h2');

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do'
//     ul.prepend(li)
// });

// const items = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// //ul.remove();

// // items.forEach(item => {
// //     item.addEventListener('click', e =>{
// //         e.target.style.textDecoration = 'line-through';
// //         console.log('event in LI');
// //         e.stopPropagation();
// //     });
// // });

// ul.addEventListener('click', e => {
//     // console.log('event in UL')
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     };
// });

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () =>{
//     console.log('Hey! Cut that out!');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     //console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos ${e.offsetX} y pos ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });