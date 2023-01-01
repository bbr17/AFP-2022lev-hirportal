const database = require("../database/connection");

module.exports = class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static exists(email) {
    return database.execute("SELECT * FROM users WHERE email = ?", [email]);
  }

  static register(user) {
    return database.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [user.username, user.email, user.password]
    );
  }
};
