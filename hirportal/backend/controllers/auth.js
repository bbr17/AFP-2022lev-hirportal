const { validationResult } = require("express-validator");
const userContext = require("../models/user");

exports.register = async (request, response, next) => {
  //   const errors = validationResult(request);
  //   if (!errors.isEmpty()) return;

  const userToRegister = {
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  };

  try {
    const result = userContext.register(userToRegister);
    response.status(201).json({ message: "User registered." });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
