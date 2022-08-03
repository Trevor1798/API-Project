const express = require('express')
const router  = express.Router()
const {setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const {Booking, Review, Image, Spot, User} = require('../../db/models')


router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
        const currentUser = req.user.id
        let BookingsCurrentlyOwned = await Booking.findAll({
        where: {
          userId: currentUser
        }
    })
    return res.json(BookingsCurrentlyOwned)
})











module.exports = router
