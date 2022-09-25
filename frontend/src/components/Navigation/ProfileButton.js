

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink, useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import * as sessionActions from '../../store/session';
import * as spotsActions from '../../store/spots.js'
import LoginFormModal from "../LoginFormModal";
import SignupFormPage from "../SignupFormPage/SignupForm";
import LoginForm from "../LoginFormModal/LoginForm";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  let history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const sessionUser = useSelector((state) => state.session.user);
// console.log(sessionUser.user.firstName)
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    // dispatch(spotsActions.getAllSpots())
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
    history.push('/')
  };

  const handleClick = (e) => {
    e.preventDefault()
    setLogin(true)
  }
  // if (!sessionUser) {

  // }
  return (

    <div className="test-route">

        {/* <NavLink to='/spots/owned-spots'></NavLink>
        <NavLink to='/spots/spots-create'>Become a Host</NavLink> */}
      <div className='user-container'>
        <div className="user-profile-menu">
        <button className='open-menu' onClick={openMenu}>
          <i className="fa-solid fa-bars"/>
          <i className="fas fa-user-circle fa-2xl"/>
        </button>
      {showMenu && sessionUser && (
        <div className="profile-dropdown-container">
          <div className="profile-dropdown">

          <div className="profile-name">Hello, {user.firstName || sessionUser.user.firstName}
           <Link to='/'></Link></div>
          <div className="profile-spots">
          <Link to='/owned-spots'>My Spots</Link></div>
          {/* <div className="profile-host">
              <Link to='/spots-create'>Become a Host</Link></div> */}

            <div className="logout" onClick={logout}>Log Out</div>
        </div>
        </div>
      )}
            </div>
        {/* )} */}
        </div>
        </div>
        
// </div>
  );
}

export default ProfileButton;
