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
        const bookingId = req.params.bookingId
        let {startDate, endDate} = req.body

        const editBookings = await Booking.findByPk(bookingId)

        if (!editBookings) {
          res.status(404)
          return res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
          })
        }

        if (startDate >= endDate) {
          res.status(400)
          return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
              "endDate": "endDate cannot come before startDate"
        }
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
          editBookings.set({
            startDate,
            endDate
          })
          await editBookings.save()
          res.status(200)
          return res.json(editBookings)
        }


})

//delete an existing booking

  router.delete('/:bookingId', restoreUser, requireAuth, async (req, res) => {
         const bookingId = req.params.bookingId

         const deleteBooking = await Booking.findByPk(bookingId)

         if (!deleteBooking) {
          res.status(404)
          return res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
           })
         }
         let today = new Date()
         if (today >= startDate) {
          res.status(403)
          return res.json({
            "message": "Bookings that have been started can't be deleted",
            "statusCode": 403
           })
         }
          else {
           await deleteBooking.destroy()
          }
          res.status(200)
          return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
          })
  })









module.exports = router
