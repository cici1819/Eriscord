import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getPersonalDMServers } from "../../../store/serverReducer";
import SendDirectMsg from "../SendDirectMsg";
import { io } from 'socket.io-client';
import two from "../../../img/two.png";
import eriscord_clear_logo from '../../../img/favicon_clear_eriscord_192x192.png';
import './DMBox.css';

let socket;


function DMBox() {
    const dispatch = useDispatch();
    const { serverId } = useParams();
    let current = useSelector(state => state.session.user.id)
    // const user = useSelector(state => state.server[+serverId]?.users)




    useEffect(() => {
        dispatch(getPersonalDMServers())
    }, [dispatch]);

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        socket.on("DM", (chat) => {
            console.log("MESSAGE FROM TEST :", chat)
            let result = dispatch(getPersonalDMServers())
            console.log("RESULT OF DISPATCHING POST DM :", result)

        })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])
    // console.log(channelId, serverId)
    let otherUser
    let otherColor
    let servers = useSelector(state => state.server.dmServers)
    // console.log("STATE IN MESSAGES :", servers)
    let currentServer
    let messagesArr;

    if (servers) {
        currentServer = servers.find(server => server.id == serverId)
        // console.log("CURRENT SERVER IN DMS", currentServer)
        if (currentServer) {
            let users = currentServer.users
            let notYou = users.find(user => user.id !== current)
            otherUser = notYou.username
            otherColor = notYou.color
            messagesArr = currentServer.messages
        }
    }

    if (!messagesArr) {
        return (
            <div className="DM-container">
                <div className="dm-main-front-page">
                    <img src={two} className="dm-main-page-pic" alt="chat-with-friends" />
                    <div className="dm-main-page-word">Wumpus is waiting to chat, let's start !</div>
                </div>
            </div>
        )
    }


    return (
        <div className="DM-container-chat">
            <div className="DM-chat-topbar">
                <div className="DM-chat-topbar-icon">@</div>
                <div className="DM-chat-topbar-name">{otherUser}</div>
            </div>
            <div className="dm-chat-page">
                <div className="dm-chat-user-info">
                    <img src={eriscord_clear_logo} className="dm-chat-user-icon" style={{ backgroundColor: otherColor }}></img>
                    <div className="dm-chat-user-name">{otherUser}</div>
                    <div className="dm-chat-topbar-content">This is the beginning of your direct message history with @ {otherUser}</div>

                </div>

                {messagesArr.map((message) => (
                    <div className='single-dm-container' key={message.id}>
                        <div>
                            <img src={eriscord_clear_logo} className="single-dm-icon" style={{ backgroundColor: message.sender_color }}></img>

                        </div>
                        <div className='single-dm-container-right'>
                            <div className='single-dm-name-time'>
                                <div className='single-dm-sender-name'>{message?.sender_name}</div>
                                <div className='single-dm-time'>{message?.created_at.slice(0, 10)}</div>
                            </div>
                            <div className='single-dm-content'>{message?.content}</div>
                        </div>
                    </div>
                ))}
                <br></br>
            </div>
            <div className='single-dm-messagebox-container'>
                <div className='single-dm-messagebox-bottom'>
                    < SendDirectMsg otherUser={ otherUser} />
                </div>

            </div>

        </div >
    )
}




export default DMBox;
