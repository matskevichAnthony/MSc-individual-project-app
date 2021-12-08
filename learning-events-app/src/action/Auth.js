import cookie from "react-cookies";

//ASYNC REQUEST TO CHECK WETHER I AM LOGGED OR NAH, I NEED TO CHECK IF TOKEN IS NOT EXPIRED YET

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
