import {styleBody, addTitle, contact} from './dom';
import users, { getPremUsers } from './data'

console.log('index file');

addTitle('hello, world!')

const premUsers = getPremUsers(users);

console.log(premUsers, users);
console.log('test');