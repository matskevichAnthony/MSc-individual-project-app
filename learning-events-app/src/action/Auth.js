import cookie from "react-cookies";

export const register = (userData) => {
    return async (dispatch) => {
        const data = new URLSearchParams();
        Object.keys(userData).forEach(key => {
            data.append(key, userData[key]);
        });

        fetch('http://localhost/events_backend/public/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: data,
        }).then(() => {
            console.log("CREATED NEW USER!");
        })

        dispatch({ type: "USER_REGISTER", payload: "" });
    }
};

export const authenticate = (login, password, token) => {
    console.log(token + " IT IS A TOKEN");
    return (dispatch) => {
        const authData = {
            login,
            password,
            token,
        };

        cookie.save("authData", authData, { path: "/" });
        dispatch({
            type: "AUTH_USER",
            payload: {
                isAuth: true,
                login,
                password,
                token,
            },
        });
    };
};

export const checkLogin = () => {
    return (dispatch) => {
        const authData = cookie.load("authData");
        const checkToken = async (token) => {
            console.log(token);
            return fetch("http://localhost/events_backend/public/auth/me", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }).then((res) => {
                if (res.ok) {
                    dispatch({
                        type: "AUTH_USER",
                        payload: {
                            isAuth: !!authData,
                            ...authData,
                        },
                    });
                } else {
                    dispatch({
                        type: "AUTH_USER",
                        payload: {
                            isAuth: false,
                            ...authData,
                        },
                    });
                }
            });
        };
        if (authData) {
            checkToken(authData.token);
        } else {
            console.log("no data provided")
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        cookie.remove("authData");
        dispatch({
            type: "AUTH_USER",
            payload: {
                isAuth: false,
                login: "",
                password: "",
                token: "",
            },
        });
    };
};

export const updateUser = (userInfo) => {

    return async dispatch => {

        const authData = cookie.load("authData");

        const response = await fetch("http://localhost/events_backend/public/auth/me", {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authData.token
            },
            body: JSON.stringify(userInfo)
        });
        const json = await response.json();
        console.log("***");
        console.log("updated");
        console.log("***");
        dispatch({
            type: 'UPDATE_USER',
            payload: '',
        })

    }
};