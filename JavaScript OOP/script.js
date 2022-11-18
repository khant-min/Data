class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.score = 0;
  }
  login() {
    console.log(this.name, "just logged in");
    return this;
  }
  logout() {
    console.log(this.name, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.name, "score is now", this.score);
    return this;
  }
}

// Inheritence

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => u.name !== user.name);
  }
}

let userOne = new User("khant", 23);
let userTwo = new User("Min", 22);
let admin = new Admin("Thu", 18);

let users = [userOne, userTwo, admin];

// if we call functions normally
// userOne.login();
// userOne.logout();

// in method chining

// userOne.login().updateScore().updateScore().logout();
// admin.deleteUser(userTwo);
// userTwo.deleteUser(userTwo);
// console.log(users);
// console.log(admin);

//// Constructor Function

function anotherUser(name, age) {
  this.name = name;
  this.age = age;
  this.login = function () {
    console.log(this);
  };
}

let user1 = new anotherUser("Khant", 23);
let user2 = new anotherUser("Min", 34);

// user1.login();

/// Prototype

anotherUser.prototype.login = function () {
  this.online = true;
  console.log(this.name, "has logged in");
};

anotherUser.prototype.logout = function () {
  this.online = false;
  console.log(this.name, "has logged out");
};

user1.login();
