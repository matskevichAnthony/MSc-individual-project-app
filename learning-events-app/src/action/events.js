import cookie from 'react-cookies';

export const getEvents = () => {

    return async dispatch => {
        const authData = cookie.load("authData");

        const response = await fetch("http://localhost/events_backend/public/events", {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token,
            }
        });
        const json = await response.json();
        dispatch({
            type: 'GET_EVENTS1',
            payload: json
        })

    }
};

export const addEvent = (data_id, data_title, data_description, data_lat, data_lng, data_address, data_place, data_date, data_price) => {

    return async dispatch => {

        const eventData = {
            event_type_id: 1,
            title: data_title,
            description: data_description,
            geo_lat: data_lat,
            geo_lng: data_lng,
            address: data_address,
            place: data_place,
            event_date: data_date,
            price: data_price,
        };

        console.log(eventData)

        const authData = cookie.load("authData");

        const response = await fetch("http://localhost/events_backend/public/events", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token
            },
            body: JSON.stringify(eventData)
        });
        const json = await response.json();
        console.log("ADDED NEW ONE !!!!!!!")
        console.log(json)
        dispatch({
            type: 'ADD_EVENTS1',
            payload: json
        })

    }
};

export const getEvent = (id) => {

    return async dispatch => {
        const authData = cookie.load("authData");

        const response = await fetch(`http://localhost/events_backend/public/events/${id}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token,
            }
        });
        const json = await response.json();
        dispatch({
            type: 'GET_EVENT',
            payload: json
        })

    }
};