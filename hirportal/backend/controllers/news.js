const news = require("../models/news");

exports.getAllNews = (request, response, next) => {
  response.send(news.fetchAll());
};
