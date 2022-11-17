import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkDeleteOneChannel } from "../../../store/channelReducer";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import './ChannelDelete.css';


function ChannelDelete({ channel, setShowModal }) {
    const dispatch = useDispatch();

    const { channelId, serverId } = useParams();

    const handleDelete = async (e) => {

        await dispatch(thunkDeleteOneChannel(channelId));
        await dispatch(thunkLoadOneServer(serverId))
        await setShowModal(false);

    }


    return (

        <>

            <div className="delete-channel">
                <div className="delete-text-1">
                    <div className="delete-title">
                        <h2>Delete Channel</h2>
                    </div>
                    <div className="delete-warning">
                        <span className="d-s-1">Are you sure you want to delete </span>
                        <span className="d-s-2">#{channel.name}?</span>
                        <span className="d-s-3">
                            This cannot be undone.
                        </span>
                    </div>
                </div>
                <div>
                <div className="c-delete-button">
                        <button type="submit" onClick={handleDelete}>Delete Channel</button>
                    </div>
                    <div className="channel-cancel" onClick={() => setShowModal(false)}>
                        Cancel
                    </div>
                </div>
            </div>




        </>
    )
}




export default ChannelDelete;
