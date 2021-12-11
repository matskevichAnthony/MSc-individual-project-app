import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import NormalMarker from '../Markers/NormalMarker';
import { React, useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateEvent from '../CreateEvent';
import { FaHome, FaArrowUp, FaUser, FaLocationArrow } from "react-icons/fa";
import { CreateEventButton } from './styled';
import { getEvents } from '../../action/events';

const initialCenter = {
    lat: 55.75070765150959,
    lng: 37.63230442021678
}

const ApplicationMap = () => {

    const dispatch = useDispatch();
    const [markerStatus, setMarkerStatus] = useState(false);
    const [markerIsChosen, setMarkerIsChosen] = useState(false);
    const [center, setCenter] = useState(initialCenter);
    let GEO = {};

    const getLocation = (e) => {

        const mapOnCenterChangeHandler = (e) => {
            if (map) {
                const newCenter = map.getCenter();
                const center = {
                    lat: newCenter.lat(),
                    lng: newCenter.lng()
                }
                setCenter(center);
            }
        }
        mapOnCenterChangeHandler();

        GEO = e.latLng.toJSON();
        setMarkerIsChosen(true);
        dispatch({ type: "GET_LOCATION", payload: e.latLng.toJSON() });
    };

    const data = useSelector((state) => state.getEvents1);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])

    useEffect(() => {
    }, [data]);


    const containerStyle = {
        width: '100%',
        height: '94vh'
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
        <GoogleMap style={{ cursor: 'pointer' }} onClick={markerStatus ? (e) => getLocation(e) : console.log("nope")}

            mapContainerStyle={containerStyle}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultMapOptions}
            center={center}
        >
            {data.length > 0 && data.map((event) =>
                <NormalMarker self={event} iconSettings={{
                    url: 'https://static.thenounproject.com/png/98497-200.png',
                    scaledSize: new window.google.maps.Size(50, 50)
                }} ></NormalMarker>
            )}

            {
                markerIsChosen ?
                    <CreateEvent
                        setMarkerStatus={setMarkerStatus}
                        markerStatus={markerStatus}
                        information={GEO}
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

export default ApplicationMap