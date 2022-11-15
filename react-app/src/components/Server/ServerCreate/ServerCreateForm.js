import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router";
import { thunkAddServer, getPersonalServers } from "../../../store/serverReducer";
import './ServerCreate.css';


function ServerCreate({ setShowModal }) {
    const dispatch = useDispatch();
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    // const { channelId, serverId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const serverPayload = { name, img, description }
        // console.log("serverPayload", name, img, description)
        // console.log("!!!!!frontend", channelPayload)
<<<<<<< HEAD
        let createdServer = await dispatch(thunkAddServer(serverPayload)).catch(async (res) => {

            const data = await res.json();
            // console.log("THIS IS RES :",res)
            if (data && data.errors) {
                setErrors(data.errors)
            };
        });
=======
        let createdServer = await dispatch(thunkAddServer(serverPayload))
        //     .catch(async (res) => {

        //     const data = await res.json();
        //     console.log("THIS IS RES :",res)
        //     if (data && data.errors) {
        //         setErrors(data.errors)
        //     };
        // });
>>>>>>> 3cca7591641262055026466a4d0f4c200b70959a
        console.log("createdServer+++++++", createdServer)
        if (createdServer) {

            await dispatch(getPersonalServers())
            await setShowModal(false);
            await history.push(`/channels/${createdServer.id}`)
        }
    }


    return (
        <>

            <div className="tbd">
                <form className="tbd" onSubmit={handleSubmit}>

                    <div className="tbd"> this is where to create the new server

                        <div className="tbd">

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
                        </div>

                    </div>

                    <div className="tbd">
                        <div className="tbd">
                            <button type="submit">Create Server</button>
                        </div>

                    </div>

                </form>

            </div>

        </>
    )
}




export default ServerCreate;
