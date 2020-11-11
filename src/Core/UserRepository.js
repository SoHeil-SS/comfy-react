const { default: User } = require("./user");

class Repository {
  constructor() {
    this.users = [
      new User("user1", "first", "last", "12156"),
      new User("user2", "first", "last", "22257"),
      new User("user3", "first", "last", "32358"),
      new User("user4", "first", "last", "42459"),
    ];
  }
  add(username, firstname, lastname, password, isAdmin) {
    const user = new User(username, firstname, lastname, password, isAdmin);
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
