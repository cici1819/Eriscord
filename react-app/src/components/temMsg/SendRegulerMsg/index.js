import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkAddChannelToServer } from "../../../store/channelReducer";
import './SendRegulerMsg.css';


function SendRegulerMsg() {
    const dispatch = useDispatch();
    const [msgData, setMsgData] = useState('');

    const { channelId, serverId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const msgPayload = { msgData }
        dispatch(thunkAddChannelToServer(msgPayload))
    }

    return (
        <>
            <div className="create-msg-div">
                <form className="create-msg-form" onSubmit={handleSubmit}>
                    <input type="text"
                        value={msgData}
                        onChange={(e) => setMsgData(e.target.value)}
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
