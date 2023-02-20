import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getRegularServers } from '../../../store/serverReducer';
import "./ServerDiscover.css"
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
    // console.log(servers, "@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    return (
        <>
            <div className="server-discover-map">
                <div className='all-servers-title'>
                    <h2> Find your community on Eriscord</h2>
                    <h3> From gaming , to music, to learning, there's a place for you </h3>
                </div>
                <div className='all-servers-div'>
                    {servers?.map((server) => {
                        return (
                            <div className='server-display-card' onClick={() => { history.push('/channels/' + server.id) }}>
                                <div className="all-server-img"> <img src={server.img} alt="server-logo" className='server-img' /></div>
                                <div className='all-server-name'> {server.name}</div>
                                <div className='allserver-description'>{server.description}</div>
                                <div className='user-in-serverList'>
                                    <span className='star-icon'> * </span>
                                    <span className='user-num'>{server.users.length} Members</span>
                                </div>



                            </div>
                        )
                    })}

                </div>
            </div>



        </>
    )
}
export default ServerDiscover
