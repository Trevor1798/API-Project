import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/SignupForm";
import * as sessionActions from "./store/session";
import * as spotsActions from './store/spots.js'
import Navigation from "./components/Navigation";
import AllSpots from "./components/Spots";
import CreateSpot from './components/CreateSpots/CreateSpot.js'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(spotsActions.getAllSpots()).then(() => setIsLoaded(true))
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
          <AllSpots/>
          <CreateSpot/>
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
            <Route exact path='/spots-create'>
              <CreateSpot />
            </Route>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
