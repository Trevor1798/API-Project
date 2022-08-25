import {useEffect} from 'react'
import * as spotsActions from '../../store/spots.js'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

function OwnerSpots () {
    let dispatch = useDispatch()
    const spots = useSelector((state) => Object.values(state.spots))


    useEffect(() => {
        dispatch(spotsActions.getOwnedSpots())
    }, [dispatch])

    return (
        <div>
        <button className='delete-spot' onClick={() => dispatch(spotsActions.getDeleteSpots(spots.id))}>
            Delete Spot
        </button>
        </div>
    )

}





export default OwnerSpots
