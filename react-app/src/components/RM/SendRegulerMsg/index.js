import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { channelAddMessage } from "../../../store/messageReducer";
import { thunkLoadoneChannel } from "../../../store/channelReducer";
import { io } from 'socket.io-client';
import './SendRegulerMsg.css';

let socket;
function SendRegulerMsg() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState("");

    const { channelId, serverId } = useParams();
    let channel_id = channelId
    let server_id = serverId
    const currentChannel = useSelector((state) => state.channel[`${channelId}`])

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

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        // socket.on("RM", (chat) => {
        //     console.log("MESSAGE FROM TEST :", chat)
        // })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
 if (validationErrors.length) { return }
        const msgPayload = { content, channel_id, server_id }

        await socket.emit("RM", content)

        await dispatch(channelAddMessage(msgPayload))
        await dispatch(thunkLoadoneChannel(channelId))
        await setContent('')
        setHasSubmitted(false);
    }

    return (
        <>
            <div className="create-msg-div">
            {hasSubmitted && !!validationErrors.length && (<div className='rm-send-error-lists'>
                    <ul className='rm-send-error'>
                        {validationErrors.map((error) => <li id='errors' key={error}>{error}</li>)}
                    </ul>
                </div>)}
                <form className="create-rm-msg-form" onSubmit={handleSubmit}>
                    <input
                        className="rm-text-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={` Message # ${currentChannel?.name}`}
                 />
                    <div className="m-s-icon-div">
                    <i className="fa-solid fa-paper-plane" onClick={handleSubmit}></i>
                    </div>
                </form>
            </div>
        </>
    )
}




export default SendRegulerMsg;
