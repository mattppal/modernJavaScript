// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     // console.log(username.value);
//     console.log(form.username.value);
// })

// // test RegEx

// const username = 'mattinthehat';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // if (result) {
// //     console.log('regex passed!');
// // } else {
// //     console.log('regex failed');
// // };

// let result = username.search(pattern);
// console.log(result);

const usernamePattern = /^[a-zA-z]{6,12}$/;
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    // validation
    const username = form.username.value;
    
    if (usernamePattern.test(username)){
        feedback.textContent = 'nice username!';
    } else {
        feedback.textContent = 'bad username hombre';
    }
});

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});
