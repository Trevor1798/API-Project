import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from '../../context/Modal'
import EditSpots from '../EditSpots/EditSpots.js'
import OwnerSpots from '../EditSpots/OwnedSpots'
import * as reviewActions from '../../store/reviews'
import * as spotsActions from '../../store/spots'
import '../ALLCSS/Spotcard.css'
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



    return (


        <div className='spot-details'>
            <div className='spot-name'>{spots.name}</div>
            <div className='spot-address'>{spots.city}, {spots.state}, {spots.country}</div>
            <div className='spot-description'>{spots.description}</div>
           <div className='star-rating'>
            <i className='fa-solid fa-star'>{spots.avgRating}</i>
           </div>
        <div className='spot-image'>
            <img className='spot-preview' src={spots.previewImage} />
        </div>
        <div className="spotDetailReviews">
        REVIEWS:
        {plswork.map((review, i) => (
          <div key={review.id} review={review}>Review: {''}
          <i className="fa-solid fa-star"></i>{review.stars} {review.review}</div>
        ))}
      </div>
        {/* <div className='edit-spot' onClick={e => e.stopPropagation()}>
            <NavLink to={`/spots/${spots.id}/edit`} className='edit-spot'>Edit Spot</NavLink>
        </div> */}
        </div>

    )
}





export default SpotDetails
