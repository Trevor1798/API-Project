

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormPage from "../SignupFormPage/SignupForm";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  let history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
// console.log(sessionUser.user.firstName)
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {

      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  if (!sessionUser) {
    return <div className="login-modal">
      <LoginFormModal/>
      Log In
    <div className='signup-modal'>
      <SignupFormPage/>
    </div>
    </div>

  }
  return (
    <>
    <div className="test-route">

        {/* <NavLink to='/spots/owned-spots'></NavLink>
        <NavLink to='/spots/spots-create'>Become a Host</NavLink> */}
      <div className='user-container'>
        <div className="user-profile-menu">
      <button className='open-menu' onClick={openMenu}>
        <i className="fa-solid fa-bars"/>
        <i className="fas fa-user-circle fa-2xl"/>
      </button>
      {showMenu && (
        <div className="profile-dropdown-container">
          <div className="profile-dropdown">

          <div className="profile-name">Hello, {user.firstName || sessionUser.user.firstName}
           <Link to='/'></Link></div>
          <div className="profile-spots">
          <Link to='/owned-spots'>My Spots</Link></div>
          {/* <div className="profile-host">
              <Link to='/spots-create'>Become a Host</Link></div> */}

            <button className="logout" onClick={logout}>Log Out</button>
        </div>
        </div>
      )}

      </div>
      </div>
      </div>
      </>
  );
}

export default ProfileButton;
