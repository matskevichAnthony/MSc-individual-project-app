const getUserInfo = (event) => {
    return { type: "GET_USER_INFO", payload: event };
}
export default getUserInfo;