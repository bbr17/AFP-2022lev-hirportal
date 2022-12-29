const news = require("../models/news");

exports.getAllNews = async (request, response, next) => {
  try {
    const [allNews] = await news.fetchAll(); // destructuring
    response.status(200).json(allNews);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
