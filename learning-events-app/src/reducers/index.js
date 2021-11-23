import counterReducer from "./couter";
import isLogged from "./isLogged";
import getEventsReducer from "./getEvents";
import ToggleMarker from "./ToggleMarker"
import userReducer from "./getUserInfo";
import { combineReducers } from 'redux';
import getLocationReducer from "./getLocation";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLogged,
    getEvents: getEventsReducer,
    toggleMarker: ToggleMarker,
    getLocation: getLocationReducer,
    userReducer: userReducer

});

export default allReducers;