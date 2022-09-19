import * as spotsActions from "../../store/spots.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import SpotCard from "../Spots/SpotCard.js";
import { useEffect, useState } from "react";
import "../ALLCSS/Spotcard.css";
import "../ALLCSS/EditSpots.css";
import { Modal } from "../../context/Modal.js";
import EditSpots from "./EditSpots.js";
import * as reviewActions from "../../store/reviews";



function OwnerSpots({isLoaded}) {

  let dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => Object.values(state.spots));

  const ownedSpots = spot.filter((spot) => spot.ownerId === sessionUser.user.id);

  const [showModal, setShowModal] = useState(false);
  // console.log({ sessionUser, ownedSpots, spot });


  const history = useHistory();

  useEffect(() => {
    dispatch(spotsActions.getOwnedSpots());
    // dispatch(reviewActions.getReviews(spotId));
  }, [dispatch]);

  const handleDelete = (spotId) => {
    dispatch(spotsActions.getDeleteSpots(spotId));
    history.push("/owned-spots");
  };

  const onEditSpotClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (

    <>

      <div className="allSpots">
      <div className="spotsContainer">
      <div className="spots-grid">
      {ownedSpots.map((spots, i) => (
        <div>
                <SpotCard key={spots.id} spots={spots} />
                <button
                  className="delete-spot"
                  onClick={() => handleDelete(spots.id)}
                  >
                  Delete Spot
                </button>
                <div>
                  <div>
                    <button className="edit-spot" onClick={onEditSpotClick}>
                      Edit Spot
                    </button>{" "}
                  </div>
                  {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                      <EditSpots/>
                    </Modal>
                  )}
                </div>
              </div>
            ))}
            </div>
            </div>
            </div>

            </>

            //   <div key={spots.id}>
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
          }

          export default OwnerSpots;
