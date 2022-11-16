import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router";
import { thunkAddServer, getPersonalServers } from "../../../store/serverReducer";
import './ServerCreate.css';
import creatMyownLogo from "../../../img/create-server-form-icon.png"


function ServerCreate({ setShowModal }) {
    const dispatch = useDispatch();
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    // const { channelId, serverId } = useParams();

    console.log(validationErrors)

    useEffect(() => {
        const errors = [];
        if (!img.includes('.com') && !img.includes('.jpg') && !img.includes('.png') && !img.includes('.jpeg')) {
            errors.push('please provide a valide image URL!')
        }
        if (name.length > 50) {
            errors.push("Name should be less than 50 characters")
        }
        if (name.length < 4) {
            errors.push("Name should be more than 3 characters")
        }
        setValidationErrors(errors);
    }, [img, name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) {
            console.log("ERRORS FOUND :", validationErrors)
        } else {
            const serverPayload = { name, img, description }
            // console.log("serverPayload", name, img, description)
            // console.log("!!!!!frontend", channelPayload)
            let createdServer = await dispatch(thunkAddServer(serverPayload)).catch(async (res) => {

                const data = await res.json();
                // console.log("THIS IS RES :",res)
                if (data && data.errors) {
                    setErrors(data.errors)
                };
            });
            console.log("createdServer+++++++", createdServer)
            if (createdServer) {

                await dispatch(getPersonalServers())
                await setShowModal(false);
                await history.push(`/channels/${createdServer.id}`)
            }
        }

    }


    return (
        <>

            <div className="creat-server-container">
                <form className="creat-server-form" onSubmit={handleSubmit}>

                    <div className="creat-server-content">
                        <div className="creat-sever-title">
                        <div className="c-s-text-top">
                            <h1>
                                Create a server
                            </h1>
                            <div className="mark-logo2">
                                <img className='close-x-img2' src='https://static.thenounproject.com/png/1144486-200.png' alt='close' onClick={() => setShowModal(false)} />
                            </div>
                            <div className="creat-sever-title2">
                                <p>Your server is where you and your friends hang out.Make</p>
                                <p className="next-line-p">yours and start talking.</p>
                            </div>
                        </div>
                            {hasSubmitted && !!validationErrors.length && (
                                <div className='error3-lists'>
                                    <ul className='error-list'>
                                        {validationErrors.map((error) => <li id='errors' key={error}>{error}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="creat-my-own">
                            <img src={creatMyownLogo} alt="creat my own" />
                            <span className="creat-my-own-text">
                                Create My Own
                            </span>

                        </div>

                        <div className="creat-server-input">
                            <div className="s-input-title">
                                SERVER NAME
                            </div>
                            <div className="s-c-input1">
                                <input type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className="s-input-title2">
                                SERVER ICON
                            </div>
                            <div className="s-c-input2">
                                <input type="text"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    required />
                            </div>
                            <div className="s-input-title3">
                                SERVER DESCRIPTION
                            </div>
                            <div className="s-c-input3">
                                <input type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                        </div>

                    </div>

                </form>

                <div className="create-server-button">
                    <button type="submit" onClick={handleSubmit}>Create Server</button>
                </div>



            </div>

        </>
    )
}




export default ServerCreate;
