import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getPersonalServers, getRegularServers } from "../../../store/serverReducer";
import './CurrentUserServer.css';


function CurrentUserServer() {
    const dispatch = useDispatch();
    // const { channelId, serverId } = useParams();



    useEffect(() => {
        dispatch(getPersonalServers())
        // dispatch(getRegularServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    let servers = useSelector(state => state.server.servers)

    console.log('servers!!!!!!!!', servers)

    // console.log('channelArr!!!!!!!!', channelArr)

    // if (!) { return null }


    return (
        <>
        <hr></hr>
            <>
                This is the list of current user servers
            </>
            <div>
                server:
            </div>

            <hr></hr>
            <div>
                {/* {messagesArr.map((message) => (
                    <div className='single-message-container' key={message.id}>
                        <div className='review-name'>background color:  {message?.sender_color}</div>
                        <div className='review-name'>sender name:  {message?.sender_name}</div>
                        <div className='review-name'>content:  {message?.content}</div>
                        <hr></hr>
                    </div>
                ))} */}

            </div>

        </>
    )
}




export default CurrentUserServer;
