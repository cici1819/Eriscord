import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { channelAddMessage } from "../../../store/messageReducer";
import './SendRegulerMsg.css';


function SendRegulerMsg() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const { channelId, serverId } = useParams();
    let channel_id = channelId
    let server_id = serverId

    const handleSubmit = async (e) => {
        e.preventDefault();

        const msgPayload = { content, channel_id, server_id }
        dispatch(channelAddMessage(msgPayload))
    }

    return (
        <>
            <div className="create-msg-div">
                <form className="create-msg-form" onSubmit={handleSubmit}>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Message Here"
                        required />
                    <div className="m-button-div">
                        <button type="submit">send</button>
                    </div>
                </form>
            </div>
        </>
    )
}




export default SendRegulerMsg;
