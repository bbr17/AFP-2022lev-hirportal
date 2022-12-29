exports.pageNotFound404 = (request, response, next) => {
  const error = new Error("Page not found.");
  error.status = 404;
  next(error);
};

exports.internalServerError500 = (error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
};
