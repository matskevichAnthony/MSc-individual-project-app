const defaultState = {
    lol: "lol",
    user_attends: [],
};


const getEventReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default getEventReducer;