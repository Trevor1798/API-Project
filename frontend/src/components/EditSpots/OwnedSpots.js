import * as spotsActions from "../../store/spots.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import SpotCard from "../Spots/SpotCard.js";
import { useEffect, useState } from "react";
import '../ALLCSS/Spotcard.css'
function OwnerSpots() {
  // let {ownerId} = useParams()
  let dispatch = useDispatch();
  const user = useSelector((state) => state.session.user.user);

  const spots = useSelector((state) => Object.values(state.spots));
  const ownedSpots = spots.filter((spot) => spot.ownerId == user.id);
  const [isLoaded, setIsLoaded] = useState(false)
  console.log({ user, ownedSpots, spots });

  const history = useHistory();

  useEffect(() => {
    dispatch(spotsActions.getOwnedSpots())

  }, [dispatch]);

  const handleDelete = (spotId) => {
    dispatch(spotsActions.getDeleteSpots(spotId));
  };
  if (!spots) {
    return null;
  }
  return (

    <div className="allSpots">
      <div className="spotsContainer">
        <div className="spots-grid">

      {ownedSpots.map((spots, i) => {
      // return <SpotCard key={spots.id} spots={spots}/>
        <div>
          <button
            className="delete-spot"
            onClick={() => handleDelete(spots.id)}>
            Delete Spot
          </button>

            <div key={spots.id}>
            <div>
              {spots.address}</div>
            <div>{spots.name}</div>
            <div>{spots.avgRating}</div>
            <Link to={`/spots/${spots.id}/edit`}>Edit spot</Link>
            <div>
              {spots.city}, {spots.state}, {spots.country}

            </div>
            <div>{`$${spots.price}`}</div>
            <div>{spots.previewImage}</div>

      <div className="spots-container"></div>
        </div>
      </div>
      })}
      </div>
      </div>
        </div>
      );
}

export default OwnerSpots;
