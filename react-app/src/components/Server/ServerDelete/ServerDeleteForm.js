import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router";
import { thunkDeleteOneServer, getPersonalServers } from "../../../store/serverReducer";
import './ServerDelete.css';


function ServerDelete({ setShowServerDeleteModal, server }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showError, setShowError] = useState('')
    const [serverName, setServerName] = useState('');





    const { channelId, serverId } = useParams();

    const handleDelete = async (e) => {
        e.preventDefault();

        if (server.name !== serverName) {
            setShowError('Please provid the correct server name')
            return;
        }
        await dispatch(thunkDeleteOneServer(serverId))

        await dispatch(getPersonalServers())

        await setShowServerDeleteModal(false);

        await history.push("/channels/@me")

    }


    return (
        <>
            <div className="delete-server-wapper2">
                <form className='delete-server-form' onSubmit={handleDelete}>
                    <div className="s-delete-text-1">
                        <div className="s-delete-title">
                            <h2>Delete {server?.name}</h2>
                        </div>
                        <div className="s-delete-warning">
                            <span className="d-s-1">Are you sure you want to delete </span>
                            <span className="s-d-s-2">{server?.name}?</span>
                            <span className="d-s-3">
                                This cannot be undone.
                            </span>
                        </div>
                    </div>

                    {/* <span className="error-message">{showError}</span> */}
                    <div className="d-s-input">
                    <span className='delete-server-check'>ENTER SERVER NAME</span>
                    <input

                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        required
                    />
                    </div>


                </form>


                <div className="delete-server-button">
                    <button
                        onClick={(e) => handleDelete(serverId)}>DELETE SERVER
                    </button>
                </div>

                <div className="s-c-cancel" onClick={() => setShowServerDeleteModal(false)}>
                    Cancel
                </div>

            </div>
        </>
    )
}




export default ServerDelete;
