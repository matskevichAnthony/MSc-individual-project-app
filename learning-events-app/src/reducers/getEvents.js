import Events from "../data/Events";

const getEventsReducer = (state = Events(), action) => {
    console.log(state[0]);
    switch (action.type) {
        case 'GET_EVENTS':
            return state;
        case 'ADD_EVENT':
            return [...state, action.payload];
        case 'REMOVE_EVENT':
            return state - 1;
        default:
            return state;
    }
}

export default getEventsReducer;