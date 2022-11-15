import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkLoadoneChannel } from "../../../store/channelReducer"
import SendRegulerMsg from "../SendRegulerMsg";
import './MessagesBox.css';


function MessagesBox() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();


    useEffect(() => {
        dispatch(thunkLoadoneChannel(channelId))
    }, [dispatch, channelId]);


    // console.log(channelId, serverId)


    let channel = useSelector(state => state.channel)
    let messagesArr = useSelector(state => state.channel[+channelId]?.messages)
    // console.log('messages!!!!!!!!', messagesArr)
    let channelArr = Object.values(channel)
    // console.log('channelArr!!!!!!!!', channelArr)

    if (!messagesArr) { return null }


    return (
        <>
            <hr></hr>
            <>
                This gonna be the messages display box!
            </>

            <hr></hr>
            <div>
                {messagesArr.map((message) => (
                    <div className='single-message-container' key={message.id}>
                        <div className='review-name'>background color:  {message?.sender_color}</div>
                        <div className='review-name'>sender name:  {message?.sender_name}</div>
                        <div className='review-name'>content:  {message?.content}</div>
                    </div>
                ))}

            </div>
<<<<<<< HEAD:react-app/src/components/Channel/MessagesBox/index.js
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


=======
            <SendRegulerMsg />
>>>>>>> 5bde70c6db47b4e396964e6159f736678ba45c1e:react-app/src/components/RM/MessagesBox/index.js
        </>
    )
}




export default MessagesBox;
