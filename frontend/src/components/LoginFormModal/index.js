// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect} from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session'
import {useDispatch} from 'react-redux'
import SignupFormPage from '../SignupFormPage/SignupForm';
import '../ALLCSS/LoginForm.css'

function LoginFormModal() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  // const [host, setHost] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const onLoginClick = (e) =>{
    e.preventDefault()

    setLogin(true)
    setSignup(false)
  }

  const onSignupClick = (e) => {
    e.preventDefault()

    setSignup(true)
  }

  const demoUserClick = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({credential: 'Musk1', password: 'password2'}))
  }
  useEffect(() => {
    // dispatch(spotsActions.getAllSpots())
    if (!showMenu) return;

    const closeMenu = () => {

      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

   return (
    <>
    <div className='test-route'>

      <div className='user-container'>
        <div className='user-profile-menu'>
            <button className='open-menu' onClick={openMenu}>
            <i className="fa-solid fa-bars"/>
          <i className="fas fa-user-circle fa-2xl"/>
            </button>
            {showMenu && (

              <div className='profile-dropdown-container'>
      <div className='profile-dropdown'>


        <div className='profile-login' onClick={onLoginClick}>Log In</div>
          <div className='profile-signup' onClick={onSignupClick}>Sign Up</div>
          <div className='profile-demouser' onClick={demoUserClick}>Demo User</div>
        </div>
      </div>
        )}
      {login && (
        <Modal className='login-modal' onClose={() => setLogin(false)}>
        <LoginForm />
        </Modal>
        )}
      {signup && (
        <Modal className='signup-modal' onClose={() => setSignup(false)}>
        <SignupFormPage/>
        </Modal>
        )}
      </div>
      </div>
      </div>

      </>

  );
}

export default LoginFormModal;
