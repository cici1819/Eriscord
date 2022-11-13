import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { thunkAddChannelToServer } from "../../../store/channelReducer";
import './ChannelCreate.css';


function ChannelCreate({setShowModal}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        let serverId = 5

        const channelPayload = { name, topic }
        channelPayload.serverId = serverId
        // console.log("!!!!!frontend", channelPayload)
        let createdChannel = await dispatch(thunkAddChannelToServer(channelPayload)).catch(async (res) => {

            const data = await res.json();

            if (data && data.errors) {
                setErrors(data.errors)
            };
        });

        if (createdChannel) {
            // history.push(`/`)
            console.log(createdChannel)
        }
    }


    return (
        <>
            <hr></hr>
            <>
                This gonna be the channel create!
            </>
            <div>
                <form onSubmit={handleSubmit}>

                        <label > NAME </label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>


                        <label >TOPIC</label>
                        <input type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required/>

                    <button type="submit">Create Channel</button>

                </form>
            </div>
        </>
    )
}




export default ChannelCreate;
