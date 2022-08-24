// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session'
import {useDispatch} from 'react-redux'
import SignupFormPage from '../SignupFormPage/SignupForm';
import '../ALLCSS/LoginForm.css'
import CreateSpot from '../CreateSpots/CreateSpot';
import {Link} from 'react-router-dom'
function LoginFormModal() {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const [showModal, setShowModal] = useState(false)
  // const [host, setHost] = useState(false)

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
  const becomeHostClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowModal(true)
  }
   return (
    <>
    <div onClick={e => e.stopPropagation()}>
      <div className='become-host'>
        <Link className='become-host-button' onClick={becomeHostClick}>Become A Host</Link>
        {showModal && (
          <>
          <Modal onClose={() => setShowModal(false)} >
          <CreateSpot/>
          </Modal>
          </>
        )}

        </div>
      <div className='profile-menu'>
        <ul>
          <li><button onClick={onLoginClick}>Log In</button></li>
          <li><button onClick={onSignupClick}>Sign Up</button></li>
          <li><button onClick={demoUserClick}>Demo User</button></li>
        </ul>
        <div className='become-host'>
          {/* <button onClick={becomeHostClick}>Become a host!</button> */}
        </div>
      </div>
    </div>

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
      {/* {(
        <Modal className='become-host-modal' onClose={() => setHost(false)}>
          <CreateSpot/>
        </Modal>
      )} */}
    </>
  );
}

export default LoginFormModal;
