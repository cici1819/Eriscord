import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getPersonalServers, getRegularServers } from "../../../store/serverReducer";
import SingleServer from "../SingleServer"
import './CurrentUserServer.css';


function CurrentUserServer() {
    const dispatch = useDispatch();
    // const { channelId, serverId } = useParams();
    const history = useHistory();


    useEffect(() => {
        dispatch(getPersonalServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    let servers = useSelector(state => state.server.servers)

    // console.log('servers!!!!!!!!', servers)

    // if (!) { return null }
    const dmRedirect = () => {
        history.push("/channels/@me")
    }

    return (
        <>
<<<<<<< HEAD
            <hr></hr>
            <>
            </>
            <div>
                YOUR SERVERS:
            </div>
            <button onClick={dmRedirect}> VIEW YOUR DMS</button>
            <hr></hr>
=======

    
>>>>>>> 3f7a171ac4eac6f77768bbf6c3f4e6f4c6a8f053
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
