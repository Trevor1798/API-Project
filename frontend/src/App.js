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
          <Route  exact path='/spots/:spotId'>
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
              <OwnerSpots/>
            </Route>
            <Route exact path='/spots/:spotId/create-reviews'>
              <CreateReviewForm/>
            </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
