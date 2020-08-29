import DB from './classes/DB';
import UserAccount from './classes/UserAccount';

const usersDB = new DB();
const user1 = new UserAccount('Jakub', 'testowehaslo');
const user2 = new UserAccount('Andrzej', 'testowehaslo2', './photo.jpg');

usersDB.addUser([user1.informations, user2.informations]);
usersDB.removeUser([0]);
console.log(usersDB.getUsers);