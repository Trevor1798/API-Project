import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'



function SpotDetails() {
const {spotId} = useParams()
const spot= useSelector((state) => Object.values(state.spots))
const spots = spot.find((spots) => spots.id == spotId)
console.log('watch', spots)


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
        </div>
    )
}





export default SpotDetails
