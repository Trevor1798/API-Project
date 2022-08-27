import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviews";
function CreateReviewForm() {
  let dispatch = useDispatch();
  let history = useHistory();
  let { spotId } = useParams();
  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const user = useSelector(state => state.session.user)

  const handleButtonClick = (e) => {
    e.preventDefault();
    const data = {
      userId: user.id,
      spotId,
      review,
      stars
     };
    dispatch(reviewActions.getCreateReviews(data));
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
            value={review}
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <label>
          <input
            className="review-rating"
            type="text"
            placeholder="rating"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
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
