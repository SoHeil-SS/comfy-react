const { default: User } = require("./user");

class Repository {
  constructor() {
    this.users = [];
  }
  add(username, email, password) {
    const user = new User(username, email, password);
    this.users.push(user);
  }
  // delete(id) {
  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //   }
  // }
  // update(id, username, firstname, lastname, isAdmin) {
  //   const user = this.users.find((u) => u.id === id);
  //   if (user) {
  //     user.username = username;
  //     user.firstname = firstname;
  //     user.lastname = lastname;
  //     user.isAdmin = isAdmin;
  //   }
  // }
  get(id) {
    return this.users.find((u) => u.id === id);
  }
}
module.exports = new Repository();
