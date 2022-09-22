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
import { csrfFetch } from '../../store/csrf'
import { getAllUsers } from '../../store/user'
function SpotDetails( ) {
    let history = useHistory()
let dispatch = useDispatch()
const {spotId} = useParams()
const {ownerId} = useParams()
const spotObj= useSelector((state) =>(state.spots))
const reviewObj= useSelector((state) => (state.reviews))
const usersObj = useSelector((state => (state.users)))
const spot = Object.values(spotObj)
const review = Object.values(reviewObj)
const users = Object.values(usersObj)
console.log(review)

console.log('-----------',users)
// console.log('these are all my users', users.firstName)

const sessionUser = useSelector((state) => state.session.user);
const [isLoaded, setIsLoaded] =useState(false)
const spots = spot.find((spots) => spots.id == spotId)
console.log('check ', spots)
let plswork = review.filter((review) => review.spotId === parseInt(spotId))
console.log('this is my session user obj', sessionUser)

    const [showModal, setShowModal] = useState(false)

useEffect(() => {
    dispatch(spotsActions.getAllSpots()).then(() => setIsLoaded(true))
    dispatch(reviewActions.getReviews(spotId))
    dispatch(getAllUsers())
}, [dispatch])

if (!isLoaded) return null

const handleDelete = (reviewId) => {

    dispatch(reviewActions.getDeleteReviews(parseInt(reviewId)))
}
const handleDeleteSpot = (spotId) => {
    history.push('/owned-spots')
    return dispatch(spotsActions.getDeleteSpots(spotId))
}
const onEditSpotClick = (e) => {
    e.preventDefault();
    setShowModal(true);
};
function getRandomUser(max) {
    return Math.floor(Math.random() * max)
}
if (!spots) return null

    return ( isLoaded && (



        <div className='wrapper-container'>


        <div className='spotdetails-container'>
            <div className='spotdetailscontainer2'>
            <div className='spotdetails-name'>{spots.name} {''}
            <br>
            </br>
            <div className='review-details'><i className='topstar fa-solid fa-star'></i>
            <div className='avg-rating'>
            {spots.avgRating}
            </div>
            <div className='reviews-count'>
                {''}
            {plswork.length} {'reviews'}</div>
            </div>
                <div className='super-host'><i className='fa-solid fa-medal'></i>Superhost</div>
            <div className='city-state'> {spots.city}, {spots.state}</div>
            <div className='delete-and-edit-location'>


                {sessionUser && (

                    <button className='edit-spot' onClick={onEditSpotClick} type='submit'>
                    Edit Spot
                </button>
                    )}
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                        <EditSpots showModal={showModal} setShowModal={setShowModal}/>

                        </Modal>

                            )}
                            {sessionUser && (

                                <button className='delete-spot-button' onClick={() => handleDeleteSpot(spotId)}>Delete Spot</button>
                                )}
                        </div>
            </div>
            <div className='image-container'>
            <img className='spotdetails-image' src={spots.previewImage} />
            </div>
        <div className='spotdetails-container'>
            {/* <div className='hosted-by'>Home hosted by {spots.ownerId}</div> */}

            <div className='home-hosted'>Home hosted by a Superhost {users?.firstName} </div>
            <div className='house-count'>{'2-4 guests'} {'•'} {'2 bedrooms'} {'•'} {'2 beds'} {'•'} {'3 baths'}</div>
                </div>
                <div className='symbols-container'>

            <div className='symbol-info-container'>
                <div className='great-parking'>
            Great parking
                </div>
            <div className='parking-size'>
            <i className="fa-solid fa-square-parking"></i>
            <div className='location-info-container'>
                <div className='location-excellent'>
                    Excellent location

                </div>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='trev-container'>

            <div className='trev-cover'>
                trev
            </div>
            <div className='cover-trev'>
                cover
            </div>
            <div className='protection'>
            Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
            </div>
            </div>
            </div>
                </div>
                <div className='the-space-container'>
                    The space {'•'}  {`$${spots.price} night`}
                </div>
                <div className='check-in'>
                    Check in time starts at 4:00 pm and lasts till 8:00 pm
                </div>
            <div className='spotdetails-description'>{spots.description}


            </div>
            <div className='what-this-offers'>
                What this place offers
            </div>
            <div className='amenity-grid-container'>
                <div className='amenity-grid'>
                    <div className='amenities'>

                    <div className='wifi'>
                <i className="fa-solid fa-wifi"> </i>
                      {''}  Wifi
                    </div>
                    <div className='kitchen'>
                    <i className="fa-solid fa-kitchen-set"></i>
                        {''}  Kitchen
                    </div>
                    <div className='long-stays'>
                    <i className="fa-regular fa-calendar"></i>
                    {''} Long stays
                    </div>
                    <div className='fridge'>
                        <i className="fa-solid fa-bowl-food"></i>
                        {''}  Refrigerator
                    </div>
                    <div className='free-parking'>
                    <i className="fa-solid fa-car-side"></i>
                    {''}  Free parking
                    </div>
                    <div className='heating'>
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                    {''} Heat
                    </div>
                    <div className='cooling'>
                    <i className="fa-solid fa-temperature-arrow-down"></i>
                    {''}  A/C
                    </div>
                    <div className='tv'>
                        <i className="fa-solid fa-tv"></i>
                        {''}  Tv
                    </div>
                    <div className='smoking'>
                    <i className="fa-solid fa-joint"></i>
                    {''}  Smoking
                    </div>
                    <div className='coffee-maker'>
                        <i className="fa-solid fa-mug-hot"></i>
                        {''}   Coffee maker
                    </div>
                    <div className='haunted'>
                    <i className="fa-solid fa-ghost"></i>
                    {''}{''} Haunted
                    </div>
                    <div className='charging-station'>
                    <i className="fa-solid fa-charging-station"></i>
                    {''} Charging station
                    </div>

                </div>

                </div>
            </div>
            <div className='spotdetails-address'>
            {/* <div className='edit-spots'>
                {sessionUser && (

                    <button className='edit-spot' onClick={onEditSpotClick} type='submit'>
                    Edit Spot
                </button>
                    )}
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                        <EditSpots showModal={showModal} setShowModal={setShowModal}/>

                        </Modal>
                        )}
            </div> */}
           <div className='stardetails-rating'>
            <i className=' star fa-solid fa-star'></i>
           {''} {spots.avgRating}
            </div>

           <div className='length-reviews'><div className='dot'>{'•'}</div>{review.length} reviews</div>
            </div>
            </div>
        </div>
           </div>
            <div className='create-review-location'>
            <button className='create-review-button'>
        <Link to={`/spots/${spots.id}/create-reviews`}>Create Review</Link>
            </button>
            </div>
        <div className="spotDetailReviews">
        { plswork.map((review, i) => (
            <>
            <div className='reviews-grid'>
            <div className='grid'>

        <div className='detailscreate-review' key={review.id} review={review}>Anonymous User{' '}{getRandomUser(200)}: {''}
         <div className='actual-review'>
            <div className='reviews-stars-location'>
            <i className=' starss fa-solid fa-star'></i>
         {review.stars}
         {' ' }{review.review}
            </div>
            </div>
         </div>
            </div>
         </div>
        <div className='detailscreate-review'>
        <div className='delete-review-location'>

        <button className='delete-review-button' onClick={() => handleDelete(review.id)}>Delete Review</button>
        </div>
        </div>
        </>

        ))}
            {/* <button className='delete-spot-button' onClick={() => handleDeleteSpot(spotId)}>Delete Spot</button> */}


      </div>
        </div>



)

    )
}





export default SpotDetails
