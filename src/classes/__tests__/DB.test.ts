import DB from '../DB';

describe('Create new instance of DB', () => {
  it('without arguments', () => {
    const userDB = new DB();
  });

  it('with arguments', () => {
    const userDB = new DB([{
      username: 'chmieluziomal',
      password: 'testowehaslo',
      photo: './photo.jpg'
    }]);
  });
});

describe('Methods of DB', () => {
  it('addUser()', () => {
    const userDB = new DB();
    userDB.addUser([{username: 'test', password: 'test', photo: 'test'}]);
  });

  it('removeUser()', () => {
    const userDB = new DB([{username: 'test', password: 'test', photo: 'test'}]);
    userDB.removeUser([0]);
  });

  it('getUsers', () => {
    const userDB = new DB([
      {
        username: 'test', 
        password: 'test', 
        photo: 'test'
      },
      {
        username: 'test', 
        password: 'test', 
        photo: 'test'
      },
    ]);

    expect(userDB.getUsers).toEqual(expect.arrayContaining([expect.objectContaining({
      id: expect.any(Number),
      username: expect.any(String),
      password: expect.any(String),
      photo: expect.any(String),
    })]));
  })
})