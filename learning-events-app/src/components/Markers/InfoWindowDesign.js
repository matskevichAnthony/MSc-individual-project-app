import React from "react";
import styled from "styled-components";
import { Link, Route, url, useParams, useRouteMatch } from 'react-router-dom';
import EventPage from '../../pages/EventPage';
const InfoWindowDesign = ({ information }) => {
    let { path, url } = useRouteMatch();
    let { topicId } = useParams();
    return (

        <Wrapper>
            <PicWrapper><img src={information.picture} /></PicWrapper>
            <HeaderWrapper>{information.event}</HeaderWrapper>
            <TextWrapper>
                address:<b>{information.address}</b>
                <br />
                available:<b>{information.placesAvailable}</b>
            </TextWrapper>
            <Link to={{
                pathname: `events/${information.id}`, props: information
            }}><ButtonToEvent>more</ButtonToEvent></Link>

        </Wrapper>

    )

}

export default InfoWindowDesign

const Wrapper = styled.div`
width: 15rem;
height: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const PicWrapper = styled.div`

width: 100%;

img{
    object-fit: cover;
    height:5rem;
    width: 100%;
    padding-bottom: 1rem;
}

`;

const HeaderWrapper = styled.h3`

padding:0.5rem, 0.5rem,0.5rem,0.5rem;

`;

const TextWrapper = styled.div`

font-size: 1rem;
padding: 1rem;

`;

const ButtonToEvent = styled.button`

height: 2rem;
width: 4rem;
border:none;
text-align: center;
align-items: center;

`