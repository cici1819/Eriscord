import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from "react-router";
import { thunkDeleteOneServer, getPersonalServers, thunkLoadOneServer } from "../../../store/serverReducer";
import './ServerDelete.css';


function ServerDelete({ setShowServerDeleteModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showError, setShowError] = useState('')
    const [serverName, setServerName] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const { channelId, serverId } = useParams();
    // console.log('serverId!!!!!!!!!', serverId)

    useEffect(() => {
        dispatch(thunkLoadOneServer(serverId))
    }, [dispatch, serverId]);

    useEffect(() => {
        const errors = [];
        if (currentServer.name !== serverName) {
            setShowError('Please provide the correct server name')
        }

    }, [serverName])


    const currentServer = useSelector((state) => state.server[`${serverId}`]);
    // console.log('currentServer!!!!!!!!', currentServer)
    // currentServer[`${serverId}`]
    // console.log('showError!!!!', showError)

    const handleDelete = async (e) => {
        setHasSubmitted(true);

        if (currentServer.name !== serverName) {
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
                            <h2>Delete {currentServer?.name}</h2>
                        </div>
                        <div className="s-delete-warning">
                            <span className="d-s-1">Are you sure you want to delete </span>
                            <span className="s-d-s-2">{currentServer?.name}?</span>
                            <span className="d-s-3">
                                This cannot be undone.
                            </span>
                        </div>
                    </div>

                    <span className="error-message">
                    {hasSubmitted && !!showError.length && (
                                <span id='errors4-list'>
                                    <span className='error5-list'>
                                        <li id='errors' >{showError}</li>
                                    </span>
                                </span>
                            )}
                            </span>
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
