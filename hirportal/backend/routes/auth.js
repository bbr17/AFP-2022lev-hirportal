const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const user = require("../models/user");
const authController = require("../controllers/auth");

router.post(
  "/register",
  [
    body("username")
      .trim()
      .not()
      .isEmpty()
      .custom(async (username) => {
        const userToRegister = await user.userExists(username);
        if (userToRegister[0].length > 0) {
          return Promise.reject("Username already exist!");
        }
      }),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom(async (email) => {
        const userToRegister = await user.emailExists(email);
        if (userToRegister[0].length > 0) {
          return Promise.reject("Email address already exist!");
        }
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 3 }),
  ],
  authController.register
);

router.post("/login", authController.login);

module.exports = router;
