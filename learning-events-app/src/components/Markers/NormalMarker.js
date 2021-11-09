import { React, useState } from 'react';
import styled from 'styled-components'
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import InfoWindowDesign from './InfoWindowDesign';

const NormalMarker = ({ iconSettings, position, InfoText, self }) => {

    const [toggled, setToggled] = useState(false)

    const events = useSelector((state) => state.getEvents);
    const dispatch = useDispatch();
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
