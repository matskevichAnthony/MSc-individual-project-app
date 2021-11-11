import { GoogleMap, useJsApiLoader, LoadScript } from '@react-google-maps/api';
import NormalMarker from '../Markers/NormalMarker';
import { v4 as uuidv4 } from "uuid";
import Events from '../../data/Events';
import eventsType from '../../data/eventsType';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addEvent from '..//..//action/addEvent';

const ApplicationMap = ({ information }) => {


    const events = useSelector((state) => state.getEvents);
    const dispatch = useDispatch();

    const containerStyle = {
        width: '100%',
        height: '150%'
    };

    const center = {
        lat: 52.763338,
        lng: 36.565466
    }


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
        mapId: "dd081edb5f80f8b1"
    }

    return isLoaded ? (
        <GoogleMap

            mapContainerStyle={containerStyle}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultMapOptions}
            center={information.GEO}
        >
            <NormalMarker self={information} position={information.GEO} InfoText={information.event} iconSettings={{
                url: 'https://static.thenounproject.com/png/98497-200.png',
                scaledSize: new window.google.maps.Size(50, 50)
            }} ></NormalMarker>
        </GoogleMap >
    ) : <></>
}

export default ApplicationMap