import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import ServerEdit from './ServerEditForm';
import selectMenuIcon from "../../../img/select-menu-icon.png"



function ServerEditModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const { serverId } = useParams()
    const servers = useSelector(state => state.server.servers)

    let name
    if (servers) {
        let currentServer = servers.find(server => server.id == serverId)
        console.log("CURRENT SERVER IN DMS", currentServer)
        name = currentServer.name
    }

    if (!sessionUser) {
        return null;
    }

    return (
        <>
            <div className='edit-server'>
                <div className='server-title' >
                    <div className='logo-div' onClick={() => setShowModal(true)}>
                        <span className='username'>
                            {name}
                        </span>
                        <span className='arrow-icon' >
                            <img className="arrow-img" src={selectMenuIcon} />
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
