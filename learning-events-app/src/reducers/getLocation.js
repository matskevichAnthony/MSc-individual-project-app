import Events from "../data/Events";

const getLocationReducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_LOCATION':
            return state = action.payload;
        default:
            return state;
    }
}

export default getLocationReducer;