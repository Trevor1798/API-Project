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
// import '../ALLCSS/SpotDetails.css'
import SpotCard from '../Spots/SpotCard'
function SpotDetails() {
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


        <div className='spotdetails-image'>
            <div className='spotdetails-name'>{spots.name}</div>
            <img className='spotdetails-preview' src={spots.previewImage} />
        <div className='spotdetails-container'>
            <div className='spotdetails-address'>{spots.city}, {spots.state}, {spots.country}</div>
            <div className='spotdetails-description'>{spots.description}</div>
           <div className='stardetails-rating'>
            <i className='fa-solid fa-star'>{spots.avgRating}</i>
           </div>
        <div className="spotDetailReviews">
        {plswork.map((review, i) => (
            <>
        <div key={review.id} review={review}>Review: {''}
          <i className="fa-solid fa-star"></i>{review.stars} {review.review}</div>
        <div className='detailscreate-review'>

        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
        </div>
        </>
        ))}
        <Link to={`/spots/${spots.id}/create-reviews`}>Create Review</Link>
      </div>
        </div>
        </div>


    )
}





export default SpotDetails
