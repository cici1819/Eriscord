import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getPersonalServers, getRegularServers } from "../../../store/serverReducer";
import SingleServer from "../SingleServer"
import './CurrentUserServer.css';


function CurrentUserServer() {
    const dispatch = useDispatch();
    // const { channelId, serverId } = useParams();



    useEffect(() => {
        dispatch(getPersonalServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    let servers = useSelector(state => state.server.servers)

    console.log('servers!!!!!!!!', servers)

    // if (!) { return null }


    return (
        <>
        <hr></hr>
            <>
                This is the list of current user servers
            </>
            <div>
                server:
            </div>

            <hr></hr>
            <div className="single-server-container">
            {servers?.map((server) => {
                return (
                    <SingleServer server={server} key={server.id} />
                )
            })}

            </div>

        </>
    )
}




export default CurrentUserServer;
