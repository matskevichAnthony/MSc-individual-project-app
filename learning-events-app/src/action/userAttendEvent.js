const userAttendEvent = (event) => {
    console.log(event.payload);
    return { type: "USER_ATTEND_EVENT", payload: event.payload };
}
export default userAttendEvent;