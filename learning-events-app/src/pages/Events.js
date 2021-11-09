import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useRouteMatch, path, url, Link } from 'react-router';
import Card from '../components/Card';
import styled from 'styled-components';
const Events = () => {

    const events = useSelector((state) => state.getEvents)
    console.log(events);

    return (
        <Wrapper>
            {events.map((e) => {
                return <Card information={e} />
            })}
        </Wrapper>
    )

}

export default Events;

const Wrapper = styled.div`
flex-wrap: wrap;
padding-top: 1rem;
width: 100%;
height: 100vh;
display: flex;
justify-content: space-around;

`