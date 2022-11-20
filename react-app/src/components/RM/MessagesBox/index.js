import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router";
import { thunkLoadoneChannel } from "../../../store/channelReducer"
import { joinServer } from "../../../store/serverReducer";
import SendRegulerMsg from "../SendRegulerMsg";
import { io } from 'socket.io-client';
import eriscord_clear_logo from '../../../img/favicon_clear_eriscord_192x192.png';
import joinInServer from "../../../img/join-server.gif"
import backgroundImg from"../../../img/j-s-b.webp"
import './MessagesBox.css';
let socket;

function MessagesBox() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();
    const history = useHistory();
    let channel = useSelector(state => state.channel)
    let messagesArr = useSelector(state => state.channel[+channelId]?.messages)
    const servers = useSelector(state => state.server.servers)
    const sessionUser = useSelector(state => state.session.user)
    let channelName = useSelector(state => state.channel[+channelId]?.name)

    useEffect(() => {
        dispatch(thunkLoadoneChannel(channelId))
    }, [dispatch, channelId, messagesArr?.length]);

    function signup() {
        dispatch(joinServer(sessionUser.id, serverId))
        history.push(`/channels/${serverId}/${channelId}`)
    }

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();
        // console.log("chat", socket)
        socket.on("RM", (chat) => {
            console.log("MESSAGE FROM TEST :", chat)
            dispatch(thunkLoadoneChannel(channelId))

        })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [messagesArr])
    let inServer = false;
    let server;
    if (servers) {
        server = servers.find(server => server.id == serverId)
    }
    if (server) {
        for (let i = 0; i < server.users.length; i++) {
            if (server.users[i].id == sessionUser.id) {
                inServer = true
            }
        }
        console.log(inServer, "IN THE SERVER")
        if (!server) { return null }
        // if
    }
    if (!inServer) {
        return (
            <div >
                <div className="title-not-in-server-page">
                    <span>You are currently in preview mode. Join this server to start chatting!</span>
                    <span> <img src={joinInServer} alt="join server" className="join-s-logo" /></span>
                </div>
                <div className="backgroup-img">
                    <img src={backgroundImg } alt="backgroundImg"className="join-server-background"/>
                </div>


            </div>
        )
    }
    // console.log(channelId, serverId)
    // console.log("A community for all users who want to call a server home. Here we hangout. Have a laugh. We're always looking for lively people so come hangout with us!".length)



    // console.log('messages!!!!!!!!', messagesArr)


    // console.log('messages!!!!!!!!', messagesArr)
    let channelArr = Object.values(channel)
    // console.log('channelArr!!!!!!!!', channelArr)

    if (!messagesArr) { return null }


    return (
        <div className="RM-container-chat">
            <div className="RM-chat-topbar">
                <div className="RM-chat-topbar-icon">#</div>
                <div className="RM-chat-topbar-name">{channelName}</div>
            </div>
            <div className="RM-chat-body-sec">
                {messagesArr.map((message) => (
                    <div className='single-rm-container' key={message.id}>
                        <div>
                            <img src={eriscord_clear_logo} className="single-rm-icon" style={{ backgroundColor: message?.sender_color }}></img>
                        </div>
                        <div className='single-rm-container-right'>
                            <div className='single-rm-name-time'>
                                <div className='single-rm-sender-name'>{message?.sender_name}</div>
                                <div className='single-rm-time'>{message?.created_at.slice(0, 19)}</div>
                            </div>
                            <div className='single-rm-content'>
                                {message?.content}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* <div className="channel-message-form">
            <form className='channel-send-message-form'>
                        <textarea
                        className='channel-send-message-content'
                        placeholder={`Message @${channel.name}`}
                        rows='1'
                        onChange={handleMessageInput}
                        value={messageInput}
                        />
                    <button type='submit' id='send-message-btn' style={{display: 'none'}} />
                    </form>
            </div> */}
            <div className='single-rm-messagebox-container'>
                <div className='single-rm-messagebox-bottom'>
                    <SendRegulerMsg channelName={channelName} />
                </div>

            </div>

        </div>
    )
}




export default MessagesBox;
