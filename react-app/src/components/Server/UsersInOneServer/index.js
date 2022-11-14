import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import './UsersInOneServer.css';


function UsersInOneServer() {
    const dispatch = useDispatch();
    const { serverId } = useParams();


    useEffect(() => {
        dispatch(thunkLoadOneServer(serverId))
    }, [dispatch]);


    // console.log(channelId, serverId)
    let currentServer = useSelector(state => state.server)
    let usersInCurrentServer = useSelector(state => state.server[+serverId]?.users)

    // console.log('usersInCurrentServer!!!!!!!!', usersInCurrentServer)

    // console.log('channelArr!!!!!!!!', channelArr)

    if (!usersInCurrentServer) { return null }

    if (!currentServer || currentServer[+serverId].is_dm) return (<></>)

    return (
        <>
        <hr></hr>
            <>
                list of users in current server
            </>
            <div>
                users:
            </div>

            <hr></hr>
            <div>
                {usersInCurrentServer?.map((user) => (
                    <div className='single-message-container' key={user?.id}>
                        <div className='review-name'>avatar color:  {user?.color}</div>
                        <div className='review-name'>name:  {user?.username}</div>
                        <hr></hr>
                    </div>
                ))}

            </div>

        </>
    )
}




export default UsersInOneServer;
