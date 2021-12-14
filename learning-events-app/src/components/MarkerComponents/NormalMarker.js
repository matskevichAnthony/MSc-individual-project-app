import { React, useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Marker, InfoWindow } from '@react-google-maps/api';
import InfoWindowDesign from './InfoWindowDesign';

const getColor = (type, preferences) => {
    let color = 'red';
    const preference = preferences.find((elem) => elem.event_type_id === type.event_type_id);
    if (preference.preference_number < 4) {
        color = 'gray';
    } else if (preference.preference_number <= 7) {
        color = '#db9797';
    } else if (preference.preference_number >= 8) {
        color = 'red';
    }
    return color;
}

const NormalMarker = ({ self, preferences }) => {

    const svgMarker = useMemo(() => {
        if (preferences?.length) {
            return {
                path: "M23 0C10.2843 0 0 10.329 0 23.1C0 40.425 23 66 23 66C23 66 46 40.425 46 23.1C46 10.329 35.7157 0 23 0ZM23 31.35C18.4657 31.35 14.7857 27.654 14.7857 23.1C14.7857 18.546 18.4657 14.85 23 14.85C27.5343 14.85 31.2143 18.546 31.2143 23.1C31.2143 27.654 27.5343 31.35 23 31.35Z",
                fillColor: `${getColor(self, preferences)}`,
                fillOpacity: 0.8,
                strokeWeight: 0,
                rotation: 0,
                scale: 0.6,
                // eslint-disable-next-line no-undef
                anchor: new google.maps.Point(15, 30),
            };
        }
    }, [self, preferences]);

    const [toggled, setToggled] = useState(false);

    useEffect(() => {
    }, [self, preferences])

    const lat = parseFloat(self.geo_lat, 10);
    const lng = parseFloat(self.geo_lng, 10);
    const position =
    {
        lat: lat,
        lng: lng,
    };

    return (
        <>
            <Marker onClick={() => setToggled(!toggled)} position={position} icon={svgMarker}>
                {toggled ? <InfoWindow onCloseClick={() => setToggled(!toggled)}><Wrapper><InfoWindowDesign information={self} /></Wrapper></InfoWindow> : ""}
            </Marker>
        </>
    )
};

export default NormalMarker;

const Wrapper = styled.div`
width: 15rem;
height: 15rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
