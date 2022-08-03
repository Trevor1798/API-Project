const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');




//Get all Spots
router.get('/', async (req, res) => {
    const allSpots = await Spot.findAll({
        include: [
            {model: Review, attributes: []},
            {model: Image, attributes: [], where: {previewImg: true}}
        ]
    })
    res.status(200)
    return res.json(allSpots)
})



//Get details of a spot from an id
router.get('/:ownerId', async (req, res) => {
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
    const currentUser = req.user.id

    let spotsCurrentlyOwned = await Spot.findAll({
        where: {
            currentUser
        }
    })
    return res.json(spotsCurrentlyOwned)
})

//Create a spot
router.post('/', async (req, res) => {
    const {ownerId, address, city, state, country, lat, lng, name, description, price} = req.body
    const newSpot = await Spot.create(req.body)

    res.status(200)
    return res.json(newSpot)
})



module.exports = router
