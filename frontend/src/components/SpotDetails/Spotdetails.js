import {NavLink, useParams, useHistory} from 'react-router-dom'
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
    let history = useHistory()
let dispatch = useDispatch()
const {spotId} = useParams()
const spot= useSelector((state) => Object.values(state.spots))
const review = useSelector((state) => Object.values(state.reviews))
const sessionUser = useSelector((state) => state.session.user);
const [isLoaded, setIsLoaded] =useState(false)
const spots = spot.find((spots) => spots.id == spotId)
let plswork = review.filter((review) => review.spotId === parseInt(spotId))

    const [showModal, setShowModal] = useState(false)

useEffect(() => {
    dispatch(spotsActions.getAllSpots()).then(() => setIsLoaded(true))
    dispatch(reviewActions.getReviews(spotId))
}, [dispatch])

if (!isLoaded) return null

const handleDelete = (reviewId) => {

   return dispatch(reviewActions.getDeleteReviews(parseInt(reviewId)))
}
const onEditSpotClick = (e) => {
    e.preventDefault();
    setShowModal(true);
};

if (!spots) return null

    return ( isLoaded && (


        <div className='wrapper-container'>


        <div className='spotdetails-container'>
            <div className='spotdetailscontainer2'>
            <div className='spotdetails-name'>{spots.name} {''}
            <br>
            </br>
            <div className='review-details'><i className='fa-solid fa-star'></i>
            <div className='avg-rating'>
            {spots.avgRating}
            </div>
            <div className='reviews-count'>
                {''}
            {plswork.length} {'reviews'}</div>
            </div>
            <div className='super-host'><i className='fa-solid fa-medal'></i>Superhost</div>
            <div className='city-state'> {spots.city}, {spots.state}</div>
            </div>
            <div className='image-container'>
            <img className='spotdetails-image' src={spots.previewImage} />
            </div>
        <div className='spotdetails-container'>
            {/* <div className='hosted-by'>Home hosted by {spots.ownerId}</div> */}
            <div className='spotdetails-address'>{spots.country}
            <div className='spotdetails-description'>{spots.description}
            <div className='edit-spots'>
                {sessionUser.user.id == spots.ownerId && (

                    <button className='edit-spot' onClick={onEditSpotClick} type='submit'>
                    Edit Spot
                </button>
                    )}
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                        <EditSpots showModal={showModal} setShowModal={setShowModal}/>

                        </Modal>
                        )}
            </div>
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

    )
}





export default SpotDetails
