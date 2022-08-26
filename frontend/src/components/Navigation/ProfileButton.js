

import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
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
    <>

      <button className='open-menu' onClick={openMenu}>
        <i className="fa-solid fa-dumpster-fire"/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Hello, {user.username}</li>
          <li>{user.email}</li>
            <li>
              <NavLink to='/owned-spots'>My Spots</NavLink>
            </li>
            <li>
              <NavLink to='/spots-create'>Become a Host</NavLink>
            </li>
            <button onClick={logout}>Log Out</button>

        </ul>
      )}
    </>
  );
}

export default ProfileButton;
