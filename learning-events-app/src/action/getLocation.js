const getLocation = (event) => {
    return { type: "GET_LOCATION", payload: event };
}
export default getLocation;