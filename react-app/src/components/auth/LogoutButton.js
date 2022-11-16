import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import eriscord_clear_logo from '../../img/favicon_clear_eriscord_192x192.png';
import './LogoutButton.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  let current = useSelector(state => state.session.user)

  return (
    <div>

      <div className='logout-user-container'>
        <img src={eriscord_clear_logo} className="other-user-icon" style={{ backgroundColor: current.color }}></img>
        <div>
          <div>{current.username}</div>
          <div>{current.id}</div>
        </div>
      </div>
      <button onClick={onLogout}>Logout</button>

    </div>
  )
};

export default LogoutButton;
