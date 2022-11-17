import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import ServerEdit from './ServerEditForm';




function ServerEditModal({showServerEditModal, setShowServerEditModal}) {
    // const [showModal, setShowModal] = useState(false);
    // const sessionUser = useSelector((state) => state.session.user);
    // const { serverId } = useParams()
    // const servers = useSelector(state => state.server.servers)

    // let name
    // if (servers) {
    //     let currentServer = servers.find(server => server?.id == serverId)
    //     console.log("CURRENT SERVER IN DMS", currentServer)
    //     name = currentServer?.name
    // }

    // if (!sessionUser) {
    //     return null;
    // }
    // function handleOpen() {
    //     setShowModal(true);
    //     console.log("opening_____________________")
    // }
    return (
        <>
            {/* <div className='edit-server'>
                <div className='server-title' >
                    <div className='logo-div' onClick={handleOpen}>
                        <span className='username'>
                            {name}
                        </span>
                        <span className='arrow-icon' >
                            <img className="arrow-img" src={selectMenuIcon} />
                        </span>

                    </div>
                </div> */}
                {showServerEditModal && (
                    <Modal onClose={() => setShowServerEditModal(false)}>
                        <ServerEdit setShowServerEditModal={setShowServerEditModal} />
                    </Modal>
                )}
            {/* </div> */}
        </>
    );
}


export default ServerEditModal;
