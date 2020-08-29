export default class UserAccount {
  id: number;
  username: string;
  password: string;
  photo: string;

  constructor(
    username: string,
    password: string,
    photo?: string
  ) {
    this.username = username;
    this.password = password;
    photo ? this.photo = photo : this.photo = '';
    this.id = 0; 
  }

  get informations() {
    return {
      username: this.username,
      password: this.password,
      photo: this.photo,
    }
  }
}