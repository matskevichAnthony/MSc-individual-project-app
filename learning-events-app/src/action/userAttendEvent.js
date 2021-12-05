const userAttendEvent = (event) => {
    return { type: "USER_ATTEND_EVENT", payload: event.payload };
}
export default userAttendEvent;