import {NavLink, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from '../../context/Modal'
import EditSpots from '../EditSpots/EditSpots.js'
import OwnerSpots from '../EditSpots/OwnedSpots'
import * as sessionUser from '../../store/spots'
function SpotDetails() {
const {spotId} = useParams()
const spot= useSelector((state) => Object.values(state.spots))
console.log('look', spot)
const spots = spot.find((spots) => spots.id == spotId)
console.log('watch', spots)
const [showModal, setShowModal] = useState(false)


const handleCloseModal = (e) => {
e.stopPropagation()
e.preventDefault()
 setShowModal(true)
}
// useEffect(() => {

// })

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
        <div className='edit-spot' onClick={e => e.stopPropagation()}>
            <NavLink to={`/spots/${spots.id}/edit`} className='edit-spot'>Edit Spot</NavLink>
        </div>
        </div>
    )
}





export default SpotDetails
