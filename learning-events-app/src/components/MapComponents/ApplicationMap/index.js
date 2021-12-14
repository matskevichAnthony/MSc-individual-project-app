import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import NormalMarker from '../../MarkerComponents/NormalMarker';
import { React, useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEventTypes } from '../../../action/events';
import { getPreferences } from '../../../action/preferences';
import CreateEvent from '../../CreateEvent';
import { CreateEventButton, FilterWrapper, FilterButton } from './styled';
import { getEvents } from '../../../action/events';

const initialCenter = {
    lat: 55.87040845926683,
    lng: -4.269543496531518
}

const ApplicationMap = () => {
    const dispatch = useDispatch();

    const [markerStatus, setMarkerStatus] = useState(false);
    const [markerIsChosen, setMarkerIsChosen] = useState(false);
    const [center, setCenter] = useState(initialCenter);
    const userState = useSelector((state) => state.authReducer);
    const data = useSelector((state) => state.getEvents.events);
    const eventTypes = useSelector((state) => state.getEvents.event_type);
    const preferences = useSelector((state) => state.getEvents.preferences);
    const [allEvents, setAllEvents] = useState(data);
    console.log(allEvents);

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


    useEffect(() => {
        dispatch(getEvents());
        dispatch(getEventTypes());
        dispatch(getPreferences());
        setAllEvents(data)
    }, []);

    useEffect(() => {
        setAllEvents(data)
    }, [dispatch, data, preferences]);


    const containerStyle = {
        width: '100%',
        height: '90vh',
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4"
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, []);

    const defaultMapOptions = {
        fullscreenControl: false,
        disableDefaultUI: true,
        mapId: "dd081edb5f80f8b1",
        draggableCursor: !markerStatus ? '' : 'crosshair',
    };


    const clickHandler = (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === "All") {
            setAllEvents(data);
            return;
        } else {
            let filtered = data.filter(event => event.event_type.name === e.target.innerHTML);
            setAllEvents(filtered);
        }
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
            {allEvents.length > 0 && allEvents.map((event) =>
                <NormalMarker self={event} preferences={preferences}></NormalMarker>
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
                !markerStatus && userState.isAuth
                    ? <CreateEventButton onClick={() => setMarkerStatus(!markerStatus)}>Create Event!</CreateEventButton>
                    : <></>
            }
            <FilterWrapper><FilterButton onClick={clickHandler}>All</FilterButton>
                {eventTypes && eventTypes.map((e) =>
                    <FilterButton onClick={(e) => clickHandler(e)}>{e.name}</FilterButton>
                )}</FilterWrapper>

        </GoogleMap >
    ) : <></>
};

export default ApplicationMap