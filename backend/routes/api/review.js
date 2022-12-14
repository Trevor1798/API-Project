const express = require("express");
const router = express.Router();
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { User, Spot, Booking, Image, Review } = require("../../db/models");
const { Op } = require("sequelize");

//get all reviews of the current user
router.get("/current", restoreUser, requireAuth, async (req, res) => {
  const review = await Review.findAll({
    where: { userId: req.user.id },

    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Spot,
        attributes: [
          "id",
          "ownerId",
          "address",
          "city",
          "state",
          "country",
          "lat",
          "lng",
          "name",
          "price",
        ],
      },
      {
        model: Image,
        attributes: ["id", ["reviewId", "imageableId"], "url"],
      },
    ],
  });

  return res.json({ review });
});

//add an image to a review based on the reviews ID

router.post("/:reviewId/images", restoreUser, requireAuth, async (req, res) => {
  const reviewId = req.params.reviewId;
  const { url } = req.body;

  const newReviewId = await Review.findByPk(reviewId);

  if (!newReviewId) {
    res.status(404);
    return res.json({ message: "Review couldnt be found", statusCode: 404 });
  }
  if (!url) {
    res.status(404);
    return res.json({
      message: "Image url couldn't be found",
      statusCode: 404,
    });
  }

  const image = await Image.findAll({
    where: {
      [Op.and]: [{ reviewId }],
    },
  });

  let imgNum = parseInt(image);
  if (imgNum > 10) {
    res.status(403);
    return res.json({
      message: "Maximum number of images for this resource was reached",
    });
  }

  let newReviewImage = await Image.create({
    reviewId,
    url,
    userId: req.user.id,
  });
  let imgObj = {
    id: newReviewImage.id,
    imageableId: newReviewImage.reviewId,
    url: newReviewImage.url,
  };
  res.status(200);
  return res.json(imgObj);
});

//edit a review
router.put("/:reviewId", restoreUser, requireAuth, async (req, res) => {
  const currentUser = req.user.id;
  const reviewId = req.params.reviewId;
  const { stars, review } = req.body;

  const getReview = await Review.findByPk(reviewId);

  if (!getReview) {
    res.status(400);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }

  let editReview = await Review.findOne({
    where: {
      id: reviewId,
    },
  });
  if (!editReview.review || editReview.stars < 1 || editReview.stars > 5) {
    res.status(400);
    return res.json({
      message: "Validation error",
      statusCode: 400,
      errors: {
        review: "Review text is required",
        stars: "Stars must be an integer from 1 to 5",
      },
    });
  }

  editReview.review = review;
  editReview.stars = stars;
  await editReview.save();
  res.status(200);
  return res.json(editReview);
});

//delete a review

router.delete("/:reviewId", restoreUser, requireAuth, async (req, res) => {
  const currentUser = req.user.id;
  const deleteReview = await Review.findByPk(req.params.reviewId);

  if (!deleteReview) {
    res.status(404);
    return res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }
  if (deleteReview.userId !== currentUser) {
    res.status(403);
    return res.json({
      message: "Authorization error",
      statusCode: 403,
    });
  }
  deleteReview.destroy();
  res.status(200);
  return res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
