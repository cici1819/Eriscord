import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { channelAddMessage } from "../../../store/messageReducer";
import { thunkLoadoneChannel } from "../../../store/channelReducer";
import { io } from 'socket.io-client';
import './SendRegulerMsg.css';

let socket;
function SendRegulerMsg(channelName) {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const { channelId, serverId } = useParams();
    let channel_id = channelId
    let server_id = serverId

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

        const msgPayload = { content, channel_id, server_id }

        await socket.emit("RM", content)

        await dispatch(channelAddMessage(msgPayload))
        await dispatch(thunkLoadoneChannel(channelId))
        await setContent('')
    }

    return (
        <>
            <div className="create-msg-div">
                <form className="create-msg-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={"   Message"}
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
