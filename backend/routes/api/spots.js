const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const Sequelize = require('sequelize');
const {Op} = require('sequelize')




//get spots owned by current user
router.get('/current-user', restoreUser, requireAuth, async (req, res) => {
    const currentUser = req.user.id
    let spotsCurrentlyOwned = await Spot.findAll({
        where: {
            ownerId: currentUser
        },
        include: [
           { model: Review},
           { model: Image, where: {previewImg:true}},
        ],
        attributes: {
            include: [
                [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating'],

            ],
        },
        group: ['Spot.id']
    })
    return res.json(spotsCurrentlyOwned)
})



//Get details of a spot from an id
router.get('/:spotId', async (req, res) => {
    const spotId = req.params.spotId
    let spots = await Spot.findByPk(spotId)

    if (!spots) {
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    res.status(200)
    return res.json(spots)
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



//Get all Spots
router.get('/', async (req, res) => {

    const allSpots = await Spot.findAll({
        include: [
            {model: Review, attributes: [],  },
            {model: Image,},
             {where: {previewImg : true}
            }
        ], attributes: {
            include: [
              [ Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating' ],

            ]
          },
          group: ['Spot.id'],
        })
        res.status(200)
        return res.json(allSpots)
    })



//spotValidator
    const spotValidator = [
        check('address')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage("Street address is required"),
        check('city')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('City is required'),
        check('state')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('State is required'),
        check('country')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('Country is required'),
        check('lat')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('Latitude is not valid'),
        check('lng')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('Longitude is not valid'),
        check('name')
            .exists({checkFalsy: true})
            .notEmpty()
            .isLength({max: 50})
            .withMessage('Name must be less than 50 characters'),
        check('description')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('Description is required'),
        check('price')
            .exists({checkFalsy: true})
            .notEmpty()
            .withMessage('Price per day is required')

    ]



//Create a spot
router.post('/', spotValidator, restoreUser, requireAuth, async (req, res) => {
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

//edit a spot
router.put('/:spotId', spotValidator, restoreUser, requireAuth, async (req, res) => {
    let spotId = req.params.spotId
    let currentUser = req.user.id

      let spot = await Spot.findByPk(spotId)

      if (!spot) {
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
          })
        }

        if (spot.ownerId === currentUser) {
         const {address, city, state, country, lat, lng, name, description, price} = req.body
          spot.set({
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
        }
            await spot.save()
            res.status(200)
            return res.json(spot)
    })


//delete a spot
router.delete('/:spotId', restoreUser, requireAuth, async (req, res) => {
        const spotId = req.params.spotId
        const currentUser = req.user.id

            let spot = await Spot.findByPk(spotId)

            if (!spot) {
                return res.json({
                    "message": "Spot couldn't be found",
                    "statusCode": 404})
                }

                await Spot.destroy({where: {id: spotId}})
                return res.json({"message": "Successfully Deleted"})
})

//create a review for a spot based on the spots id
router.post('/:spotId/reviews', restoreUser, requireAuth, async (req, res) => {
        const spotId = req.params.spotId
        const currentUser = req.user.id
        const {review, stars } = req.body

        const spotReview = await Spot.findByPk(spotId)

        if(!spotReview) {
            res.status(404)
            return res.json({"message": "Spot couldnt be found"})
        }
        if (!review || !review.length ) {
            res.status(400)
            return res.json({"message": "Review couldn't be found or text is required"})
        }
        if (stars > 5 || stars < 1 || !stars) {
            res.status(400)
            return res.json({"message": "Stars must be an integer from 1 to 5"})
        }


        const userReview = await Review.findByPk(currentUser)
            if (userReview.length >= 1) {
                res.status(403)
                return res.json({"message": "User already has a review"})
            }

            const createUserReview = await Review.create({
                userId: currentUser,
                spotId,
                review,
                stars
            })
            await createUserReview.save()
            res.status(200)
            return res.json({createUserReview})

})


//Get all reviews by a spots ID
router.get('/:spotId/reviews', restoreUser, requireAuth, async (req, res) => {
    const spotId = req.params.spotId

    let spot = await Spot.findByPk(spotId)

    if (!spot){
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    const reviews = await Review.findAll({
        where: {
            spotId: spotId,
        },
        include: [
        { model: User, attributes: ['id', 'firstName', 'lastName']},
        { model: Image, attributes: ['id', 'url']
            }
        ]
    })
    res.status(200)
    return res.json({reviews})
})

//get all booking for a spot based on the spots id
router.get('/:spotId/bookings', restoreUser, requireAuth, async (req, res) => {
    const currentUser = req.user.id
    const spotId = req.params.spotId
        const userBookings = await Booking.findAll({
        where: { spotId },
        include: {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
                 }
        })
        const allBookings = await Booking.findAll({
            where: {spotId},
            attributes: ['id', 'spotId', 'userId', 'startDate', 'endDate', 'createdAt', 'updatedAt'],
        })

        const spot = await Spot.findByPk(spotId, {
            where: {ownerId: currentUser}
        })

        if (!spot) {
            res.status(404)
            return res.json({"message": "Spot couldn't be found"})
        }
        if (spot.ownerId === currentUser) return res.json(userBookings)
        else return res.json(allBookings)
})


//create a booking from a spot based on the spots id
    router.post('/:spotId/bookings', restoreUser, requireAuth, async (req, res) =>{
            const spotId = req.params.spotId
            const currentUser = req.user.id
            const {startDate, endDate} = req.body

            const spot = await Spot.findByPk(spotId)

            if (!spot) {
                res.status(403)
                return res.json({"message": "Spot couldn't be found", "statusCode": 404})
            }

            if (startDate >= endDate) {
                res.status(400)
                return res.json({
                  "message": "Validation error",
                  "statusCode": 400,
                  "endDate": "endDate cannot be on or before startDate",
            })

            }
            let alreadyBooked = await Booking.findAll({
                where: {
                    spotId: spotId,
                    [Op.and]: [
                        {startDate: req.body.startDate },
                        {spotId: req.params.spotId}
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
            } else if (alreadyBooked.length < 1) {
                const createBooking = await Booking.create({
                    currentUser,
                    spotId,
                    startDate,
                    endDate,
                })
                res.status(200)
                return res.json(createBooking)

            }

    })

module.exports = router
