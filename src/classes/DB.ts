import User from '@interfaces/User';

export default class DB {
  private users: Array<User> = new Array();
  private lastId = 0;

  constructor(users?: Array<User>) {
    users && this.addUser(users);
  }

  addUser(users: Array<User>) {
    users.forEach(({username, password, photo}) => {
      const id = this.lastId++;

      this.users.push({
        id,
        username,
        password,
        photo,
      });
    });
  }

  get getUsers() {
    return this.users;
  }

  removeUser(ids: [number]) {
    const newArray = this.users.filter(({id: userId}) => {
      let remained = true;

      ids.forEach(id => {
        if(id === userId) remained = false;
      });

      return remained;
    });

    this.users = newArray;
  }
}
