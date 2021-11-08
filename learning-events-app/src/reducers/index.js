import counterReducer from "./couter";
import isLogged from "./isLogged";
import getEventsReducer from "./getEvents";
import ToggleMarker from "./ToggleMarker"
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLogged,
    getEvents: getEventsReducer,
    toggleMarker: ToggleMarker

});

export default allReducers;