const ADD_SERVER = 'servers/addServer'
const LOAD_ALL = 'servers/all'
const LOAD_DM= 'servers/dm'
const CURRENT_DM= "servers/current/dm"
const CURRENT= "servers/current"
const EDIT_SERVER = 'servers/editCurrentServer'
const DELETE_SERVER = 'servers/delete'


export const addServer = (server) => {
    return {
        type: ADD_SERVER,
        server
    };
};

export const loadAll = (servers) => {
    return {
        type: LOAD_ALL,
        servers
    }
}
export const loadDm = (servers) => {
    return {
        type: LOAD_DM,
        servers
    }
}
export const current = (servers) => {
    return {
        type: CURRENT,
        servers
    }
}
export const currentDm = (servers) => {
    return {
        type: CURRENT_DM,
        servers
    }
}
export const editOneServer = (server) => {
    return {
        type: EDIT_SERVER,
        server
    };
};

export const deleteOneServer = (id) => {
    return {
        type: DELETE_SERVER,
        id
    };
};


export const thunkAddServerToServer = (data) => async dispatch => {
    const { name, topic } = data
    const server_id = data.serverId

    const response = await fetch(`/api/servers/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ server_id, name, topic }),
    })
    if (response.ok) {
        const newServer = await response.json();
        dispatch(addServerToServer(newServer))
        return newServer
    }
}


export const thunkLoadoneServer = (serverId) => async (dispatch) => {

    const response = await fetch(`/api/servers/${serverId}`)
    if (response.ok) {
        const server = await response.json();
        dispatch(loadOneServer(server))
        return server
    }
}

export const thunkEditOneServer = (data) => async dispatch => {
    const { name, topic } = data;

    let serverId = 20

    console.log('data', name, topic)

    const response = await fetch(`/api/servers/${serverId}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name, topic
        }),
    });

    console.log('response', response)

    if (response.ok) {
        const editedServer = await response.json();
        dispatch(editOneServer(editedServer));
        return editedServer;
    }
}

export const thunkDeleteOneServer = (serverId) => async dispatch => {
    const response = await fetch(`/api/servers/${serverId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        const serverToDelete = await response.json();
        dispatch(deleteOneServer(serverId));
    }
}


const serverReducer = (state = {}, action) => {
    switch (action.type) {

        case LOAD_ALL:
            let serverState = { ...state }
            serverState[action.server.id] = action.server
            return serverState

        case ADD_SERVER:
            return { ...state, [action.server.id]: { ...action.server } };

        case EDIT_SERVER:
            return { ...state, [action.server.id]: { ...state[action.server.id], ...action.server } }

        case DELETE_SERVER:
            let newState = { ...state }
            delete newState[action.id]
            return newState

        default:
            return state;
    }
}

export default serverReducer;
