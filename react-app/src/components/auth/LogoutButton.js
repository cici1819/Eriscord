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
    <div className='logout-user-container'>

      <div className='logout-user-left'>
        <img src={eriscord_clear_logo} className="other-user-icon" style={{ backgroundColor: current.color }}></img>
        <div className='logout-user-name-id'>
          <div className='logout-user-name'>{current.username}</div>
          <div className='logout-user-id'># {current.id}</div>
        </div>
      </div>
      <div className='logout-user-right'>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
};

export default LogoutButton;
