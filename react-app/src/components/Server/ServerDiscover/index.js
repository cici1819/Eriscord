import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getRegularServers } from '../../../store/serverReducer';
import './ServerDiscover.css'
function ServerDiscover() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();
    const history = useHistory();
    let servers = useSelector(state => state.server.servers)

    useEffect(() => {
        dispatch(getRegularServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    // console.log('servers!!!!!!!!', servers)

    if (!servers) { return null }
    // const dmRedirect = () => {
    //     history.push("/channels/@me")
    // }
    // console.log (servers)
    return (
        <>
            <div className="server-discover-map">
                {servers?.map((server) => {
                    return (
                        <div className='server-display' onClick={()=>{history.push('/channels/'+server.id)}}>
                            {server.name},
                            {server.description}
                        </div>
                    )
                })}

            </div>

        </>
    )
}
export default ServerDiscover
