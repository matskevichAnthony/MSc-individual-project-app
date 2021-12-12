const initialState = {
    title: "none"
};

const getEventsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MARKER_TOGGLE':
            return [...state, action.self.isToggledtrue];
        default:
            return state;
    }
}

export default getEventsReducer;