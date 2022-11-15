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
                const messageList = newState.messages?.map(id => newState[id]);
                messageList?.push(action.message);
                newState.messages = messageList;

                return newState;
            }
            return {
                ...state,
            };
        // case DELETE_MESSAGE:
        //     const newMessages = state.messages.filter(message => message.id === action.messageId)
        //     newState = { ...state, messages: newMessages }
        //     return newState;
        default:
            return state;
    }
};
export default messageReducer;
