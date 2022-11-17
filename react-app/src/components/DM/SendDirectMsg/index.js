import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { DMServerAddMessage } from "../../../store/messageReducer";
import { getPersonalDMServers } from "../../../store/serverReducer";
import './SendDirectMsg.css';
import { io } from 'socket.io-client';

let socket;

function SendDirectMsg(props) {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const {rightSideBar} = props

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
        if(socket){
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
            <div className={rightSideBar ? "Class for rightside show" : "Class for regular show"}
>
                <form className="create-msg-form" onSubmit={handleSubmit}>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder=" Message Here"
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
