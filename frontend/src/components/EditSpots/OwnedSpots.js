import * as spotsActions from "../../store/spots.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams, Redirect } from "react-router-dom";
import SpotCard from "../Spots/SpotCard.js";
import { useEffect, useState } from "react";
import "../ALLCSS/Spotcard.css";
import "../ALLCSS/EditSpots.css";
import { Modal } from "../../context/Modal.js";
import EditSpots from "./EditSpots.js";
import * as reviewActions from "../../store/reviews";



function OwnerSpots({isLoaded, setIsLoaded}) {

  let dispatch = useDispatch();
  const sessionUser = useSelector((state) =>(state.session.user));
  const spot = useSelector((state) => Object.values(state.spots));

  const ownedSpots = spot.filter((spot) => spot.ownerId == sessionUser.user.id);
  // const [isLoaded, setIsLoaded] = useState(false)
  console.log('spots ', spot );
  console.log('ownerSpots', ownedSpots)
  // const history = useHistory();

  useEffect(() => {
    dispatch(spotsActions.getOwnedSpots())
    dispatch(spotsActions.getAllSpots()).then(() => setIsLoaded(true))
    // dispatch(reviewActions.getReviews(spotId));
  }, [dispatch]);

  if (!ownedSpots) return null
  if (!isLoaded) return null
  // if (!sessionUser) {

  //  return <Redirect exact to='/'><div>{window.alert('You must be logged in to view Owner Spots')}</div></Redirect>
  // }
  return (isLoaded && (
        <div className="allSpots">
        <div className="spotsContainer">
        <div className="spots-grid">
        {ownedSpots?.map((spots, i) => (
          <div>
                <SpotCard key={spots.id } spots={spots} />
            </div>

            ))}
            </div>
            </div>
            </div>
          ))
        }
            {/* //   <div key={spots.id}>
            //     <div>
            //       {spots.address}</div>
            //     <div>{spots.name}</div>
            //     <div>{spots.avgRating}</div>
            //     <Link to={`/spots/${spots.id}/edit`}>Edit spot</Link>
            //     <div>
            //       {spots.city}, {spots.state}, {spots.country}

            //     </div>
            //     <div>{`$${spots.price}`}</div>
            //     <div>{spots.previewImage}</div>
            // ))}
            // <div className="spots-container"></div>
            );
          } */}

          export default OwnerSpots;
