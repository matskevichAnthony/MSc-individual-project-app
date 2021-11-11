import { GoogleMap, useJsApiLoader, LoadScript } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import NormalMarker from '../Markers/NormalMarker';
import { v4 as uuidv4 } from "uuid";
import Events from '../../data/Events';
import eventsType from '../../data/eventsType';
import { React, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addEvent from '..//..//action/addEvent';
import CreateEvent from '../CreateEvent';
import { CreateEventButton } from './styled';

const ApplicationMap = () => {

    const dispatch = useDispatch();
    const [markerStatus, setMarkerStatus] = useState(false);
    const [markerIsChosen, setMarkerIsChosen] = useState(false);
    let GEO = {};

    const getLocation = (e) => {
        GEO = e.latLng.toJSON();
        console.log(e.latLng.toJSON());
        setMarkerIsChosen(true);
        setMarkerStatus(!markerStatus);
        dispatch({ type: "GET_LOCATION", payload: e.latLng.toJSON() });
    }

    const locationSelected = useSelector((state) => state.getLocation)
    console.log(locationSelected);
    const events = useSelector((state) => state.getEvents);

    const containerStyle = {
        width: '100%',
        height: '94vh'
    };

    const center = {
        lat: 52.763338,
        lng: 36.565466
    }


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
        mapId: "dd081edb5f80f8b1"
    }

    return isLoaded ? (
        <GoogleMap onClick={markerStatus ? (e) => getLocation(e) : console.log("nope")}

            mapContainerStyle={containerStyle}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultMapOptions}
            center={center}
        >
            {events.map((event) =>
                <NormalMarker self={event} position={event.GEO} InfoText={event.event} iconSettings={{
                    url: 'https://static.thenounproject.com/png/98497-200.png',
                    scaledSize: new window.google.maps.Size(50, 50)
                }} ></NormalMarker>
            )}

            {markerIsChosen ? <CreateEvent information={GEO} /> : <></>}

            {
                markerStatus ? <></> : <CreateEventButton onClick={() => setMarkerStatus(!markerStatus)}>Create Event!</CreateEventButton>
            }

        </GoogleMap >
    ) : <></>
}

export default ApplicationMap