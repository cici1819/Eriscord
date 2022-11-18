
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChannelCreate from './ChannelCreateForm';
import './ChannelCreate.css';

function ChannelCreateModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const servers = useSelector(state => state.server.servers)
    const { channelId, serverId } = useParams();

    let sessionUserIsOwner = false
    if (servers) {
        let currentServer = servers.find(server => server?.id == serverId)
        if (currentServer) {
            // console.log("current SERVER ",currentServer)
            sessionUserIsOwner = currentServer.owner_id == sessionUser.id
            // console.log("owned by you?", sessionUserIsOwner)
        }
    }
    if (!sessionUser) {
        return null;
    }

    return (
        <>
            <div className='add-channel' >
                <div className='text-channel' >
                    <span className='text-span'>
                        TEXT CHANNELS
                    </span>
                    {sessionUserIsOwner &&
                    <div className='add-channel-fa-div' onClick={() => setShowModal(true)} >
                        <i className="fa-regular fa-plus"  > </i>
                    </div>
}
                </div>
            </div>
            {showModal && sessionUserIsOwner && (
                <Modal onClose={() => setShowModal(false)}>
                    <ChannelCreate setShowModal={setShowModal} />
                </Modal>
            )}

        </>
    );
}


export default ChannelCreateModal;
