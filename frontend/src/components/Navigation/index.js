import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import CreateSpot from '../CreateSpots/CreateSpot';
import {Modal} from '../../context/Modal'
import {useState} from 'react'
import SignupFormPage from '../SignupFormPage/SignupForm';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
   const becomeHostClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowModal(true)
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
     </>
    )

  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
       
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
