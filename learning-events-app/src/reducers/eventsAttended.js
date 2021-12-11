const defaultState = [{
    lol: "lol",
}];

const getEventsAttendedReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENTS_ATTENDED':
            return action.payload;
        case 'ADD_EVENT_ATTENDED':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default getEventsAttendedReducer;