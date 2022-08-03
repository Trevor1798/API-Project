const express = require('express')
const router = express.Router()
const {setTokenCookie, requireAuth, restoreUser} = require('../../utils/auth')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot, Booking, Image, Review} = require('../../db/models')


//get all reviews of the current user
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
                return res.json(review)
})


//add an image to a review based on the reviews ID

router.post('/:reviewId/images', restoreUser, requireAuth, async (req, res) => {
        const reviewId = req.params.reviewId
        const currentUser = req.user.id
        const { url } = req.body

        const newReviewId = await Review.findByPk(reviewId)

        if (!newReviewId) {
            res.status(404)
            return res.json({"message": "Review couldnt be found"})
        }
        if (!url) {
           res.status(404)
            return res.json({"message": "Image url couldn't be found"})
        }

        const imgNum = await Image.findAll({
            where: {reviewId: reviewId}
        })
        if (imgNum.length > 10) {
            res.status(403)
            return res.json({"message": "Maximum number of images for this resource was reached"})
        }

        const newReviewImage = await Image.create({
            reviewId,
            url,
            currentUser,
        })
        res.status(200)
        return res.json(newReviewImage)

})


//edit a review
router.put('/:reviewId', restoreUser, requireAuth, async (req, res) => {
        const currentUser = req.user.id
        const reviewId = req.params.reviewId
        const {stars, review} = req.body

        const getReview = await Review.findByPk(reviewId)

        if (!getReview || !getReview.length ) {
            res.status(400)
            return res.json({"message": "Review couldn't be found or text is required"})
        }
        if (stars > 5 || stars < 1 || !stars) {
            res.status(400)
            return res.json({"message": "Stars must be an integer from 1 to 5"})
        }

         let editReview = await Review.findByPk(reviewId)
          editReview.update(review, stars)
          editReview.save()
          res.status(200)
          return res.json(editReview)


})


//delete a review

    router.delete('/:reviewId', restoreUser, requireAuth, async (req, res) => {
            const currentUser = req.user.id
            const reviewId = req.params.reviewId

            const deleteReview = await Review.findByPk(reviewId)

                if (!deleteReview) {
                    res.status(404)
                    return res.json({"message": "Review couldn't be found"})
                }
                if (reviewId.userId !== currentUser)
                    deleteReview.destroy()
                    res.status(200)
                    return res.json({"message": "Successfully deleted"})
    })


    module.exports = router
