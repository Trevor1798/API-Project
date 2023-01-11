import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers } from '../../store/user'
import { getReviewsByCurrentUser } from '../../store/reviews'
import './UserProfile.css'



const UserProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {spotId} = useParams()
    const {bookingId} = useParams()
    const {userId} = useParams()


    const reviews = useSelector(state => Object.values(state.reviews))
    const spots = useSelector(state => state.spots)
    const bookings = useSelector(state => state.bookings)
    const users = useSelector(state => state.users)


    const spot = spots[spotId]
    const currentBooked = bookings[bookingId]
    const currentUser = users[userId]
    const spotOwner = users[spot?.ownerId]

    useEffect(() => {
        dispatch(getReviewsByCurrentUser())
        dispatch(getAllUsers())
    },[dispatch])


    return (
        <div className="account-page-container">
      <div className="account-page-inner-container">

        <div className="account-page-left-side-container">
          <div className="account-page-user-info-container">

            <div className="account-page-user-info-one">
              <img className='account-page-user-info-pic' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt='Owner Icon'></img>
              <div className="account-page-user-info-name">{`${currentUser?.firstName} ${currentUser?.lastName}`}</div>
            </div>

            <div className="account-page-user-info-two">
              <i class="fa-regular fa-star fa-xl account-page-star"></i>
              <div className="account-page-user-info-review">{`${reviews?.length} reviews`}</div>
            </div>

            <div className="account-page-user-info-three">
              <i class="fa-regular fa-circle-check fa-xl account-page-check"></i>
              <div className="account-page-user-info-identity">Identity Verified</div>
            </div>

            <div className="account-page-user-info-four"></div>

            <div className="account-page-user-info-five">

              <div className="account-page-user-info-bottom-header">{`${currentUser?.firstName} confirmed`}</div>

              <div className="account-page-user-info-bottom">
                <i className="fa-solid fa-check fa-lg account-page-bottom-check"></i>
                <div className="account-page-user-info-detail">Identity</div>
              </div>

              <div className="account-page-user-info-bottom">
                <i className="fa-solid fa-check fa-lg account-page-bottom-check"></i>
                <div className="account-page-user-info-detail">Phone Number</div>

              </div>

            </div>

          </div>
        </div>

        <div className="account-page-right-side-container">

          <div className="account-page-right-side-top">
            <div className="account-page-right-side-header">{`Hi, I'm ${currentUser?.firstName}`}</div>
            <div className="account-page-right-side-text">Joined in 2022</div>
            {/* <div className="account-page-right-side-etc">Random text</div> */}
          </div>

          <div className="account-page-right-side-bottom">
            <i className="fa-solid fa-star account-page-star-bottom"></i>
            <div className="account-page-right-bottom-review">{`${reviews?.length} reviews`}</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default UserProfile;


