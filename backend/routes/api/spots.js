const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');


//Get all Spots
router.get('/', async (req, res) => {
    const allSpots = await Spot.findAll()
    res.status(200)
    return res.json(allSpots)
})

//Create a spot
router.post('/', async (req, res) => {
    let spot = req.
    const {address, city, state, country, lat, lng, name, description, price} = req.body
    const newSpot = await Spot.create({
        this.address = address,
    })
})

module.exports = router
