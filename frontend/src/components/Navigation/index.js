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

function Navigation({ isLoaded }){
  let history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  sessionLinks = (
    <div className="user-session">
      <ProfileButton user={sessionUser} />
    </div>
  );

  return (
    <div className='navContainer'>
      <div className='navBar'>
        <NavLink exact to="/">
          <img className='airbnb-logo' src={trevbnb} alt=''></img>
        </NavLink>
        <div className='navBarRightSide'>
          <div className='navBarButtons'>
          {sessionUser && (

            <div className='becomeAHost'onClick={() => history.push('/spots-create')}>Become a Host</div>
)}

            <div className='navBarLoaded'>{isLoaded && sessionLinks}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
