import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import NormalMarker from '../Markers/NormalMarker';
import { React, useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateEvent from '../CreateEvent';
import { CreateEventButton } from './styled';
import { getEvents } from '../../action/events';

const initialCenter = {
    lat: 55.75070765150959,
    lng: 37.63230442021678
}

const EventMap = ({ data, event_lat, event_lng }) => {

    const dispatch = useDispatch();
    const [markerStatus, setMarkerStatus] = useState(false);
    const [markerIsChosen, setMarkerIsChosen] = useState(false);
    const [center, setCenter] = useState(initialCenter);
    let GEO = {};

    const lat = parseFloat(event_lat, 10);
    const lng = parseFloat(event_lng, 10);
    console.log(lat + "   " + lng);

    useEffect(() => {
        setCenter({
            lat: lat,
            lng: lng,
        })
    }, [lat, lng])

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
        mapId: "dd081edb5f80f8b1",
        draggableCursor: !markerStatus ? '' : 'crosshair',
    }

    return isLoaded ? (
        <GoogleMap style={{ cursor: 'pointer' }}

            mapContainerStyle={containerStyle}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultMapOptions}
            center={center}
        >
            <NormalMarker self={data} iconSettings={{
                url: 'https://static.thenounproject.com/png/98497-200.png',
                scaledSize: new window.google.maps.Size(50, 50)
            }} ></NormalMarker>

            {
                markerIsChosen ?
                    <CreateEvent
                        setMarkerStatus={setMarkerStatus}
                        markerStatus={markerStatus}
                        markerIsChosen={markerIsChosen}
                        setMarkerIsChosen={setMarkerIsChosen} />
                    :
                    <></>
            }

            {
                markerStatus ? <></> : <CreateEventButton onClick={() => setMarkerStatus(!markerStatus)}>Create Event!</CreateEventButton>
            }

        </GoogleMap >
    ) : <></>
}

export default EventMap;