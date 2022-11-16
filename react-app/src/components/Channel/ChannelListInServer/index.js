import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom"
import { thunkLoadOneServer } from "../../../store/serverReducer";
import ChannelEditModal from "../ChannelEdit";
import ChannelEdit from "../ChannelEdit/ChannelEditForm";
import './ChannelListInServer.css';


function ChannelListInServer() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();

    useEffect(() => {
        dispatch(thunkLoadOneServer(serverId))
    }, [dispatch, serverId]);


    // console.log(channelId, serverId)

    let channelsArr = useSelector(state => state.server[serverId]?.channels)

    // console.log('channelsArr!!!!!!!!', channelsArr)


    if (!channelsArr) { return null }


    return (
        <>
            <hr></hr>
            <>

            </>
            <div>
                all channels in the server
            </div>

            <hr></hr>
            <div>
                {channelsArr.map((channel) => (
                    <NavLink
                        to={`/channels/${serverId}/${channel.id}`}
                        key={channel.id}>
                        <div>
                            {channel.name}
                        </div>
                        <ChannelEditModal />
                    </NavLink>
                ))}

            </div>
        </>
    )
}




export default ChannelListInServer;
