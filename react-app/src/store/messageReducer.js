

// const ADD_MSG_TO_CHANNEL = 'messages/addOneMessage'
// const LOAD_MSG_IN_CHANNEL = 'messages/loadMsgInChannel'


// export const addMsgToChannel = (msg) => {
//     return {
//         type: ADD_MSG_TO_CHANNEL,
//         msg
//     };
// };

// export const loadMsgInChannel = (msg) => {
//     return {
//         type: LOAD_MSG_IN_CHANNEL,
//         msg
//     }
// }



// export const thunkAddMsgToChannel = (data) => async dispatch => {
//     const { name } = data
//     const server_id = data.serverId
//     const topic = " add a topic"

//     const response = await fetch(`/api/channels/new`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ server_id, name ,topic}),
//     })
//     // console.log('!!!!!!response', response)
//     if (response.ok) {
//         const newChannel = await response.json();
//         dispatch(addChannelToServer(newChannel))
//         // console.log('newChannel!!!!!!', newChannel)
//         return newChannel
//     }
// }


// export const thunkLoadoneChannel = (channelId) => async (dispatch) => {

//     const response = await fetch(`/api/channels/${channelId}`)
//     // console.log('herre')
//     // console.log('response', response)
//     if (response.ok) {
//         const channel = await response.json();
//         // console.log("!!!!!!!!channel!!!!!!!!!!", channel)
//         dispatch(loadOneChannel(channel))
//         return channel
//     }
// }


// const messageReducer = (state = {}, action) => {
//     switch (action.type) {

//         case LOAD_MSG_IN_CHANNEL:
//             // console.log("action!!!!!!!!", action)
//             let channelState = { ...state }
//             // console.log("!!!!!!!!",action.spot)
//             msgState[action.channel.id] = action.channel
//             // console.log("!!!!!!!!", spotState)
//             return msgState

//         case ADD_MSG_TO_CHANNEL:
//             // console.log('!!!action', action)
//             return { ...state, [action.channel.id]: { ...action.channel } };


//         default:
//             return state;
//     }
// }

// export default messageReducer;
