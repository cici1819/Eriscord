import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { DMServerAddMessage } from "../../../store/messageReducer";
import { getPersonalDMServers } from "../../../store/serverReducer";
import './SendDirectMsg.css';


function SendDirectMsg() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const { serverId } = useParams();
    let server_id = serverId

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('content, server_id', content, server_id)
        const msgPayload = { content, server_id }
        await dispatch(DMServerAddMessage(msgPayload))
        await dispatch(getPersonalDMServers())
        await setContent('')
    }

    return (
        <>
            <div className="create-msg-div">
                <form className="create-msg-form" onSubmit={handleSubmit}>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Direct Message Here"
                        required />
                    <div className="m-button-div">
                        <button type="submit">send</button>
                    </div>
                </form>
            </div>
        </>
    )
}




export default SendDirectMsg;
