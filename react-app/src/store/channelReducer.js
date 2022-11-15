// import { csrfFetch } from "./csrf";

const ADD_CHANNEL_TO_SERVER = 'channels/addChannelToServer'
const LOAD_ONE_CHANNEL = 'channels/loadOnechannel'
const EDIT_CHANNEL = 'channels/editCurrentChannel'
const DELETE_CHANNEL = 'channels/deleteOneChannel'


export const addChannelToServer = (channel) => {
    return {
        type: ADD_CHANNEL_TO_SERVER,
        channel
    };
};

export const loadOneChannel = (channel) => {
    return {
        type: LOAD_ONE_CHANNEL,
        channel
    }
}

export const editOneChannel = (channel) => {
    return {
        type: EDIT_CHANNEL,
        channel
    };
};

export const deleteOneChannel = (id) => {
    return {
        type: DELETE_CHANNEL,
        id
    };
};


export const thunkAddChannelToServer = (data) => async dispatch => {
    const { name } = data
    const server_id = data.serverId
    const topic = " add a topic"
    // console.log('thunk++++', {data})
    // console.log('thunk!!!!', server_id, name, topic)

    const response = await fetch(`/api/channels/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ server_id, name, topic }),
    })
    // console.log('!!!!!!response', response)
    if (response.ok) {
        const newChannel = await response.json();
        dispatch(addChannelToServer(newChannel))
        // console.log('newChannel!!!!!!', newChannel)
        return newChannel
    }
}


export const thunkLoadoneChannel = (channelId) => async (dispatch) => {

    const response = await fetch(`/api/channels/${channelId}`)
    // console.log('herre')
    // console.log('response', response)
    if (response.ok) {
        const channel = await response.json();
        // console.log("!!!!!!!!channel!!!!!!!!!!", channel)
        dispatch(loadOneChannel(channel))
        return channel
    }
}

export const thunkEditOneChannel = (data) => async dispatch => {
    const { name, topic, channelId, serverId } = data;


    // console.log('herre')
    console.log('data', name, topic)

    const response = await fetch(`/api/channels/${channelId}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name, topic, serverId, channelId
        }),
    });

    console.log('response', response)

    if (response.ok) {
        const editedChannel = await response.json();
        // console.log('spot!!!!!!!!!!!!', spot)
        dispatch(editOneChannel(editedChannel));
        return editedChannel;
    }
}

export const thunkDeleteOneChannel = (channelId) => async dispatch => {
    const response = await fetch(`/api/channels/${channelId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        // const channelToDelete = await response.json();
        dispatch(deleteOneChannel(channelId));
    }
}


const channelReducer = (state = {}, action) => {
    switch (action.type) {

        case LOAD_ONE_CHANNEL:
            // console.log("action!!!!!!!!", action)
            let channelState = { ...state }
            // console.log("!!!!!!!!",action.spot)
            channelState[action.channel.id] = action.channel
            // console.log("!!!!!!!!", spotState)
            return channelState

        case ADD_CHANNEL_TO_SERVER:
            // console.log('!!!action', action)
            return { ...state, [action.channel.id]: { ...action.channel } };

        case EDIT_CHANNEL:
            // console.log('action!!!!!!!!!!!!', action.spot)
            return { ...state, [action.channel.id]: { ...state[action.channel.id], ...action.channel } }

        case DELETE_CHANNEL:
            let newState = { ...state }
            // console.log('!!!action', action)
            delete newState[action.id]
            return newState

        default:
            return state;
    }
}

export default channelReducer;
