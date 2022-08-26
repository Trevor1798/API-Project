const router = require("express").Router();
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

const spotsRouter = require("./spots.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const reviewsRouter = require("./review.js");
const bookingRouter = require("./booking.js");
const imageRouter = require("./images");

router.use(restoreUser);
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);
router.use("/reviews", reviewsRouter);
router.use("/bookings", bookingRouter);
router.use("/images", imageRouter);

router.get("/restore-user", (req, res) => {
  return res.json(req.user);
});

router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Musk1'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user });
});

router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
