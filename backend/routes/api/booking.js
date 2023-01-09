const express = require("express");
const router = express.Router();
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { Booking, Review, Image, Spot, User } = require("../../db/models");
const { Op } = require("sequelize");

//get all bookings for current user
router.get("/current", restoreUser, requireAuth, async (req, res) => {
  const bookings = await Booking.findAll({
    where: { userId: req.user.id }
  });

  let bookingsArr = []

  for (let booking of bookings) {
    let spot = await Spot.findOne({
      where: { id: booking.spotId },
        raw: true,
        attributes: ["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "price"]
    })

    let image = await Image.findOne({
      where: {
        spotId: booking.spotId,
        previewImage: true
      }
    })

    if (image) {
      spot.previewImage = image.url
    } else {
      spot.previewImage = null
    }

    let response = {
      id: booking.id,
      spotId: booking.spotId,
      Spot: spot,
      userId: booking.userId,
      startDate: new Date(booking.startDate).toISOString().split('T')[0],
      endDate: new Date(booking.endDate).toISOString().split('T')[0],
      // startDate: booking.startDate,
      // endDate: booking.endDate,
      createdAt: booking.createdAt,
      updatedAt: booking.updatedAt
    }

    bookingsArr.push(response)
  }

  res.json({ Bookings: bookingsArr })
})

//edit a booking
router.put("/:bookingId", restoreUser, requireAuth, async (req, res) => {
  let { startDate, endDate } = req.body;
  let bookingId = req.params.bookingId;
  const editBookings = await Booking.findByPk(req.params.bookingId);

  if (!editBookings) {
    res.status(404);
    return res.json({
      message: "Booking couldn't be found",
      statusCode: 404,
    });
  }

  if (startDate >= endDate) {
    res.status(400);
    return res.json({
      message: "Validation error",
      statusCode: 400,
      errors: {
        endDate: "endDate cannot come before startDate",
      },
    });
  }
  let date = new Date();
  let todaysDate = Date.parse(date);
  if (todaysDate >= editBookings.startDate) {
    res.status(403);
    return res.json({
      message: "Past bookings can't be modified",
      statusCode: 403,
    });
  }
  let spotId = editBookings.spotId;
  let alreadyBooked = await Booking.findAll({
    where: {
      spotId: spotId,
      [Op.and]: [
        { endDate: { [Op.gte]: startDate } },
        { startDate: { [Op.lte]: endDate } },
      ],
    },
  });

  if (alreadyBooked.length) {
    res.status(403);
    return res.json({
      message: "Sorry, this spot is already booked for the specified dates",
      statusCode: 403,
      errors: {
        startDate: "Start date conflicts with an existing booking",
        endDate: "End date conflicts with an existing booking",
      },
    });
  }

  editBookings.update({
    startDate,
    endDate,
  });
  await editBookings.save();
  res.status(200);
  return res.json(editBookings);
});

//delete an existing booking

router.delete("/:bookingId", restoreUser, requireAuth, async (req, res) => {
  const bookingId = req.params.bookingId;

  const deleteBooking = await Booking.findByPk(bookingId);

  if (!deleteBooking) {
    res.status(404);
    return res.json({
      message: "Booking couldn't be found",
      statusCode: 404,
    });
  }
  let today = new Date();
  //console.log(startDate)
  //  console.log(deleteBooking.startDate)
  if (today >= deleteBooking.startDate) {
    res.status(403);
    return res.json({
      message: "Bookings that have been started can't be deleted",
      statusCode: 403,
    });
  }

  await deleteBooking.destroy();
  res.status(200);
  return res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
