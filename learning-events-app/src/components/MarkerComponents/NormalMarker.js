import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Marker, InfoWindow } from '@react-google-maps/api';
import InfoWindowDesign from './InfoWindowDesign';
import { FaHome, FaArrowUp, FaUser, FaLocationArrow } from "react-icons/fa";

const NormalMarker = ({ iconSettings, self }) => {

    const [toggled, setToggled] = useState(false);

    useEffect(() => {
    }, [self]);

    const lat = parseFloat(self.geo_lat, 10);
    const lng = parseFloat(self.geo_lng, 10);
    const position =
    {
        lat: lat,
        lng: lng,
    };

    return (
        <div>
            <Marker onClick={() => setToggled(!toggled)} position={position} icon={FaHome}>
                {toggled ? <InfoWindow onCloseClick={() => setToggled(!toggled)}><Wrapper><InfoWindowDesign information={self} /></Wrapper></InfoWindow> : ""}
            </Marker>
        </div >
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
