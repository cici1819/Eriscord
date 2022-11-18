import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { thunkEditServer, getPersonalServers } from "../../../store/serverReducer";
import crossLogo from "../../../img/CROSS-ICON.png"
import user_clear_logo from "../../../img/favicon_clear_eriscord_192x192.png"
import profileLogo from "../../../img/Profile-logo.png"
import './ServerEdit.css';


function ServerEdit({ setShowServerEditModal }) {
    const dispatch = useDispatch();
    const { serverId } = useParams();

    const currentServer = useSelector((state) => state.server[`${serverId}`]);

    const [name, setName] = useState(currentServer.name);
    const [img, setImg] = useState(currentServer.img);
    const [description, setDescription] = useState(currentServer.description);
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user)



        // console.log('currentServer!!!!!!!!', currentServer)

    useEffect(() => {
        const errors = [];
        if (!img.includes('.com') && !img.includes('.jpg') && !img.includes('.png') && !img.includes('.jpeg')) {
            errors.push('Please provide a valid image URL!')
        }
        if (name.length > 50) {
            errors.push("Name should be less than 50 characters")
        }
        if (name.length < 4) {
            errors.push("Name should be more than 3 characters")
        }
        setValidationErrors(errors);
    }, [img, name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) { return }
        // console.log('serverId', serverId)

        const editedServerPayload = { serverId, name, img, description }
        editedServerPayload.serverId = serverId
        // console.log("!!!!!editedServerPayload", editedServerPayload)
        let editedServer = await dispatch(thunkEditServer(editedServerPayload))
        //     .catch(async (res) => {

        //     const data = await res.json();

        //     if (data && data.errors) {
        //         setErrors(data.errors)
        //     };
        // });

        if (editedServer) {
            setShowServerEditModal(false);
            dispatch(getPersonalServers())
        }
    }


    return (
        <>

            <div className="server-edit-wapper">

                <div className="edit-server-sideBar-content">
                    <div className="s-sideBar-text">
                        <div className="s-e-left-div">
                            <span className="s-e-l-title">
                                <h2>Profiles</h2>
                            </span>
                            <span className="s-text">
                                PREVIEW FOR {sessionUser.username.toUpperCase()}'S SERVER
                            </span>
                            <div className="user-card">
                                <div className="user-logo">
                                    <div className="card-color" style={{ backgroundColor: sessionUser.color }}>

                                    </div>
                                    <img src={user_clear_logo} className="s-user-icon" style={{ backgroundColor: sessionUser.color }}></img>
                                </div>
                                <div className="u-p-wapper">
                                    <div className="user-profile">
                                        <div className="u-p-content">
                                            <span className="user-p-1">
                                                {sessionUser.username}
                                            </span>
                                            <span className="user-p-2">
                                                <i className="fa-light fa-hashtag"></i>
                                            </span>
                                            <span className="user-p-3">
                                                {sessionUser.id}
                                            </span>
                                        </div>

                                    </div>
                                    <div className="card-buttom">
                                        <div className="c-b-t">
                                            <h4>CUSTOMIZING MY PROFILES</h4>
                                        </div>
                                        <div className="img-div">
                                            <img src={profileLogo} alt="logo" />
                                            <div className="butoom-text">
                                                Server Profile
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <form onSubmit={handleSubmit} className="server-edit-form">
                    <div className="s-e-form-title">
                        <h2>
                            Server Profiles
                        </h2>
                        {hasSubmitted && !!validationErrors.length && (<div className="s-e-errors">
                            <ul>
                                {validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>
                        </div>)}
                    </div>
                    <div className="s-edit-right-sideBar">
                        <img className='e-s-close-x-img' src={crossLogo} alt='close' onClick={() => setShowServerEditModal(false)} />
                    </div>




                    <div className="server-name-input">
                        <div className="server-name-title">
                            SERVER NAME
                        </div>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            // placeholder={currentServer.name}
                             />
                    </div>
                    <div className="servericon-input">
                        <div className="server-icon-title">
                            SERVER ICON
                        </div>
                        <input type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            // placeholder={currentServer.img}
                             />
                    </div>
                    <div className="server-d-input">
                        <div className="s-d-t">
                            SERVER DESCRIPTION
                        </div>
                        <input type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            // placeholder={currentServer.description}
                        />
                    </div>

                    <div className="edit-server-button">
                        <button type="submit">Save Changes</button>
                    </div>



                </form>

            </div>
        </>
    )
}




export default ServerEdit;
