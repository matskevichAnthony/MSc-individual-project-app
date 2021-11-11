const getLocation = (event) => {
    console.log(event);
    return { type: "GET_LOCATION", payload: event };
}
export default getLocation;