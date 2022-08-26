import * as spotsActions from "../../store/spots.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import SpotCard from "../Spots/SpotCard.js";
import { useEffect } from "react";

function OwnerSpots() {
  // let {ownerId} = useParams()
  let dispatch = useDispatch();
  const user = useSelector((state) => state.session.user.user);

  const spots = useSelector((state) => Object.values(state.spots));
  const ownedSpots = spots.filter((spot) => spot.ownerId === user.id);

  console.log({ user, ownedSpots, spots });

  const history = useHistory();

  useEffect(() => {
    dispatch(spotsActions.getOwnedSpots());
  }, []);

  const handleDelete = (spotId) => {
    dispatch(spotsActions.getDeleteSpots(spotId));
  };
  if (!spots) {
    return null;
  }
  return (
    <div>
      {/* <SpotCard key={spots.id} spots={spots} /> */}
      {ownedSpots.map((spots, i) => (
        <div key={i}>
          {spots.address}
          <Link to={`/spots/${spots.id}/edit`}>Edit spot</Link>
          <div>{spots.name}</div>
          <div>{spots.avgRating}</div>
          <div>
            {spots.city}, {spots.state}, {spots.country}
          </div>
          <div>{`$${spots.price}`}</div>
          {spots.previewImage}
          <button
            className="delete-spot"
            onClick={() => handleDelete(spots.id)}>
            Delete Spot
          </button>
        </div>
      ))}
      <div className="spots-container"></div>
    </div>
  );
}

export default OwnerSpots;
