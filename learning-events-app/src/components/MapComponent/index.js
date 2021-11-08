import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import { v4 as uuidv4 } from "uuid";
import Events from '../../data/Events';
import eventsType from '../../data/eventsType';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addEvent from '..//..//action/addEvent';
import Regular from '../Markers/Regular';



const MapComponent = () => {

    const testObj = {
        id: uuidv4(),
        event: "Programming and Coffee",
        eventType: eventsType[3],
        description: "Today we are going to learn how to use python and drink some nice coffee",
        place: "Icon Club",
        GEO: {
            lat: 52.763338,
            lng: 36.365466
        },
        address: "",
        placesAvailable: 15,
        minAge: 18,
        price: "20$",

    };

    const events = useSelector((state) => state.getEvents);
    const dispatch = useDispatch();

    const containerStyle = {
        width: '100%',
        height: '94vh'
    };

    const center = {
        lat: 53.763338,
        lng: 36.565466
    }

    const clicker = () => {
        let x = window.google.maps
        console.log(x);
    }

    return (
        <LoadScript
            gooapsApiKey="AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4" gleM
        >
            <button onClick={() => clicker}>click</button>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                disableDefaultUI={true}
            >
                {events.map((event) =>
                    <Marker position={event.GEO} icon={{
                        url: 'https://static.thenounproject.com/png/98497-200.png',
                    }}></Marker>
                )}
            </GoogleMap>
        </LoadScript >

    )
}

export default MapComponent