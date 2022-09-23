import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviews";
import * as spotsActions from '../../store/spots'
import '../ALLCSS/CreateReview.css'

function CreateReviewForm({showReview, setShowReview}) {
  let dispatch = useDispatch();
  let history = useHistory();
  let { spotId } = useParams();
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const user = useSelector(state => state.session.user)
  const reviewObj = useSelector(state => state.reviews)
  const reviews = Object.values(reviewObj)
  const alreadyReviewed = reviews.find((review) => user.id === review.userId)
  const spotsObj = useSelector(state => state.spots)
const spots = Object.values(spotsObj)
console.log('watch this pls=======', alreadyReviewed)
  const handleButtonClick = (e) => {
    e.preventDefault();
    const data = {
      review,
      stars,
      spotId
     };

     if (alreadyReviewed) {
      setErrors({errors: 'User already has a review'})
     }
     if (!review || review.length < 5 || review.length > 200) {
      setErrors({errors: 'Review must be between 5 and 200 characters'})

     }
     if (stars < 1 || stars > 5 ) {
      setErrors({errors: 'Rating must be between 1 and 5'})
     }
      if (!alreadyReviewed) {
        dispatch(reviewActions.getCreateReviews(data)).then(() => dispatch(reviewActions.getReviews(spotId)))
        .then(() => dispatch(spotsActions.getAllSpots()))
        // setShowReview(false)
      }
    //  dispatch(reviewActions.getCreateReviews(data)).then(() => history.push(`/spots/${spotId}`));
  };

  return (
    <div className='review-container-form'>
      <form className="review-form" onSubmit={handleButtonClick}>
        <div className="title">Leave a review</div>
        <ul>
          {Object.values(errors).map((error, i) => (
            <li className="create-review-errors" key={i}>{error}</li>
          ))}
        </ul>
        <div className="reviews-forms-location">

        <label className="reviewss">
          <input
            className="review-input"
            type="text"
            value={review}
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)}
            />
        </label>
        <label className="ratings">
          <input
            className="review-rating"
            type="text"
            placeholder="rating"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            />
        </label>
            </div>
        <div className="buttonss">

        <button className="set-review-button" type="submit">
          Submit Review
        </button>
        <button
          className="cancel-button"
          type="submit"
          onClick={() => setShowReview(false)}
          >
          Cancel Review
        </button>
          </div>
      </form>
    </div>
  );
}

export default CreateReviewForm;
