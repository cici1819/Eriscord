import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkLoadoneChannel } from "../../../store/channelReducer"
import './MessagesBox.css';


function MessagesBox() {
    const dispatch = useDispatch();
    const { channelId } = useParams();
    const { serverId } = useParams();


    useEffect(() => {
        dispatch(thunkLoadoneChannel(channelId))
    }, [dispatch]);


    // console.log(channelId, serverId)


    let channel = useSelector(state => state.channel)
    let messagesArr = useSelector(state => state.channel[+channelId]?.messages)
    console.log('messages!!!!!!!!', messagesArr)
    let channelArr = Object.values(channel)
    // console.log('channelArr!!!!!!!!', channelArr)

    if (!messagesArr) { return null }


    return (
        <>
            <hr></hr>
            <>
                This gonna be the messages display box!
            </>
            <div>
                name: {channelArr?.[0]?.name}
            </div>
            <div>
                topic: {channelArr?.[0]?.topic}
            </div>
            <div>
                serverId: {channelArr?.[0]?.server_id}
            </div>
            <hr></hr>
            <div>
                {messagesArr.map((message) => (
                    <div className='single-message-container' key={message.id}>
                        <div className='review-name'>background color:  {message?.sender_color}</div>
                        <div className='review-name'>sender name:  {message?.sender_name}</div>
                        <div className='review-name'>content:  {message?.content}</div>
                        <hr></hr>
                    </div>
                ))}

            </div>

        </>
    )
}




export default MessagesBox;
