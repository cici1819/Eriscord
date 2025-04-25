import React from "react";
import { NavLink, useParams } from "react-router-dom"
import defaultServerImage from "../../../img/two.png"

import './SingleServer.css';


function SingleServer({ server }) {

    if (!server) { return null }

    let firstChannelId
    // //console.log("server!!!!!!!!!!!!!!!!!", server)

    if (server.hasOwnProperty('channels') && server.channels.length > 0) {
        firstChannelId = server.channels[0].id
        return (
            <NavLink
                to={`/channels/${server?.id}/${firstChannelId}`}>
                <img
                className={`single-server-logo`}
                src={server?.img}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultServerImage;
                  }}
                alt='single-server-logo' />
            </NavLink>
        )
    } else {
        firstChannelId = 0
        return (
            <>

                <NavLink
                    to={`/channels/${server?.id}/${firstChannelId}`}>
                    <img className={`single-server-logo`} src={server?.img} alt='single-server-logo' />
                </NavLink>
            </>
        )
    }

}



export default SingleServer;
