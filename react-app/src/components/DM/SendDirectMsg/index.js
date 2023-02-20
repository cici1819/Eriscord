import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { DMServerAddMessage } from "../../../store/messageReducer";
import { getPersonalDMServers } from "../../../store/serverReducer";
import './SendDirectMsg.css';
import { io } from 'socket.io-client';

let socket;

function SendDirectMsg({ otherUser }) {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState("");

    const { serverId } = useParams();

    let server_id = serverId
    useEffect(() => {
        const errors = [];
        if (content.length > 255) {
            errors.push("Sorry, messages should be less than 255 Characters")
        }
        if (content.length < 1) {
            errors.push("Please input messages")
        }

        setValidationErrors(errors);
    }, [content])

    //console.log(validationErrors)

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();
        //for emitting only
        return (() => {
            socket.disconnect()
        })
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) { return }

        if (socket) {
            socket.emit("DM", content)
        }
        //console.log('content, server_id', content, server_id)
        const msgPayload = { content, server_id }
        await dispatch(DMServerAddMessage(msgPayload))
        await dispatch(getPersonalDMServers())
        await setContent('')
        setHasSubmitted(false);
    }

    return (
        <>
            <div className="create-dm-msg-div">
                {hasSubmitted && !!validationErrors.length && (<div className='dm-send-error-lists'>
                    <ul className='dm-send-error'>
                        {validationErrors.map((error) => <li id='errors' key={error}>{error}</li>)}
                    </ul>
                </div>)}
                <form className="create-dm-msg-form" onSubmit={handleSubmit}>

                    <input className="dm-text-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={` Message @ ${otherUser}`}
                    />
                    <div className="dm-s-icon-div">
                        <i className="fa-solid fa-paper-plane" onClick={handleSubmit}></i>
                    </div>
                </form>

            </div>
        </>
    )
}




export default SendDirectMsg;
