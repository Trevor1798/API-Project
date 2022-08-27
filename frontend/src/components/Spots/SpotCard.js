import { Link } from "react-router-dom";
import '../ALLCSS/Spotcard.css'
// import '../ALLCSS/SpotDetails.css'
// import '../ALLCSS/SpotIndex.css'


 const SpotCard = ({spots}) => {
    console.log({spots})
    return (
        <>

        <Link className='card-container' to={`/spots/${spots.id}`}>
            <div className='card-container'>
                <img className="spot-img" src={spots.previewImage} alt='previewImage' />
                <div className="spot-description">
                <div className="bottom-descriptions">
                <div className='location'>{spots.city}, {spots.state}
                </div>
                <div className='spot-price'>{`$${spots.price} night`}
                </div>
        <div className='bottom-description'>
                <div className='star-rating'>
                <i className="fa-solid fa-star"></i>
                <div className="spotRating">{spots.avgRating}</div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </Link>
        </>

    )
}

export default SpotCard
