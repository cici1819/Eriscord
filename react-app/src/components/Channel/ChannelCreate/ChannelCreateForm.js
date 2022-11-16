import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { thunkAddChannelToServer } from "../../../store/channelReducer";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import './ChannelCreate.css';


function ChannelCreate({ setShowModal }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const [topic, setTopic] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);
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

    // console.log("------------------------", validationErrors.length)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) { return }

        const channelPayload = { name }
        channelPayload.serverId = serverId
        // console.log("!!!!!frontend", channelPayload)
        let createdChannel = await dispatch(thunkAddChannelToServer(channelPayload))

        setErrors(validationErrors)
        if (!validationErrors.length) {
            setHasSubmitted(true);
            if (createdChannel) {
                // history.push(`/`)
                setValidationErrors([]);
                setErrors([]);
                setShowModal(false);
                dispatch(thunkLoadOneServer(serverId))
                console.log(createdChannel)
            }
        }
    }


    return (
        <>

            <div className="create-channel-div">
                <form className="create-channel-form" onSubmit={handleSubmit}>
                    <div className="create-title">
                        Create Channel
                    </div>
                    <div className="mark-logo">
                        <img className='close-x-img' src='https://static.thenounproject.com/png/1144486-200.png' alt='close' onClick={() => setShowModal(false)}/>
                    </div>
                    <div className="create-title2">
                        <p>in Text Channels</p>
                    </div>
                    {validationErrors.length && (
                        <div className='error3-lists'>
                            <ul className='error-list'>
                                {validationErrors.map((error) => <li id='errors' key={error}>{error}</li>)}
                            </ul>
                        </div>
                    )}

                    <div className="c-type">
                        CHANNEL TYPE
                    </div>
                    <div className="c-type-content">
                        <span className="hashtag">
                            <i className="fa-light fa-hashtag"> </i>
                        </span>
                        <span className="text">Text</span>
                        <span className="text-long">Send messages, images,GIFs,emoji,opinions,and puns</span>
                    </div>
                    <div className="c-name-div">
                        <div className="c-name-title">
                            <label > CHANNEL NAME </label>
                        </div>
                        <div className="c-name-input">
                            <span className="small-logo">
                                <i className="fa-light fa-hashtag"> </i>
                            </span>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="new-channel"
                                required />
                        </div>

                    </div>
                </form>
                <div className="c-button-div">
                    <div className="c-create-button">
                        <button type="submit" onClick={handleSubmit}>Create Channel</button>
                    </div>
                    <div className="c-cancel" onClick={() => setShowModal(false)}>
                        Cancel
                    </div>
                </div>

            </div>


        </>
    )
}




export default ChannelCreate;
