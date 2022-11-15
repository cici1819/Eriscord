<<<<<<< HEAD


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
=======
const LOAD_ONE = "messages/:messageId"
const ADD_MESSAGE = 'messages/addMessage'
const LOAD_ALL = 'messages/all'
export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    };
};
export const loadAll = (messages) => {
    return {
        type: LOAD_ALL,
        messages
    }
}
export const getRegularMessages = () => async dispatch => {
    const response = await fetch(`/api/messages/regular`);
    if (response.ok) {
      const messages = await response.json();
      console.log("THUNK MESSAGES :", messages)
      const result = dispatch(loadAll(messages.messages))
      //console.log("RESULT OF DISPATCHING :", result)
      return result
    }
  };
  export const getDMMessages = () => async dispatch => {
    const response = await fetch(`/api/messages/dm`);
    if (response.ok) {
      const messages = await response.json();
      //console.log("THUNK MESSAGES :", messages)
      const result = dispatch(loadAll(messages.messages))
      //console.log("RESULT OF DISPATCHING :", result)
      return result
    }
  };
  export const channelAddMessage = (data) => async dispatch => {
    const { content, channel_id, server_id } = data
    const response = await fetch(`/api/messages/channels/${channel_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content,channel_id,server_id }),
    })
    if (response.ok) {
        const newMessage = await response.json();
        dispatch(addMessage(response))
        return newMessage
    }
}
  const messageReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {

        case LOAD_ALL:
            //console.log("GET MESSAGES ACTION :", action)
            return { ...state, ...newState, messages: [...action.messages] };
        case ADD_MESSAGE:
            // if there is a message already, skip this and go straight to overwriting it
            if (!state[action.message.id]) {
                newState = {
                    ...state,
                    [action.message.id]: action.message
                };
                const messageList = newState.messages.map(id => newState[id]);
                messageList.push(action.message);
                newState.messages = messageList;

                return newState;
            }
            return {
                ...state,
            };
        case DELETE_MESSAGE:
            const newMessages = state.messages.filter(message => message.id === action.messageId)
            newState = { ...state, messages: newMessages }
            return newState;
        default:
            return state;
    }
};
export default messageReducer;
>>>>>>> 39f60fc7265ab94c3eb241992140a783af6e4f20
