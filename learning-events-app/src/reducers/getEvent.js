import Events from "../data/Events";

const defaultState = {
    lol: "lol",
};


const getEventReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default getEventReducer;