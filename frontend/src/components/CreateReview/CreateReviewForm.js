import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as reviewActions from "../../store/reviews";
function CreateReviewForm() {
  let dispatch = useDispatch();
  let history = useHistory();
  let { spotId } = useParams();
  const [errors, setErrors] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const data = { review: reviewInput, rating: rating };
    dispatch(reviewActions.getCreateReviews(spotId, data));
  }, [dispatch, spotId]);
  const handleButtonClick = (e) => {
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  };

  return (
    <div>
      <form className="review-form" onSubmit={handleButtonClick}>
        <div className="title">Leave a review</div>
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
        <label>
          <input
            className="review-input"
            type="text"
            value={reviewInput}
            onChange={(e) => setReviewInput(e.target.value)}
          />
        </label>
        <label>
          <input
            className="review-rating"
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button className="set-review-button" type="submit">
          Submit Review
        </button>
        <button
          className="cancel-button"
          type="submit"
          onClick={() => history.push(`/spots/${spotId}`)}
        >
          Cancel Review
        </button>
      </form>
    </div>
  );
}

export default CreateReviewForm;
