import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getPersonalServers, getRegularServers } from "../../../store/serverReducer";
import SingleServer from "../SingleServer";
import eriscord_clear_logo from '../../../img/favicon_clear_eriscord_192x192.png';
import './CurrentUserServer.css';


function CurrentUserServer() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();
    const history = useHistory();
    let servers = useSelector(state => state.server.servers)

    useEffect(() => {
        dispatch(getPersonalServers())
    }, [dispatch]);


    // //console.log(channelId, serverId)

    // //console.log('servers!!!!!!!!', servers)

    if (!servers) { return null }
    const dmRedirect = () => {
        history.push("/channels/@me")
    }

    return (
        <>
            <button className='dmlogo-button' onClick={dmRedirect} >
                <img src={eriscord_clear_logo} className='dm-button' id="logo-img" alt="home-img" />
            </button>
            <div className="single-server-container">
                <div className="c-server-list">
                    {servers?.map((server) => {
                        <div key={server?.id}></div>
                        return (
                            <SingleServer server={server} key={server?.id} />
                        )

                    })}
                </div>


            </div>

        </>
    )
}




export default CurrentUserServer;
