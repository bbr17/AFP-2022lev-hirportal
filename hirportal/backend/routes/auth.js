const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const user = require("../models/user");
const authController = require("../controllers/auth");

router.post(
  "/register",
  [
    body("username").trim().not().isEmpty(),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom(async (email) => {
        const userToRegister = await user.exists(email);
        if (userToRegister[0].length > 0) {
          return Promise.reject("Email address already exist!");
        }
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 3 }),
  ],
  authController.register
);

module.exports = router;
