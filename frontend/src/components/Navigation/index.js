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
      <li>

        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
