import Events from "../data/Events";

const getEventsReducer = (state = Events(), action) => {

    switch (action.type) {
        case 'MARKER_TOGGLE':
            return [...state, action.self.isToggledtrue];
        default:
            return state;
    }
}

export default getEventsReducer;