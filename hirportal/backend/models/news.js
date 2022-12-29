module.exports = class News {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static fetchAll() {
    return [
      {
        id: 1,
        title: "A legelso",
        content: "Legelso hir tartalma",
      },
      {
        id: 2,
        title: "Masodik hir",
        content: "Masodik hir tartalma",
      },
    ];
  }
};
