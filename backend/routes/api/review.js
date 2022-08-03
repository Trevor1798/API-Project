const express = require('express')
const router = express.Router()
const {setTokenCookie, requireAuth, restoreUser} = require('../../utils/auth')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot, Booking, Image, Review} = require('../../db/models')



router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
        const currentUser = req.user.id

            const review = await Review.findAll({
                    where: {userId: currentUser},
                    include: [
                    {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']},
                    {
                    model: Spot,
                    attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
                    },
                    {
                    model: Image,
                    attributes: ['id','url' ]
                    }


                    ]

            })

})
