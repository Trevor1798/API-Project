import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import '../ALLCSS/SignupForm.css'
// heroku ps:scale web=1



function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <ul className="signup-errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="modal-header">Log in or Sign Up</div>
      <div className='signup-form-input'>
        <div className='signup-welcome'>Welcome to trevBnb</div>
      <label>

        <input className='signup-email'
          type="text"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </label>
      <label>

        <input className='signup-username'
          type="text"
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          required
          />
      </label>
      <label>

        <input className='signup-firstname'
        type='text'
        value={firstName}
        placeholder='First name'
        onChange={(e) => setFirstName(e.target.value) }
        required
        />
      </label>
      <label>
        <input className='signup-lastname'
        type='text'
        value={lastName}
        placeholder='Last name'
        onChange={(e) => setLastName(e.target.value)}
        required
        />
      </label>
      <label>
        <input className='signup-password'
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </label>
      <label>
        <input className='confirm-password'
          type="password"
          value={confirmPassword}
          placeholder='Confirm password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          />
      </label>
      <button className='signup-button' type="submit">Continue</button>
          </div>
    </form>
  );
}

export default SignupFormPage;
