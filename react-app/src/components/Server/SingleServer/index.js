import React from "react";
import { NavLink, useParams } from "react-router-dom"

import './SingleServer.css';


function SingleServer({ server }) {
    // console.log('server!!!!!!!!!!!!!!!!!!!!', server.channels[0].id)
    let firstChannelId = server?.channels[0]?.id

    if (server?.img?.length!==0 || server==undefined) {
        return (
            <>
                <NavLink
<<<<<<< HEAD
                    to={`/channels/${server.id}`}>
                    <img className={`single-server-logo`} src={server.img} alt='single-server-logo' />
=======
                    to={`/channels/${server?.id}/${firstChannelId}`}>
                    <img className={`single-server-logo`} src={server?.img} alt='single-server-logo' />
>>>>>>> 3e0c8145b82b215fc4e2345fd19d586fade2c9a5
                </NavLink>
            </>
        )
    }

    return (
        <>
            <NavLink
                to={`/channels/${server?.id}`}>
                name: {server.name}
            </NavLink>
        </>
    )
}




export default SingleServer;
