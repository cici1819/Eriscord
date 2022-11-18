
import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import ChannelCreate from './ChannelCreateForm';
import './ChannelCreate.css';

function ChannelCreateModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
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
                    <div className='add-channel-fa-div' onClick={() => setShowModal(true)} >
                        <i className="fa-regular fa-plus"  > </i>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ChannelCreate setShowModal={setShowModal} />
                </Modal>
            )}

        </>
    );
}


export default ChannelCreateModal;
