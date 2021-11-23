import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import eventsType from '../data/eventsType';
import { Row, DropdownButton, Dropdown } from 'react-bootstrap';
import { useParams, useRouteMatch, path, url, Link } from 'react-router';
import CardComponent from '../components/CardComponent';
import styled from 'styled-components';
import { event } from 'jquery';
const Events = () => {


    const events = useSelector((state) => state.getEvents)
    const eventTypes = eventsType();
    const [allEvents, setAllEvents] = useState(events);
    const clickHandler = (e) => {
        if (e.target.innerHTML === "All") {
            setAllEvents(events);
            return;
        }
        let filtered = events.filter(event => event.eventType.event === e.target.innerHTML)

        setAllEvents(filtered);
    }

    return (
        <Wrapper>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button" onClick={clickHandler}>All</Dropdown.Item>
                {eventTypes.map((e) =>
                    <Dropdown.Item as="button" onClick={(e) => clickHandler(e)}>{e.event}</Dropdown.Item>
                )}
            </DropdownButton>
            <Row xs={2} md={3} className="g-4">
                {allEvents.map((e) => {
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
flex-direction: column;
`