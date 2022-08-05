const express = require('express')
const router  = express.Router()
const {setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const {Booking, Review, Image, Spot, User} = require('../../db/models')
const { Op } = require('sequelize')

//get all bookings for current user
router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
      const {user} = req.body
        let BookingsCurrentlyOwned = await Booking.findAll({
            where: {
            userId: user.id
          }
        })

            for (let booking of BookingsCurrentlyOwned){
            let spots = await Spot.findOne({
              where: {id: booking.spotId},
              attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
            })
            booking.dataValues.spots = spots
            previewImage = await Image.findOne({
               where: { previewImage: true, spotId: spots.id },
               attributes:  [ 'url']
            })
            booking.dataValues.previewImage = previewImage.url


            return res.json({Bookings: BookingsCurrentlyOwned})

          }
        })




//edit a booking
router.put('/:bookingId', restoreUser, requireAuth, async (req, res) => {

        let {startDate, endDate} = req.body

        const editBookings = await Booking.findByPk(req.params.bookingId)

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
        let date = new Date()
        let todaysDate = Date.parse(date)
        if (todaysDate >= editBookings.startDate) {
          res.status(403)
          return res.json({
            "message": "Past bookings can't be modified",
            "statusCode": 403
          })
        }

        let alreadyBooked = await Booking.findAll({
          where: {id: req.params.bookingId}
      })

      if (editBookings.startDate === (alreadyBooked.startDate && alreadyBooked.endDate)) {
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
          editBookings.update({
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
         //console.log(startDate)
        //  console.log(deleteBooking.startDate)
         if (today >= deleteBooking.startDate) {
          res.status(403)
          return res.json({
            "message": "Bookings that have been started can't be deleted",
            "statusCode": 403
           })
         }

          await deleteBooking.destroy()
          res.status(200)
          return res.json({
            "message": "Successfully deleted",
            "statusCode": 200
          })
  })









module.exports = router
