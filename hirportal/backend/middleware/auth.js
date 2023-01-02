const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  const authHeader = request.get("Authorization");

  if (!authHeader) {
    const error = new Error("User not authenticated!");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secretfortoken");
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  if (!decodedToken) {
    const error = new Error("User not authenticated!");
    error.statusCode = 401;
    throw error;
  }

  request.isLoggedIn = true;
  request.userId = decodedToken.userId;
  request.username = decodedToken.username;
  next();
};
