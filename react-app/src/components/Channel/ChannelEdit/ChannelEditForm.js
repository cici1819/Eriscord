import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { thunkEditOneChannel } from "../../../store/channelReducer";
import ChannelDelete from "../ChannelDelete";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import "./ChannelEdit.css"
import crossLogo from "../../../img/CROSS-ICON.png"
import buttomimg from "../../../img/channel-edit-buttom.png"


function ChannelEdit({ channel,setShowModal }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(channel.name);
    const [topic, setTopic] = useState(channel.topic);
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const { channelId, serverId } = useParams();

    useEffect(() => {
        const errors = [];
        if (!name.length) {
            errors.push("Name is required")
        } else if (name.length > 50) {
            errors.push("Name should be less than 50 characters")
        } else if (name.length < 4) {
            errors.push("Name should be more than 3 characters")
        }
        setValidationErrors(errors);
    }, [name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (validationErrors.length) { return }

        const editedchannelPayload = { name, topic, serverId }
        editedchannelPayload.channelId = channelId

        let editedChannel = await dispatch(thunkEditOneChannel(editedchannelPayload)).catch(async (res) => {

            const data = await res.json();

            if (data && data.errors) {
                setErrors(data.errors)
            };
        });

        if (editedChannel) {

            await await dispatch(thunkLoadOneServer(serverId))
            await setShowModal(false);
        }
    }


    return (
        <>

            <div className="channel-edit-div">

                <div className="edit-sideBar-content">
                    <div className="sideBar-text">
                        <div className="c-h-t-div">
                            <span className="c-e-hashtag">
                                <i className="fa-light fa-hashtag"> </i>
                                GENERAL
                            </span>
                            <span className="c-text">
                                TEXT CHANNELS
                            </span>
                        </div>

                        <div className="title-overview">
                            <span className="o-title-left">
                                OverView
                            </span>
                        </div>
                    </div>

                    <div className="Delete-div">
                        <ChannelDelete setShowModal={setShowModal} />

                    </div>
                </div>

                <form onSubmit={handleSubmit} className="channel-edit-form">
                    <div className="form-title">
                        <h4 className="f-title">OVERVIEW</h4>
                    </div>
                    {validationErrors.length && (
                        <div className='error3-lists'>
                            <ul className='error-list'>
                                {validationErrors.map((error) => <li id='errors' key={error}>{error}</li>)}
                            </ul>
                        </div>
                    )}
                    <div className="input-title1">
                        <label > CHANNEL NAME</label>
                    </div>
                    <div className="input-content-1">
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>

                    <div className="input-title2">
                        <label >TOPIC</label>
                    </div>
                    <div className="input-content-2">
                        <input type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required />
                    </div>
                    <div className="editedChannel-button">
                        <button className="e-c-button"
                            onClick={handleSubmit}
                            type="submit">Save Changes</button>
                    </div>
                    <div className="e-b-img">
                        <img className="buttom-img" src={buttomimg} alt="buttom-img" />
                    </div>
                </form>
                <div className="edit-right-sideBar">
                    <img className='e-close-x-img' src={crossLogo} alt='close' onClick={() => setShowModal(false)} />
                </div>
            </div>
        </>
    )
}




export default ChannelEdit;
