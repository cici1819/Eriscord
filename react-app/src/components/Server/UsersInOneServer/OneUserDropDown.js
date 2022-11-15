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

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout()).then(() => history.push('/'));
    // };

    return (
        <div className='single-member-container' key={user?.id} onClick={openUser} >
            <img src={eriscord_clear_logo} id="logo-img" style={{ backgroundColor: user?.color }} alt="home-img" />
            <div className='review-name'>{user?.username}</div>
            {showUser && (
                <div className="single-member-dropdown-container">
                    <img src={eriscord_clear_logo} id="logo-img" style={{ backgroundColor: user?.color }} alt="home-img" />
                    <div>
                        <div>{user?.username}</div>
                        <div>Message @{user?.username}</div>
                    </div>
                    {/* <ul className="single-member-dropdown">
                        <div className="single-member-dropdown-item">
                            {user.username}
                        </div>
                        <div className="single-member-dropdown-item">
                            {user.email}
                        </div>
                        <hr className="single-member-dropdown-line"></hr>
                        <div className="single-member-dropdown-link-item">

                            <Link to={'/spots/current'}> Manage Listings</Link>

                        </div>
                        <div className="single-member-dropdown-link-item">

                            <Link to={'/reviews/current'}> Manage Reviews</Link>

                        </div>
                        <div className="single-member-dropdown-link-item">

                            <div className='single-member-dropdown-logout-button' onClick={logout}>
                                <Redirect to="/spots" />
                                Log Out
                            </div>
                        </div>
                    </ul> */}
                </div>
            )}
        </div>
        // <div className="nav-bar-drop-down">
        //     <button className="single-member-buttons" onClick={openUser}>
        //         {/* <i className="fas fa-user-circle" /> */}
        //         <i className="fa-solid fa-bars nav-bar-drop-down-favicon" />
        //         <i className="fa-solid fa-user nav-bar-drop-down-favicon" />
        //     </button>
        //     {showUser && (
        //         <div className="single-member-dropdown-container">
        //             <ul className="single-member-dropdown">
        //                 <div className="single-member-dropdown-item">
        //                     {user.username}
        //                 </div>
        //                 <div className="single-member-dropdown-item">
        //                     {user.email}
        //                 </div>
        //                 <hr className="single-member-dropdown-line"></hr>
        //                 <div className="single-member-dropdown-link-item">

        //                     <Link to={'/spots/current'}> Manage Listings</Link>

        //                 </div>
        //                 <div className="single-member-dropdown-link-item">

        //                     <Link to={'/reviews/current'}> Manage Reviews</Link>

        //                 </div>
        //                 <div className="single-member-dropdown-link-item">

        //                     <div className='single-member-dropdown-logout-button' onClick={logout}>
        //                         {/* <Redirect to="/spots" /> */}
        //                         Log Out
        //                     </div>
        //                 </div>
        //             </ul>
        //         </div>
        //     )}
        // </div>
    );
}

export default OneUserInfo;
