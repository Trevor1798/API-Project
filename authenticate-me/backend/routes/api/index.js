const router = require('express').Router()
const { User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);


router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});
// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body})
// })


module.exports = router;
