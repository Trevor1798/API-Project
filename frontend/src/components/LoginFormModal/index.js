// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../..store/session'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(false)
  const [singup, setSignup] = useState(false)


  const onLoginClick = (e) =>{
    e.preventDefault()
    setLogin(true)
  }

  const onSignupClick = (e) => {
    e.preventDefault()
    setSignup(true)
  }

  const demoUserClick = (e) => {
    e.preventDefault()
    return dispatchEvent(sessionActions.login({credential: 'Musk1', password: 'password2'}))
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
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
