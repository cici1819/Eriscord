import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { thunkEditServer, getPersonalServers } from "../../../store/serverReducer";
import './ServerEdit.css';


function ServerEdit({ setShowModal }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const { serverId } = useParams();


    useEffect(() => {
        let errors = [];

        if (!img.includes('.com') && !img.includes('.jpg') && !img.includes('.png') && !img.includes('.jpeg')) {
          errors.push('please provide a valid image URL!')
        }
        // console.log(typeof Number(price))
        setValidationErrors(errors)
      }, [img])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) { return }
        // console.log('serverId', serverId)

        const editedServerPayload = { serverId, name, img, description }
        editedServerPayload.serverId = serverId
        // console.log("!!!!!editedServerPayload", editedServerPayload)
        let editedServer = await dispatch(thunkEditServer(editedServerPayload))
        //     .catch(async (res) => {

        //     const data = await res.json();

        //     if (data && data.errors) {
        //         setErrors(data.errors)
        //     };
        // });

        if (editedServer) {
            setShowModal(false);
            dispatch(getPersonalServers())
        }
    }


    return (
        <>

            <div>
            {hasSubmitted && !!validationErrors.length && (<div>
            <ul>
              {validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>)}
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
