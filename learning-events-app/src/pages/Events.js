import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams, useRouteMatch, path, url, Link } from 'react-router';
import CardComponent from '../components/CardComponent';
import styled from 'styled-components';
const Events = () => {

    const events = useSelector((state) => state.getEvents)
    console.log(events);

    return (
        <Wrapper>
            <Row xs={2} md={3} className="g-4">
                {events.map((e) => {
                    return <CardComponent information={e} />
                })}
            </Row>
        </Wrapper>
    )

}

export default Events;

const Wrapper = styled.div`
display: flex;
justify-content: center;

`