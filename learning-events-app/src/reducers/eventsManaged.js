const defaultState = [{
    lol: "lol",
}];

const getEventsManagedReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENTS_ATTENDED':
            return action.payload;
        default:
            return state;
    }
}

export default getEventsManagedReducer;