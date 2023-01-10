import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/SignupForm";
import * as sessionActions from "./store/session";
import * as spotsActions from './store/spots.js'
import Navigation from "./components/Navigation";
import AllSpots from "./components/Spots";
import CreateSpots from './components/CreateSpots/CreateSpot.js'
import SpotDetails from "./components/SpotDetails/Spotdetails";
import EditSpots from "./components/EditSpots/EditSpots";
import OwnerSpots from "./components/EditSpots/OwnedSpots";
import CreateReviewForm from './components/CreateReview/CreateReviewForm.js'
import CurrentBooking from './components/Bookings/CurrentBookings'
import BookingConfirmed from "./components/Bookings/BookingConfirmed";
import UserPastBookings from "./components/Bookings/UserPastBookings";
import UserBookings from "./components/Bookings/UserBookings";
import UserProfile from "./components/User/UserProfile";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const user = useSelector((state) => state.session.user.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(spotsActions.getAllSpots())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
          <AllSpots/>
          </Route>
          <Route  exact path='/spots/:spotId/:ownerId'>
            <SpotDetails/>
          </Route>
          <Route exact path='/spots/:spotId/edit'>
            <EditSpots/>
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
            </Route>
            <Route exact path='/spots-create'>
              <CreateSpots />
            </Route>
            <Route exact path='/owned-spots'>
              <OwnerSpots isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
            </Route>
            <Route exact path='/spots/:spotId/create-reviews'>
              <CreateReviewForm/>
            </Route>
             <Route path="/my-bookings/past">
            <UserPastBookings/>
          </Route>
          <Route path="/my-bookings">
            <UserBookings isLoaded={isLoaded} />
          </Route>
            <Route exact path='/confirmed/:spotId/:bookingId'>
              <BookingConfirmed/>
            </Route>
            <Route path="/users/account/:userId">
            <UserProfile/>
          </Route>
            <Route exact path='/current-bookings/:spotId'>
              <CurrentBooking/>
            </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
