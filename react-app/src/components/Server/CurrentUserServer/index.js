import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getPersonalServers, getRegularServers } from "../../../store/serverReducer";
import SingleServer from "../SingleServer"
import './CurrentUserServer.css';


function CurrentUserServer() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();
    const history = useHistory();
    let servers = useSelector(state => state.server.servers)

    useEffect(() => {
        dispatch(getPersonalServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    // console.log('servers!!!!!!!!', servers)

    if (!servers) { return null }
    const dmRedirect = () => {
        history.push("/channels/@me")
    }

    return (
        <>
            <hr></hr>
            <>
            </>
            <div>
                YOUR SERVERS:
            </div>
            <button onClick={dmRedirect}> VIEW YOUR DMS</button>
            <hr></hr>
            <div className="single-server-container">
                {servers?.map((server) => {
                    return (
                        <SingleServer server={server} key={server?.id} />
                    )
                })}

            </div>

        </>
    )
}




export default CurrentUserServer;
