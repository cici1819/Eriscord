

import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import ChannelDelete from './ChannelDeleteForm';

function ChannelDeleteModal({channel}) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) {
        return null;
    }

    return (
        <>
            <div className="Delete-div2" onClick={(e) => setShowModal(true)}>
            <span className="delete-text">
                Delete Channel
            </span>
            <span className="trash-can-icon">
                <i className="fa-solid fa-trash-can"></i>
            </span>
        </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ChannelDelete setShowModal={setShowModal} channel={channel} />
                </Modal>
            )}

        </>
    );
}


export default ChannelDeleteModal;
