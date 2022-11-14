import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkDeleteOneServer } from "../../../store/serverReducer";
import './ServerDelete.css';


function ServerDelete() {
    const dispatch = useDispatch();

    const { channelId, serverId } = useParams();

    const handleDelete = async (e) => {

        let deleteServer = await dispatch(thunkDeleteOneServer(serverId));

        if (deleteServer) {
            // history.push(`/`)
            console.log("server delete successfully")
        }
    }


    return (
        <>
            <div>component delete the server
                <></>
                <button
                    onClick={(e) => handleDelete(serverId)}>DELETE SERVER</button>
                    <hr></hr>
            </div>
        </>
    )
}




export default ServerDelete;
