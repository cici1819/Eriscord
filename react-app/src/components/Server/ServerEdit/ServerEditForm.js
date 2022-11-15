import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { thunkEditServer } from "../../../store/serverReducer";
import './ServerEdit.css';


function ServerEdit({setShowModal}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const { channelId, serverId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const editedServerPayload = { name, img, description }
        editedServerPayload.channelId = channelId
        // console.log("!!!!!editedServerPayload", editedServerPayload)
        let editedServer = await dispatch(thunkEditServer(editedServerPayload)).catch(async (res) => {

            const data = await res.json();

            if (data && data.errors) {
                setErrors(data.errors)
            };
        });

        if (editedServer) {
            // history.push(`/`)
            console.log(editedServer)
        }
    }


    return (
        <>
            <hr></hr>
            <>
                This form you edit the server
            </>
            <div>
                <form onSubmit={handleSubmit}>

                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="SERVER NAME"
                        required />
                    <input type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        placeholder="SERVER ICON"
                        required />
                    <input type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="SERVER DESCRIPTION"
                    />

                    <button type="submit">Edit Server</button>
                </form>
                <hr></hr>
                <div>
                    {/* <ServerDelete /> */}
                </div>
            </div>
        </>
    )
}




export default ServerEdit;
