const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');



router.get('/', async (req, res) => {
    const { }
    const allSpots = await Spot.findAll()
    res.status(200)
    return res.json(allSpots)
})
