import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from '../../context/Modal'
import EditSpots from '../EditSpots/EditSpots.js'
import OwnerSpots from '../EditSpots/OwnedSpots'
import * as reviewActions from '../../store/reviews'
import * as spotsActions from '../../store/spots'
import '../ALLCSS/SpotDetails.css'
function SpotDetails( ) {
let dispatch = useDispatch()
const {spotId} = useParams()
const spot= useSelector((state) => Object.values(state.spots))
const review = useSelector((state) => Object.values(state.reviews))

const spots = spot.find((spots) => spots.id == spotId)
let plswork = review.filter((review) => review.spotId === parseInt(spotId))

useEffect(() => {
    dispatch(reviewActions.getReviews(spotId))
}, [dispatch, spotId])

const handleDelete = (reviewId) => {

    dispatch(reviewActions.getDeleteReviews(parseInt(reviewId)))
}

    return (

        <div className='wrapper-container'>


        <div className='spotdetails-container'>
            <div className='spotdetailscontainer2'>
            <div className='spotdetails-name'>{spots.name}
            </div>
            <div className='image-container'>
            <img className='spotdetails-image' src={spots.previewImage} />
            </div>
        <div className='spotdetails-container'>
            <div className='spotdetails-address'>{spots.city}, {spots.state}, {spots.country}
            <div className='spotdetails-description'>{spots.description}
           <div className='stardetails-rating'>
            <i className='fa-solid fa-star'>{spots.avgRating}</i>
            </div>
            </div>
            </div>
        </div>
           </div>
        <div className="spotDetailReviews">
        {plswork.map((review, i) => (
            <>
            <button className='create-review-button'>
        <Link to={`/spots/${spots.id}/create-reviews`}>Create Review</Link>
            </button>
        <div className='detailscreate-review' key={review.id} review={review}>Reviews: {''}
          <i className="fa-solid fa-star"></i>{review.stars} {review.review}</div>
        <div className='detailscreate-review'>

        <button className='delete-review-button' onClick={() => handleDelete(review.id)}>Delete Review</button>
        </div>
        </>
        ))}
      </div>
        </div>
        </div>


    )
}





export default SpotDetails
