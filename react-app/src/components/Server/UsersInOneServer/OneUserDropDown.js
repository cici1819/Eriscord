import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom';
import eriscord_clear_logo from '../../../img/favicon_clear_eriscord_192x192.png';
// import * as sessionActions from '../../store/session';
import './UsersInOneServer.css';

function OneUserInfo({ user }) {
    const dispatch = useDispatch();
    const [showUser, setShowUser] = useState(false);
    const history = useHistory();

    const openUser = () => {
        if (showUser) return;
        setShowUser(true);
    };

    useEffect(() => {
        if (!showUser) return;

        const closeUser = () => {
            setShowUser(false);
        };

        document.addEventListener('click', closeUser);

        return () => document.removeEventListener("click", closeUser);
    }, [showUser]);

  
    return (
        <div className='single-member-container' key={user?.id} onClick={openUser} >
            <img src={eriscord_clear_logo} id="logo-img" style={{ backgroundColor: user?.color }} alt="home-img" />
            <div className='review-name'>{user?.username}</div>
            {showUser && (
                <div className="single-member-dropdown-container">
                    <div className="user-logo2">
                        <div className="card-color2" style={{ backgroundColor: user?.color }}>

                        </div>
                        <img src={eriscord_clear_logo} className="d-logo-img" style={{ backgroundColor: user?.color }} alt="home-img" />
                    </div>

                    <div className="s-user-profile">
                        <div className="u-s-name">{user?.username}</div>
                        <div>

                        </div>

                        <div className="u-s-right-bar">
                            {/* < SendDirectMsg rightSideBar={true} /> */}
                            <span>
                                Message @{user?.username}
                            </span>
                        </div>
                    </div>

                </div>
            )}
        </div>

    );
}

export default OneUserInfo;
