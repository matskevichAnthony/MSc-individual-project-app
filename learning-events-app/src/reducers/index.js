import isLogged from './isLogged';
import userReducer from './getUserInfo';
import { combineReducers } from 'redux';
import getLocationReducer from './getLocation';
import getEventsReducer from './getEvents';
import authReducer from './auth';

const allReducers = combineReducers({
    isLogged: isLogged,
    getEvents: getEventsReducer,
    getLocation: getLocationReducer,
    userReducer: userReducer,
    authReducer: authReducer,
});

export default allReducers;