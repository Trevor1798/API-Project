const express = require('express')
const router = express.Router()
const {User, Booking, Spot, Image, Review } = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const Sequelize = require('sequelize');
const {Op} = require('sequelize');


let paginationValidator = [
        check('page')
            .exists({checkFalsy: true})
            .isLength({ min: 0})
            .withMessage('Page must be greater than or equal to 0'),
        check('size')
            .exists({checkFalsy: true})
            .isLength({min: 0})
            .withMessage('Size must be greater than or equal to 0'),
        check('lat')
            .exists({checkFalsy: true})
            .isLength({min: -180, max: 180})
            .withMessage('Maximum or minimum latitude is invalid'),
        check('lng')
            .exists({checkFalsy: true})
            .isLength({min: -90, max: 90})
            .withMessage('Maximum or minimum latitude is invalid'),
        check('price')
            .exists({checkFalsy: true})
            .isLength({min: 0})
            .withMessage('Maximum price and minimum price must be greater than or equal to 0 '),
]


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


        //get spots by current user
router.get('/current', restoreUser, requireAuth, async (req, res) => {

    let spotsCurrentlyOwned = await Spot.findAll({
        where: {ownerId: req.user.id}
        // include: [
        //    { model: Review, attributes: []},
        // ],
        // group: ['Spot.id']
    })

    for (let spot of spotsCurrentlyOwned){
        const reviews = await spot.getReviews({
          attributes: [
            [ Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating' ]
          ]
        })

      let avgRating = reviews[0].dataValues.avgRating

      if (reviews.avgRating){
          spot.dataValues.avgRating = parseFloat(avgRating.toFixed(1)); //star rating
      } else {
          spot.dataValues.avgRating = 'No ratings found' // if there is no rating
      }
        let previewImage = await Image.findOne({
           attributes: ['url'],
           where: { spotId: spot.id },

        })
        spot.dataValues.previewImage = previewImage.url
        // console.log(previewImage)
        // console.log(previewImage.url)
        // spot.dataValues.avgRating = 1
        // spot.previewImage = previewImage.url
        // console.log(previewImage.dataValues.url)
       }
    //   spot.dataValues.previewImage = console.log(image.dataValues.url)
    //   console.log(dataValues)
       return res.json({Spots: spotsCurrentlyOwned})
})



//create image to spot based on the spots id
router.post('/:spotId/images', restoreUser, requireAuth, async( req, res) => {

           let {url, previewImage} = req.body
           let spotId = req.params.spotId
           let spot = await Spot.findByPk(spotId)
            if (!spot) {
                    res.status(404)
                    return res.json({
                   "message": "Spot couldnt be found",
                    "statusCode": 404
                })

            }
            const image = await Image.create ({
                  spotId: spot.dataValues.id,
                   userId: req.user.id,
                     url,
                     previewImage,
               })

            let imgObj = {
                id: image.id,
                imageableId: image.spotId,
                url: image.url
       }
                res.status(200)
                return res.json(imgObj)

                })
//Get details of a spot from an id
router.get('/:spotId', async (req, res) => {
        const spotId = req.params.spotId

    let spots = await Spot.findOne({
        where: {id: spotId}
    })

    if (!spots) {
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    let reviews = await Review.findAll({
        where: {spotId},
        attributes: [
            [Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating'],

        ],
    })
    let avgStarRating = reviews[0].dataValues.avgRating

    if (reviews.avgRating){
        spots.dataValues.avgStarRating = parseFloat(avgRating.toFixed(1)); //star rating
    } else {
        spots.dataValues.avgStarRating = 'No ratings found' // if there is no rating
    }
    let numReviews = await Review.count({
        where: {spotId}
    })

    let img = await Image.findAll({
        where: {spotId},
        attributes: ['id', ['spotId', 'imageableId'], 'url']
    })

    let owner = await User.findByPk(spots.ownerId, {
       attributes: ['id', 'firstName', 'lastName']
    })

    const jsonify = spots.toJSON()

    jsonify.avgStarRating = parseFloat(Number(avgStarRating[0].dataValues.avgStarRating)).toFixed(1)
    jsonify.numReviews = numReviews
    jsonify.Images = img
    jsonify.Owner = owner

    res.status(200)
    return res.json(jsonify)
})




//Get all Spots
    router.get('/', paginationValidator,  async (req, res) => {

               // pagination
                let {size, page} = req.query
                if (!page) page = 0
                if (!size) size = 20
                page = parseInt(page)
                size = parseInt(size)

                let pagination = {}
                if (page >= 1 && size >= 1){
                    pagination.limit = size
                    pagination.offset = size * (page - 1)
                }


                let allSpots = await Spot.findAll({
                ...pagination
                 })

                     for (let spot of allSpots) {

                     let avgRating = await Review.findAll({
                         where: {id: spot.id},
                         attributes: [[ Sequelize.fn('AVG', Sequelize.col('stars')), 'avgRating']]
                     })
                     let previewImage = await Image.findOne({
                        attributes: ['url'],
                        where: { previewImage: true, spotId: spot.id },

                     })
     //  console.log(spot.dataValues)
                    // console.log(avgRating[0].dataValues.avgRating)
                     spot.dataValues.avgRating = parseFloat(Number(avgRating[0].dataValues.avgRating)).toFixed(1)
                     spot.dataValues.previewImage = previewImage.url
                    }
                    // spot.dataValues.page = page
                    // spot.dataValues.size = size

                    res.status(200)
                    return res.json({Spots: allSpots, page, size})
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
                { model: Image, attributes: ['id', ['reviewId', 'imageableId'], 'url']
                    }
                ]
            })
            res.status(200)
            return res.json({Reviews: reviews})
        })


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
        const {review, stars } = req.body
        const spotReview = await Spot.findByPk(spotId)
        if(!spotReview) {
            res.status(404)
            return res.json({"message": "Spot couldnt be found", "statusCode": 404})
        }
        if (stars > 5 || stars < 1 || !stars) {
            res.status(400)
            return res.json({"message": "Stars must be an integer from 1 to 5"})
        }

        const userReview = await Review.findAll({
            where: {
              [Op.and]: [
                { spotId: spotId},
                { userId: req.user.id }
              ]
            }
          })
        // const userReview = await Review.findOne({
        //     where: {userId: req.user.id}
        // })
            if (userReview.length >= 1) {
                res.status(403)
                return res.json({"message": "User already has a review"})
            }

            const createUserReview = await Review.create({
                review,
                stars,
                userId: req.user.id,
                spotId: spotId
            })

            res.status(200)
            return res.json(createUserReview)

})



//get all booking for a spot based on the spots id
router.get('/:spotId/bookings', restoreUser, requireAuth, async (req, res) => {
    let spotId = req.params.spotId
    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        res.status(404)
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const spotBookings = await Booking.findAll({
        where: { spotId },
        include: {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
                 }
        })
        const allBookings = await Booking.findAll({
            where: {id: req.params.spotId},
            attributes: ['id', 'spotId', 'userId', 'startDate', 'endDate', 'createdAt', 'updatedAt'],
        })

        if (spot.ownerId === req.user.id) return res.json({spotBookings})
        else return res.json({allBookings})
})


//create a booking from a spot based on the spots id
router.post('/:spotId/bookings', restoreUser, requireAuth, async (req, res) =>{

    const {startDate, endDate} = req.body
    const spotId = req.params.spotId

    const spot = await Spot.findByPk(req.params.spotId)

    if (!spot) {
        res.status(404)
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
                      {endDate: {[Op.gte]: startDate}},
                      {startDate: {[Op.lte]: endDate}},
                    ],
                  },
                });

            if (alreadyBooked.length) {
                        res.status(403)
                        return res.json({
                            "message": "Sorry, this spot is already booked for the specified dates",
                            "statusCode": 403,
                    "errors": {
                        "startDate": "Start date conflicts with an existing booking",
                        "endDate": "End date conflicts with an existing booking"
                    }
                })
            }
            const createBooking = await Booking.create({
                userId: req.user.id,
                spotId,
                startDate,
                endDate,
            })
            res.status(201)
            return res.json({createBooking})

    })

module.exports = router
