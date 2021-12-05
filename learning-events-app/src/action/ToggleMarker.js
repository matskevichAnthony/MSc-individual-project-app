const addEvent = (event) => {
    return { type: "MARKER_TOGGLE", payload: event };
}
export default addEvent;