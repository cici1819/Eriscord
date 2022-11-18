
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/session';
import './SecondDemo.css'


function SecondDemo() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credential = 'freya@aa.io'
    const password = 'password'

    return dispatch(login(credential, password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className='demo-user-login-button' type="submit">Second Demo User Login</button>
    </form>
  );
}

export default SecondDemo;
