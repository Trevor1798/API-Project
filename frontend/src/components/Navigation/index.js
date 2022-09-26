import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import SignupFormPage from "../SignupFormPage/SignupForm";
import {Modal} from '../../context/Modal.js'
import CreateSpots from "../CreateSpots/CreateSpot";
import trevbnb from '../ALLCSS/trebnb2.png'

function Navigation({ isLoaded }) {
  // const [showModal, setShowModal] = useState(false)
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
   let sessionLinks;
console.log({sessionUser})
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser || sessionUser.user} />;
  } else {
    sessionLinks = (
      <>

        <LoginFormModal/>

      </>
    );
  }

  return (
    <ul className='container-top'>
      {isLoaded && sessionLinks}
      <div className="navBar">

      <li className="container">

        <NavLink exact to="/">
          <img className="airbnb-logo" src={trevbnb}
          alt='AirBnb-logo.png'
          />
        </NavLink>

        {sessionUser && (

          <div className="profile-host"
          onClick={() => history.push('/spots-create')}>Become a Host</div>
          )}


            </li>
            </div>

            </ul>
  );
}

export default Navigation;
