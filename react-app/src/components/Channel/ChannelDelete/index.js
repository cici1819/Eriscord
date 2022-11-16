import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkDeleteOneChannel } from "../../../store/channelReducer";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import './ChannelDelete.css';


function ChannelDelete({ setShowModal }) {
    const dispatch = useDispatch();

    const { channelId, serverId } = useParams();

    const handleDelete = async (e) => {

        await dispatch(thunkDeleteOneChannel(channelId));
        await dispatch(thunkLoadOneServer(serverId))
        await setShowModal(false);

    }


    return (
        <>
            <div className="Delete-div2" onClick={(e) => handleDelete(channelId)}>
                <span className="delete-text">
                Delete Channel
                </span>
                <span className="trash-can-icon">
                    <i className="fa-solid fa-trash-can"></i>
                </span>
            </div>
        </>
    )
}




export default ChannelDelete;
