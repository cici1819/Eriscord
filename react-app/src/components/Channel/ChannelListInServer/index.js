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
        <div className="channel-in-server-container">
            <div>
                {channelsArr.map((channel) => (
                    <NavLink
                        to={`/channels/${serverId}/${channel.id}`}
                        key={channel.id}>
                        <div className="single-channel-in-server">
                            <div className="single-channel-in-server-left">
                                <div className="single-channel-in-server-icon">
                                    #
                                </div>
                                <div className="single-channel-in-server-name">
                                    {channel.name}
                                </div>
                            </div>
                            <div className="single-channel-in-server-button">
                                <ChannelEditModal channel={channel} />
                            </div>
                        </div>


                    </NavLink>
                ))}

            </div>
        </div>
    )
}




export default ChannelListInServer;
