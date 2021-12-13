import cookie from 'react-cookies';

export const getEventsAttended = () => {

    return async dispatch => {
        const authData = cookie.load("authData");

        const response = await fetch("http://localhost/events_backend/public/events?attends=1", {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token,
            }
        });
        const json = await response.json();
        dispatch({
            type: 'GET_EVENTS_ATTENDED',
            payload: json
        })

    }
};

export const addEventAttended = (event) => {

    return async dispatch => {

        const authData = cookie.load("authData");

        const response = await fetch(`http://localhost/events_backend/public/events/${event.id}/join`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token
            },
        });
        const json = await response.json();
        dispatch({
            type: 'ADD_EVENT_ATTENDED',
            payload: json
        })
    }
};

export const leaveEventAttended = (event) => {
    console.log(event.id);
    return async dispatch => {

        const authData = cookie.load("authData");

        const response = await fetch(`http://localhost/events_backend/public/events/${event.id}/leave`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token
            },
        });
        const json = await response.json();
        dispatch({
            type: 'ADD_EVENT_ATTENDED',
            payload: json
        })
        window.location.reload();
    }
};