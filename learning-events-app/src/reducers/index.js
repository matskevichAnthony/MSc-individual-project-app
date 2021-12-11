import isLogged from './isLogged';
import getEventsReducer from './getEvents';
import ToggleMarker from './ToggleMarker'
import userReducer from './getUserInfo';
import { combineReducers } from 'redux';
import getLocationReducer from './getLocation';
import getEventsReducer1 from './getEvents1';
import getEventsAttendedReducer from './eventsAttended';
import authReducer from './auth';
import getEventReducer from './getEvent';

const allReducers = combineReducers({
    isLogged: isLogged,
    getEvents: getEventsReducer,
    getEvents1: getEventsReducer1,
    getEventsAttended: getEventsAttendedReducer,
    getEvent: getEventReducer,
    toggleMarker: ToggleMarker,
    getLocation: getLocationReducer,
    userReducer: userReducer,
    authReducer: authReducer,
});

export default allReducers;