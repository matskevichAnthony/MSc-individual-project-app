const userAddEvent = (event) => {
    console.log(event);
    return { type: "USER_ADD_EVENT", payload: event };
}
export default userAddEvent;