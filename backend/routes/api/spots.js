const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const Sequelize = require('sequelize');





//Get all Spots
router.get('/', async (req, res) => {
    const allSpots = await Spot.findAll({
        include: [
            {model: Review, attributes: [],  },
            {model: Image, attributes: [], where: {previewImg: true}}
        ], attributes: {
            include: [
              [ Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating' ],
              [ Sequelize.literal('Images.url'), 'previewImage' ]
            ]
          },
          group: ['Spot.id'],
        })
        res.status(200)
        return res.json(allSpots)
    })



//Get details of a spot from an id
router.get('/:spotId', async (req, res) => {
    const spotId = req.params.spotId
    let spots = await Spot.findByPk(spotId)

    if (!spots) {
        res.status(404)
        return res.json({
            "message": "Spot does not exist"
        })
    }
})


//get spots owned by current user
router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
    const currentUser = req.user

    let spotsCurrentlyOwned = await Spot.findAll({
        where: {
            currentUser
        }
    })
    return res.json(spotsCurrentlyOwned)
})

//Create a spot
router.post('/', restoreUser, requireAuth, async (req, res) => {
    const {address, city, state, country, lat, lng, name, description, price} = req.body
    const ownerId = req.user.id
    const newSpot = await Spot.create({
        ownerId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })

    res.status(201)
    return res.json(newSpot)
})

//Add image to spot based on the spots id

router.post('/:spotId/images', restoreUser, requireAuth, async( req, res) => {
    const spotId = req.params.spotId
    const currentUser = req.user.id
    let spot = await Spot.findByPk(spotId)

    if (spot.ownerId !== currentUser) {
        res.status(404)
        return res.json({
            "message": "Spot couldnt be found"
        })
    }
        img = req.body
        img.spotId = spotId

    const image = await Image.create(img)
    return res.json(image)
})



module.exports = router
