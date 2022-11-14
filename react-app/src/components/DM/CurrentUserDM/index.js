import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getPersonalDMServers} from "../../../store/serverReducer";
// import './CurrentUserServer.css';


function CurrentUserDm() {
    const dispatch = useDispatch();
    // const { channelId, serverId } = useParams();



    useEffect(() => {
        dispatch(getPersonalDMServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    let servers = useSelector(state => state.server.dmServers)

    console.log('state of dm servers!!!!!!!!', servers)

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
                    <div>{server.id} {server.name}</div>
                )
            })}
            <hr></hr>
            <div>

            </div>

        </>
    )
}




export default CurrentUserDm;
