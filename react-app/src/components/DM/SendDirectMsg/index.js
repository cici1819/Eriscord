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

    const { serverId } = useParams();

    let server_id = serverId

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
        if (socket) {
            socket.emit("DM", content)
        }
        console.log('content, server_id', content, server_id)
        const msgPayload = { content, server_id }
        await dispatch(DMServerAddMessage(msgPayload))
        await dispatch(getPersonalDMServers())
        await setContent('')
    }

    return (
        <>
            <div className="create-dm-msg-div">
                <form className="create-dm-msg-form" onSubmit={handleSubmit}>
                    <input className="dm-text-input"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={` Message @ ${otherUser}`}
                        required />
                    <div className="dm-s-icon-div">
                        <i className="fa-solid fa-paper-plane" onClick={handleSubmit}></i>
                    </div>
                </form>
            </div>
        </>
    )
}




export default SendDirectMsg;
