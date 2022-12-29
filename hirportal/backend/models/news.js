const database = require("../database/connection");

module.exports = class News {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static fetchAll() {
    return database.execute("SELECT * FROM news");
  }
};
