

import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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

  return (

      <div className='user-container'>

      <button className='open-menu' onClick={openMenu}>
        <i className="fa-solid fa-bars"/>
        <i className="fas fa-user-cirle fa-2xl"/>
      </button>
      {showMenu && (
        <div className="profile-dropdown-container">
          <div className="profile-dropdown">
          <li className="profile-name">Hello, {user.username}</li>
          <div className="profile-spots"
               onClick={() => <NavLink to='/spots/owned-spots'/>}>My Spots</div>
          <div className="profile-host"
               onClick={() => <NavLink to='spots/spots-create'/>}>Become a Host</div>

            <button className="logout" onClick={logout}>Log Out</button>
        </div>
        </div>
      )}

      </div>
  );
}

export default ProfileButton;
