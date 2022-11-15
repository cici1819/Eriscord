import React from "react";
import { NavLink, useParams } from "react-router-dom"

import './SingleServer.css';


function SingleServer({ server }) {


    if (server?.img?.length!==0 || server==undefined) {
        return (
            <>
                <NavLink
                    to={`/channels/${server?.id}`}>
                    <img className={`single-server-logo`} src={server?.img} alt='single-server-logo' />
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
