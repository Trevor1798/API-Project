// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session'
import {useDispatch} from 'react-redux'
import SignupFormPage from '../SignupFormPage';

function LoginFormModal() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)


  const onLoginClick = (e) =>{
    e.preventDefault()
    e.stopPropagation()

    setLogin(true)
  }

  const onSignupClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSignup(true)
  }

  const demoUserClick = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({credential: 'Musk1', password: 'password2'}))
  }
  return (
    <>
    <div onClick={e => e.stopPropagation()}>
      <div className='profile-menu'>
        <ul>
          <li><button onClick={onLoginClick}>Log In</button></li>
          <li><button onClick={onSignupClick}>Sign Up</button></li>
          <li><button onClick={demoUserClick}>Demo User</button></li>
        </ul>
      </div>
    </div>

      {login && (
        <Modal className='login-modal' onClose={() => setLogin(false)}>
          <div className='welcome-to-airbnb'>Welcome to AirBnB!</div>
          <div className='login-or-signup'>Log in or sign up</div>
          <LoginForm />
        </Modal>
      )}
      {signup && (
        <Modal className='signup-modal' onClose={() => setSignup(false)}>
          <div className='signup-welcome-to-airbnb'>Welcome to AirBnb</div>
          <div className='signup-Sign up'>Sign up</div>
          <SignupFormPage/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
