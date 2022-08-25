import { Link } from "react-router-dom";
import '../ALLCSS/Spotcard.css'

 const SpotCard = ({spots}) => {
    return (
        <Link className='card-container' to={`/spots/${spots.id}`}>
            <div className='card-container'>
                <img className="spot-img" src={spots.previewImage} alt='previewImage' />
                <div className='location'>{spots.city}, {spots.state}</div>
                <div className='spot-price'>{`$${spots.price} night`}</div>
                </div>
                <div className="spot-description">
                <i className="fa-solid fa-star"></i>
                <div className="spotRating">{spots.avgRating}</div>
            </div>
        </Link>

    )
}

export default SpotCard
