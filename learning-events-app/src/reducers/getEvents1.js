const defaultState = [{
    lol: "lol",
}];

const getEventsReducer1 = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENTS1':
            return action.payload;
        case 'ADD_EVENT1':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default getEventsReducer1;