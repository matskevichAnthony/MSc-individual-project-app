
const defState = {
    isLoaded: false,
    event_type: [],
    events: [],
    attends: [],
    managed: [],
    event: {},
    preferences: [],
};

const getEventsReducer = (state = defState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENTS':
            return { ...state, events: action.payload };
        case 'ADD_EVENT':
            return { ...state, events: action.payload };
        case 'GET_EVENT':
            return { ...state, event: action.payload };
        case 'GET_EVENTS_MANAGED':
            return { ...state, managed: action.payload };
        case 'GET_EVENTS_ATTENDED':
            return { ...state, attends: action.payload };
        case 'ADD_EVENT_ATTENDED':
            return { ...state, attends: [action.payload] };
        case 'GET_EVENT_TYPES':
            return { ...state, event_type: action.payload };
        case 'GET_PREFERENCES':
            return { ...state, preferences: action.payload };
        case 'UPDATE_PREFERENCES':
            return { ...state, preferences: action.payload };
        default:
            return state;
    }
}

export default getEventsReducer;