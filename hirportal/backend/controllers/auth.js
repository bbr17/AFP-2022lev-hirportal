const { validationResult } = require("express-validator");
const userContext = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) return; // TODO ha valami nem megy ezt leellenorizni

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

exports.login = async (request, response, next) => {
  const username = request.body.username;
  const password = request.body.password;
  try {
    const user = await userContext.userExists(username);
    if (user[0].length !== 1) {
      const error = new Error("A user with this username could not be found.");
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0][0];
    const token = jwt.sign(
      {
        username: storedUser.username,
        userId: storedUser.id,
      },
      "secretfortoken",
      { expiresIn: "1h" }
    );

    response.status(200).json({ token: token, userId: storedUser.id });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
