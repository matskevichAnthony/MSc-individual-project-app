import Events from "../data/Events";

const getEventsReducer = (state = Events(), action) => {

    // const x = state.find((current) => current.id === action.self.id)
    // console.log(x);
    console.log(action.self);
    switch (action.type) {
        case 'MARKER_TOGGLE':
            return [...state, action.self.isToggledtrue];
        default:
            return state;
    }
}

export default getEventsReducer;