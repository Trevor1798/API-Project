const express = require("express");

const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//connected to handleValidationErrorsMiddleware
const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").notEmpty().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

//Sign-up new user
router.post("/", validateSignup, async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;
  let user = await User.signup({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  let token = await setTokenCookie(res, user);
  // console.log(user)
  user = user.toJSON();
  user.token = token;

  return res.json(user);
});

router.get('/', async (req, res) => {
let users =  await User.findAll()

res.status(200)
res.json({users})

})

module.exports = router;
