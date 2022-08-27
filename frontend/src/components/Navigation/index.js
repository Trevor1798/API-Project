import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  let sessionLinks;
console.log({sessionUser})
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser.user} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />

      </>
    );
  }

  return (
    <ul>
      {isLoaded && sessionLinks}
      <li className="container">

        <NavLink exact to="/">
          <img className="airbnb-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
          alt='AirBnb-logo.png'
          />
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
