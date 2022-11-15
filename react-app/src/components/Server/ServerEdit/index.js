import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import ServerEdit from './ServerEditForm';
import { useParams } from 'react-router-dom';
import selectMenuIcon from "../../../img/select-menu-icon.png"



function ServerEditModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const { serverId } = useParams()
    const servers = useSelector(state => state.server.servers)

    let logo
    if (servers) {
        let currentServer = servers.find(server => server.id = serverId)
        console.log("CURRENT SERVER IN DMS", currentServer)
        logo = currentServer.img
    }

    if (!sessionUser) {
        return null;
    }

    return (
        <>
            <div className='edit-server'>
                <div className='server-title' >
                    <div className='logo-div'>
                        <span className='username'>
                            {sessionUser.username}'server
                        </span>
                        <span className='arrow-icon'>
                            <img className = "arrow-img"src={selectMenuIcon} onClick={() => setShowModal(true)}/>
                        </span>

                    </div>
                </div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ServerEdit setShowModal={setShowModal} />
                    </Modal>
                )}
            </div>
        </>
    );
}


export default ServerEditModal;
