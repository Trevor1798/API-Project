import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createNewBooking } from "../../store/booking";
import { getBookingsBySpotId } from "../../store/booking";
import "./CreateBooking.css";

const CreateBooking = ({
  setStartDate,
  setEndDate,
  todayDate,
  startDate,
  endDate,
}) => {
  const [errors, setErrors] = useState([]);
  const { spotId } = useParams();

  const spots = useSelector((state) => state.spots);

  const spot = spots[spotId];

  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const bookings = useSelector((state) => (Object.values(state.bookings)));

  const startDateNum = new Date(startDate) - 0;
  const endDateNum = new Date(endDate) - 0;

  const handleValidation = () => {
    let errors = [];
    bookings?.map((booking) => {
      let bookingStart = new Date(booking?.startDate) - 0;
      let bookingEnd = new Date(booking?.endDate) - 0;

      if (startDateNum >= endDateNum) {
        errors.push("Checkout date cannot be the same as or before Check-in");
      }

      if (
        startDateNum === bookingStart ||
        startDateNum === bookingEnd ||
        endDateNum === bookingStart ||
        endDateNum === bookingEnd
      ) {
        errors.push("Chosen dates conflicts with an existing booking");
      }
      if (startDateNum > bookingStart && startDateNum < bookingEnd) {
        errors.push("Chosen dates conflicts with an existing booking");
      }
      if (
        startDateNum < bookingStart &&
        endDateNum > bookingStart &&
        endDateNum < bookingEnd
      ) {
        errors.push("Chosen dates conflict with an existing booking");
      }
      if (startDateNum < bookingStart && endDateNum > bookingEnd) {
        errors.push("Chosen dates conflcit with an existing booking");
      }

      return setErrors(errors);
    });
  };
  useEffect(() => {
    dispatch(getBookingsBySpotId(spotId));
    handleValidation();
  }, [startDateNum, endDateNum]);

  let errorsli;

  if (errors.length > 0) {
    errorsli = (
      <div className="createBookingError">
        {errors?.map((error, i) => {
          <div className="errorMessageContainer" key={i}>
            <i className="fa-solid fa-exclamation exclamation-point"></i>
            <div className="errorMessage">{error}</div>
          </div>;
        })}
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      startDate,
      endDate,
    };

    if (spot.ownerId === sessionUser.id) {
      let errors = [];
      errors.push("User cannot book their own spot");
      setErrors(errors);
    }
    console.log('boooking idddddd', bookings?.id)
    if (errors.length === 0 && spot?.ownerId !== sessionUser?.id) {
      dispatch(createNewBooking(spotId, data)).then((res) =>  history.push(`/confirmed/${spotId}/${res.createBooking.id}`))
    }
  };

  return (
    <div className="CreateBookingFormOutside">
      <div className="CreateBookingFormContainer">
        <form className="CreateBookingform" onSubmit={handleSubmit}>
          <div className="CreateBookingErrorContainer">{errorsli}</div>

          <div className="CreateBookingDiv">
            <div className="CreateBookingInputContainer">
              <div className="createSpotCheckin">CHECK-IN</div>
              <input
                className="CreateBookingInputCheckin"
                type="date"
                // placeholder="mm/dd/yyyy"
                // value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                min={todayDate}
                max={"9999-12-31"}
              />
            </div>

            <div className="CreateBookingInputContainer">
              <div className="createSpotCheckout">CHECKOUT</div>
              <input
                className="CreateBookingInputCheckout"
                type="date"
                // placeholder="mm/dd/yyyy"
                // value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                min={todayDate}
                max="9999-12-31"
              />
            </div>
          </div>
          {/* <div>
            <select name="pets" className="CreateBookingGuest">
              <option className='CreateBookingGuestDropdown' value="">Guests</option>
              <option className='CreateBookingGuestDropdown' value="dog">1</option>
              <option className='CreateBookingGuestDropdown' value="cat">2</option>
              <option className='CreateBookingGuestDropdown' value="hamster">3</option>
              <option className='CreateBookingGuestDropdown' value="parrot">4</option>
              <option className='CreateBookingGuestDropdown' value="spider">5</option>
              <option className='CreateBookingGuestDropdown' value="goldfish">6</option>
              </select>
            </div> */}

          <div className="CreateBookingGuest">
            <div className="CreateBookingGuestOne">GUESTS</div>
            <div className="CreateBookingGuestTwo">2 guests</div>
          </div>

          <div className="CreateBookingContainer">
            <input
              className="CreateBookingSubmit"
              type="Submit"
              defaultValue="Reserve"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBooking;
