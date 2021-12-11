const defaultState = [{
    lol: "lol",
}];

const getEventTypesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_EVENT_TYPES':
            return action.payload;
        default:
            return state;
    }
}

export default getEventTypesReducer;