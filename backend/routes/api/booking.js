const express = require('express')
const router  = express.Router()
const {setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const {Booking, Review, Image, Spot, User} = require('../../db/models')

//get all bookings for current user
router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
        const currentUser = req.user.id
        let BookingsCurrentlyOwned = await Booking.findAll({
        where: {
          userId: currentUser
        }
    })
    return res.json(BookingsCurrentlyOwned)
})

//edit a booking
router.put('/:bookingId', restoreUser, requireAuth, async (req, res) => {
        const currentUser = req.user.id
        const bookingId = req.params.bookingId
        let {startDate, endDate} = req.body

        const editBookings = await Booking.findByPk(bookingId)

        if (!editBookings) {
          res.status(404)
          return res.json({
            "message": "Booking could'nt be found",
            "statusCode": 404
          })
        }
        let today = new Date()
        if (today >= startDate) {
          res.status(403)
          return res.json({
            "message": "Past bookings can't be modified",
            "statusCode": 403
          })
        }

        let alreadyBooked = await Booking.findAll({
          where: {
              [Op.and]: [
                  {startDate: req.body.startDate },
                  {spotId: editBookings.spotId}
              ]
          }
      })

      if (alreadyBooked.length >= 1) {
          res.status(403)
          return res.json({
              "message": "Sorry, this spot is already booked for the specified dates",
              "statusCode": 403,
              "errors": {
                "startDate": "Start date conflicts with an existing booking",
                "endDate": "End date conflicts with an existing booking"
              }
          })
        } else {
          editBookings.startDate = startDate
          editBookings.endDate = endDate
        }


})











module.exports = router
