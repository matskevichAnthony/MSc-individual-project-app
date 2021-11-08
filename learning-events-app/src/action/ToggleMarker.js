const addEvent = (event) => {
    console.log(event);
    return { type: "MARKER_TOGGLE", payload: event };
}
export default addEvent;