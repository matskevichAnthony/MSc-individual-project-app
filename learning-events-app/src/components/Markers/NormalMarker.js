import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import InfoWindowDesign from './InfoWindowDesign';

const NormalMarker = ({ iconSettings, self }) => {

    const [toggled, setToggled] = useState(false)

    useEffect(() => {

    }, [self])

    console.log(self);
    const lat = parseFloat(self.geo_lat, 10);
    const lng = parseFloat(self.geo_lng, 10);
    const position =
    {
        lat: lat,
        lng: lng,
    };
    console.log(lat);
    console.log(lng);

    return (
        <div>
            <Marker onClick={() => setToggled(!toggled)} position={position} icon={iconSettings}>
                {toggled ? <InfoWindow onCloseClick={() => setToggled(!toggled)}><Wrapper><InfoWindowDesign information={self} /></Wrapper></InfoWindow> : ""}
            </Marker>
        </div >
    )


}

export default NormalMarker;

const Wrapper = styled.div`

width: 15rem;
height: 15rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;
