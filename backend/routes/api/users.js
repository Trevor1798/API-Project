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
    .not()
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
      const user = await User.signup({firstName, lastName, email, username, password });

       await setTokenCookie(res, user);

      return res.json({
        user
      });
    }
  );
    //Get current user
 router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
  return res.json(req.user)
 })

module.exports = router;
