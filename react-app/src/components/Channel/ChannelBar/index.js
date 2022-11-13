import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from "../../../context/Modal";
import { thunkLoadoneChannel } from "../../../store/channelReducer";
import ChannelCreate from "../ChannelCreate/ChannelCreateForm"
import ChannelCreateModal from "../ChannelCreate"
import ChannelDelete from "../ChannelDelete";
import ChannelEdit from "../ChannelEdit"
import './ChannelBar.css';


function ChannelBar() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunkLoadoneChannel(2))
    }, [dispatch]);

    let channel = useSelector(state => state.channel)
    // console.log('channel!!!!!!!!', channel)
    let channelArr = Object.values(channel)
    // console.log('channelArr!!!!!!!!', channelArr)

    if (!channel) { return null }


    return (
        <>
        <hr></hr>
            <>
                This gonna be the channel display!
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
            <div>
                message1: {channelArr?.[0]?.messages[0].content}
            </div>
            <div>
            message2: {channelArr?.[0]?.messages[1].content}
            </div>
            <div>
            message3: {channelArr?.[0]?.messages[2].content}
            </div>

            <ChannelCreateModal />
            <ChannelEdit />
            <ChannelDelete />
        </>
    )
}




export default ChannelBar;
