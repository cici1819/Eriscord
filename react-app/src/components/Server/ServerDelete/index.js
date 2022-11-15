import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router";
import { thunkDeleteOneServer, getPersonalServers } from "../../../store/serverReducer";
import './ServerDelete.css';


function ServerDelete() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { channelId, serverId } = useParams();

    const handleDelete = async (e) => {

        await dispatch(thunkDeleteOneServer(serverId))

        await dispatch(getPersonalServers())

        await history.push("/channels/@me")

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
