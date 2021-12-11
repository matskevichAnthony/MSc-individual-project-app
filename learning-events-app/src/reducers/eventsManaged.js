const defaultState = [{
    lol: "lol",
}];

const getEventsManagedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_EVENTS_MANAGED':
            return action.payload;
        default:
            return state;
    }
}

export default getEventsManagedReducer;