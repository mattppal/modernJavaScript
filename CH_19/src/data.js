const users = [
    { name: 'matt', premium: true },
    { name: 'jasmine', premium: false },
    { name: 'violet', premium: false },
    { name: 'paul', premium: true }
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremUsers, users as default }