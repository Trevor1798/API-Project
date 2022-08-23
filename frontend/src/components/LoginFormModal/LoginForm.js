import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'
import '../CSS/LoginForm.css'
function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

    if (sessionUser) {
      return <Redirect to='/' />
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='modal-header'>Log in or Sign up</div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
          <div className='login-welcome'>Welcome to AirBnb</div>
      <div className='login-form-input'>
      <label>

        <input className="login-username"
          type="text"
          value={credential}
          placeholder='Username or Email'
          onChange={(e) => setCredential(e.target.value)}
          required
          />
      </label>
      <label>
        <input className="login-password"
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </label>
      <button className="login-button" type="submit">Continue</button>
          </div>
    </form>
  );
}

export default LoginForm;
