const database = require("../database/connection");

module.exports = class News {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static list() {
    return database.execute("SELECT * FROM news");
  }

  static get(id) {
    return database.execute(
      "SELECT id, title, content FROM news WHERE id = ?",
      [id]
    );
  }

  static create(title, content) {
    return database.execute("INSERT INTO news (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);
  }

  static update(id, title, content) {
    return database.execute(
      "UPDATE news SET title = ?, content = ? WHERE id = ?",
      [title, content, id]
    );
  }

  static delete(id) {
    return database.execute("DELETE FROM news WHERE id = ?", [id]);
  }
};
