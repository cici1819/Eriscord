import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { thunkDeleteOneChannel } from "../../../store/channelReducer";
import './ChannelDelete.css';


function ChannelDelete() {
    const dispatch = useDispatch();

    let channelId = 22

    const handleDelete = async (e) => {

        let deleteChannel = await dispatch(thunkDeleteOneChannel(channelId));

        if (deleteChannel) {
            // history.push(`/`)
            console.log("delete successfully")
        }
    }


    return (
        <>
            <hr></hr>
            <>
                This is where you delete the channel
            </>
            <div>
                <button
                    onClick={(e) => handleDelete(channelId)}>DELETE THIS CHANNEL</button>
            </div>
        </>
    )
}




export default ChannelDelete;
