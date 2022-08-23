import { Link } from "react-router-dom";
import './spots.css'

 const SpotCard = ({spots}) => {
    return (
        <Link className='cardContainer' to={`/spots/${spots.id}`}>
            <div className='cardContainers'>
                <img className="spotImg" src={spots.previewImage} alt='previewImage' />
                <div className='location'>{spots.city}, {spots.state}</div>
                <div className="spotDescription"></div>
                <div className='spotPrice'>{`$${spots.price} night`}</div>
                <div className="spotRating">{spots.avgRating}</div>
            </div>
        </Link>

    )
}

export default SpotCard
