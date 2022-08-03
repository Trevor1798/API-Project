const express = require('express')
const router  = express.Router()
const {setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const {Booking, Review, Image, Spot, User} = require('../../db/models')













module.exports = router
