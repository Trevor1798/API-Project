const express = require('express');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//connected to handleValidationErrorsMiddleware
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .notEmpty()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];


//Sign-up new user
router.post('/', validateSignup, async (req, res) => {
      const {firstName, lastName, email, password, username } = req.body;

      const user = await User.findOne({
          where: {
            [Op.or]: ['username', 'email']
          }
      })

      if (user.email) {
        res.status(403)
        return res.json({
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
           "email": "User with that email already exists"
          }
        })
      }
      if (user.username){
        res.status(403)
        return res.json({
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
            "username": "User with that username already exists"
          }
        })

      } else {
        const newUser = await User.signup({firstName, lastName, email, username, password });
        await setTokenCookie(res, user);
        return res.json({
          newUser
        });
      }
    }
  );


module.exports = router;
