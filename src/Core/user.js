class User {
  constructor(firstname, lastname, username, password) {
    this.id = Math.random().toString();
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
  }
}
export default User;
