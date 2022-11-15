import React from "react";
import { NavLink, useParams } from "react-router-dom"

import './SingleServer.css';


function SingleServer({ server }) {

<<<<<<< HEAD
    if (!server) { return null }

    let firstChannelId
    // console.log("server!!!!!!!!!!!!!!!!!", server)

    if (server.hasOwnProperty('channels') && server.channels.length > 0) {
        firstChannelId = server.channels[0].id
        return (
            <NavLink
                to={`/channels/${server?.id}/${firstChannelId}`}>
                <img className={`single-server-logo`} src={server?.img} alt='single-server-logo' />
            </NavLink>
        )
    } else {
        firstChannelId = 0
=======
    if (server?.img?.length !== 0 || server == undefined) {
>>>>>>> 3cca7591641262055026466a4d0f4c200b70959a
        return (
            <>

                <NavLink
                    to={`/channels/${server?.id}/${firstChannelId}`}>
                    <img className={`single-server-logo`} src={server?.img} alt='single-server-logo' />
                </NavLink>
            </>
        )
    }

<<<<<<< HEAD
=======
    return (
        <>
            <NavLink
                to={`/channels/${server?.id}`}>
                name: {server.name}
            </NavLink>
        </>
    )
>>>>>>> 3cca7591641262055026466a4d0f4c200b70959a
}



export default SingleServer;
