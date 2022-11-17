
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import ServerDelete from './ServerDeleteForm';

function ServerDeleteModal({ server,showServerDeleteModal,setShowServerDeleteModal }) {
    // const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) {
        return null;
    }

    return (
        <>
            {/* <div className="s-Delete-div" onClick={(e) => setShowModal(true)}>
                <span className="s-delete-text">
                    Delete Server
                </span>

            </div> */}
            {showServerDeleteModal && (
                <Modal onClose={() => setShowServerDeleteModal(false)}>
                    <ServerDelete setShowServerDeleteModal={setShowServerDeleteModal} server={server} />
                </Modal>
            )}

        </>
    );
}


export default ServerDeleteModal;
