const ADD_SERVER = 'servers/addServer'
const LOAD_ONE = "servers/:serverId"
const LOAD_ALL = 'servers/all'
const LOAD_DM = 'servers/dm'
// const CURRENT_DM = "servers/current/dm"
// const CURRENT = "servers/current"
const EDIT_SERVER = 'servers/editCurrentServer'
const DELETE_SERVER = 'servers/delete'


export const addServer = (server) => {
    return {
        type: ADD_SERVER,
        server
    };
};
export const loadOne = (server) => {
    return {
        type: LOAD_ONE,
        server
    }
}
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
// export const current = (servers) => {
//     return {
//         type: CURRENT,
//         servers
//     }
// }
// export const currentDm = (servers) => {
//     return {
//         type: CURRENT_DM,
//         servers
//     }
// }
export const editServer = (server) => {
    return {
        type: EDIT_SERVER,
        server
    };
};

export const deleteServer = (id) => {
    return {
        type: DELETE_SERVER,
        id
    };
};
export const getAllServers = () => async dispatch => {
    const response = await fetch(`/api/servers`);
    if (response.ok) {
      const servers = await response.json();
      //console.log("THUNK SERVERS :", servers)
      const result = dispatch(loadAll(servers.servers))
      //console.log("RESULT OF DISPATCHING :", result)
      return result
    }
  };
  export const getPersonalServers = () => async dispatch => {
    const response = await fetch(`/api/servers/current`);
    if (response.ok) {
      const servers = await response.json();
      //console.log("THUNK SERVERS :", servers)
      const result = dispatch(loadAll(servers.servers))
      //console.log("RESULT OF DISPATCHING :", result)
      return result
    }
  };
export const thunkAddServer = (data) => async dispatch => {
    const { name, img, description } = data

    const response = await fetch(`/api/servers/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, img, description }),
    })
    if (response.ok) {
        const newServer = await response.json();
        dispatch(addServer(newServer))
        return newServer
    }
}


export const thunkLoadOneServer = (serverId) => async (dispatch) => {

    const response = await fetch(`/api/servers/${serverId}`)
    if (response.ok) {
        const server = await response.json();
        dispatch(loadOneServer(server))
        return server
    }
}

export const thunkEditServer = (data) => async dispatch => {
    const { name, img, description } = data;



    const response = await fetch(`/api/servers/${serverId}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, img, description }),
    })
    if (response.ok) {
        const newServer = await response.json();
        dispatch(addServer(newServer))
        return newServer
    }

    if (response.ok) {
        const editedServer = await response.json();
        dispatch(editServer(editedServer));
        return editedServer;
    }
}

export const thunkDeleteOneServer = (serverId) => async dispatch => {
    const response = await fetch(`/api/servers/${serverId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        const toDelete = await response.json();
        dispatch(deleteServer(serverId));
    } action
}


const serverReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        //separate loads for regular and dm servers
        case LOAD_ALL:
            //console.log("GET SERVERS ACTION :", action)
            return { ...newState, servers: [...action.servers] };
        case LOAD_DM:
            //console.log("GET SERVERS ACTION :", action)
            return { ...newState, dmServers: [...action.servers] };
        case GET_ONE_SERVER:
            newState = { ...state, [action.server.id]: action.server }
            return newState
        case ADD_SERVER:
            // if there is a server already, skip this and go straight to overwriting it
            if (!state[action.server.id]) {
                newState = {
                    ...state,
                    [action.server.id]: action.server
                };
                const serverList = newState.servers.map(id => newState[id]);
                serverList.push(action.server);
                newState.servers = serverList;

                return newState;
            }
            return {
                ...state,
            };
        case REMOVE_SERVER:
            const newServers = state.servers.filter(server => server.id === action.serverId)
            newState = { ...state, servers: newServers }
            return newState;
        default:
            return state;
    }
};
export default serverReducer;
