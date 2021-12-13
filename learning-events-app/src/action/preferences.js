import cookie from "react-cookies";

export const updatePreferences = (userData) => {
    return async dispatch => {
        const authData = cookie.load("authData");
        const data = new URLSearchParams();
        Object.keys(userData).forEach(key => {
            data.append(key, userData[key]);
        });

        const response = await fetch('http://localhost/events_backend/public/preferences', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                Authorization: "Bearer " + authData.token,
            },
            body: data,
        });

        const json = await response.json();

        console.log(json);

        dispatch({ type: "UPDATE_PREFERENCES", payload: "" });
    }
};

export const getPreferences = () => {
    return async (dispatch) => {
        const authData = cookie.load("authData");
        const response = await fetch('http://localhost/events_backend/public/preferences', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token,
            }
        });
        const json = await response.json();
        dispatch({ type: "GET_PREFERENCES", payload: json });
    }
};