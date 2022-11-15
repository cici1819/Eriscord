import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkLoadoneChannel } from "../../../store/channelReducer"
import './MessagesBoxTop.css';

function MessagesBoxTop() {

    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();


    useEffect(() => {
        dispatch(thunkLoadoneChannel(channelId))
    }, [dispatch, channelId]);

    let channel = useSelector(state => state.channel)

    return (
        <>
            <div>test test</div>
            <div> {channel.name}</div>
        </>


    )
}





export default MessagesBoxTop;
