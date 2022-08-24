import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import CreateSpot from '../CreateSpots/CreateSpot';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      {/* <NavLink to='/spots-create'>Become a Host!</NavLink> */}

      <ProfileButton user={sessionUser} />
      </>
      );
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
