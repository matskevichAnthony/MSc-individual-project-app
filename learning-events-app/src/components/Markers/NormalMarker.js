import { React, useState } from 'react';
import styled from 'styled-components'
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';

const NormalMarker = ({ iconSettings, position, InfoText, self }) => {

    const [toggled, setToggled] = useState(false)

    const events = useSelector((state) => state.getEvents);
    const dispatch = useDispatch();
    return (
        <div>
            <Marker onClick={() => setToggled(!toggled)} position={position} icon={iconSettings}>
                {toggled ? <InfoWindow onCloseClick={() => setToggled(!toggled)}><div>{InfoText}</div></InfoWindow> : ""}
            </Marker>
        </div >
    )


}

export default NormalMarker;

const Wrapper = styled.div`

width: 1rem;
height: 1rem;
border-radius: 50%;
opacity: 0.6;
background-color: pink;


`;
