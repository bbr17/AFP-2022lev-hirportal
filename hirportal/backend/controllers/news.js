const newsContext = require("../models/news");

exports.listNews = async (request, response, next) => {
  try {
    const [allNews] = await newsContext.list(); // destructuring
    response.status(200).json(allNews);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getNews = async (request, response, next) => {
  try {
    const news = await newsContext.get(request.params.id);
    response.status(200).json(news);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createNews = async (request, response, next) => {
  try {
    const dbResponse = await newsContext.create(
      request.body.title,
      request.body.content
    );
    response.status(201).json(dbResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.updateNews = async (request, response, next) => {
  try {
    const dbResponse = await newsContext.update(
      request.body.id,
      request.body.title,
      request.body.content
    );
    response.status(201).json(dbResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.deleteNews = async (request, response, next) => {
  try {
    const dbResponse = await newsContext.delete(request.params.id);
    response.status(201).json(dbResponse);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
