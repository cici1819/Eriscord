import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { getPersonalDMServers } from "../../../store/serverReducer";
// import './CurrentUserServer.css';
import eriscord_clear_logo from '../../../img/favicon_clear_eriscord_192x192.png';

function CurrentUserDm() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { channelId, serverId } = useParams();
    const dmRedirect = (id) => {
        history.push(`/channels/@me/${id}`)
    }


    useEffect(() => {
        dispatch(getPersonalDMServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    let servers = useSelector(state => state.server.dmServers)
    let current= useSelector(state=>state.session.user.id)
    // console.log(current)

    console.log('state of dm servers!!!!!!!!', servers)
    if (!servers){
        return null
    }
    if (servers){
        console.log ("SERVERS HERE :", servers, servers.length)
        for (let i= 0;i<servers.length; i++){
            const currentServer= servers[i]
            let users=currentServer.users
            // console.log("USERS ITERATION :", users)
            let notYou= users.find(user=> user.id !== current)
            // console.log("OTHER USER :", notYou)
            currentServer.otherIcon= notYou.color
            currentServer.otherName= notYou.username
            // console.log(currentServer)
        }
    }
    // console.log('channelArr!!!!!!!!', channelArr)

    // if (!) { return null }
    return (
        <>
            <hr></hr>
            <>
                This is the list of current user dms
            </>
            <div>
                server:
            </div>
            {servers?.map((server) => {
                return (
                    <div onClick={() => dmRedirect(server.id)} style={{backgroundColor: server.otherIcon}}>
                        {server.otherName}
                        <img src={eriscord_clear_logo} className="otherUserIcon"></img>

                    </div>
                )
            })}
            <hr></hr>
            <div>

            </div>

        </>
    )
}




export default CurrentUserDm;
