const express = require("express");
const router = express.Router();
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { Booking, Review, Image, Spot, User } = require("../../db/models");

//delete an image

router.delete("/:imageId", restoreUser, requireAuth, async (req, res) => {
  const imageId = req.params.imageId;

  let images = await Image.findByPk(imageId);

  if (!images) {
    res.status(404);
    return res.json({
      message: "Image couldn't be found",
      statusCode: 404,
    });
  }
  await Image.destroy({
    where: {
      id: imageId,
    },
  });

  res.status(200);
  return res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
