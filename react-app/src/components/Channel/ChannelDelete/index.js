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
            <div>
                <button
                    onClick={(e) => handleDelete(channelId)}>DELETE CHANNEL</button>
            </div>
        </>
    )
}




export default ChannelDelete;
