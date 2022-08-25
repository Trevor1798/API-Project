import {useEffect} from 'react'
import {getDeleteSpots} from '../../store/spots.js'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import SpotCard from "../Spots/SpotCard.js";
import * as sessionActions from '../../store/session'


function OwnerSpots () {
    let {spotId} = useParams()
    let dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const spots = useSelector((state) => Object.values(state.spots))
    const ownedSpots = spots.filter(() => spots.ownerId == user.id)
    console.log('this is user', user)
    console.log('spots', spots)
    console.log('owned',ownedSpots)
    const history = useHistory()
console.log('id', spots.ownerId)


    const onClick = (spotId) => {
        dispatch(getDeleteSpots(spotId))


    }

    return (

        <div>

            {ownedSpots.map((spots, i) => {
                <>

                        <SpotCard key={spots.id} spots={spots} />

                // <div key={i}>

                <div>{spots.name}</div>
                <div>{spots.avgRating}</div>
                <div>{spots.city}, {spots.state}, {spots.country}</div>
                </div>

                </>



})}
        <div className='spots-container'>
        <button className='delete-spot' onClick={() => onClick(spots.id)}>
            Delete Spot
        </button>
        </div>
            </div>

    )

}





export default OwnerSpots
