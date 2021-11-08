const addEvent = (event) => {
    console.log(event);
    return { type: "ADD_EVENT", payload: event };
}
export default addEvent;