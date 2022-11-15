import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getPersonalDMServers } from "../../../store/serverReducer";
import SendDirectMsg from "../SendDirectMsg";
import './DMBox.css';



function DMBox() {
    const dispatch = useDispatch();
    const { serverId } = useParams();


    useEffect(() => {
        dispatch(getPersonalDMServers())
    }, [dispatch]);


    // console.log(channelId, serverId)
    let servers = useSelector(state => state.server.dmServers)
    console.log("STATE IN MESSAGES :", servers)
    let currentServer
    let messagesArr;
    if (servers) {
        currentServer = servers.find(server => server.id == serverId)
        console.log("CURRENT SERVER IN DMS", currentServer)
        if (currentServer) {
            messagesArr = currentServer.messages
        }
    }

    if (!messagesArr) { return "THIS WILL BE DM MESSAGES" }


    return (
        <div className="DM-container">
            <hr></hr>
            <>
                This gonna be the DM display box!
            </>

            <hr></hr>
            <div className="DM-container">
                {messagesArr.map((message) => (
                    <div className='single-message-container' key={message.id}>
                        <div className='review-name'>background color:  {message?.sender_color}</div>
                        <div className='review-name'>sender name:  {message?.sender_name}</div>
                        <div className='review-name'>content:  {message?.content}</div>
                        <hr></hr>
                    </div>
                ))}
                <br></br>
            </div>
            fdsa
            <SendDirectMsg />
        </div>
    )
}




export default DMBox;
