import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, DropdownButton, Dropdown } from 'react-bootstrap';
import CardComponent from '../../components/CardComponent';
import { getEvents, getEventTypes } from '../../action/events';
import { Scrollbars } from 'react-custom-scrollbars';
import Carousel from '../../components/Carousel';
import {
    Wrapper,
    ContentWrapper,
    HeaderWrapper,
    CarouselWrapper,
    ScrollWrapper,
    FilterWrapper,
    ExtraCarouselWrapper,
    UpperSectionWrapper,
}
    from './styled';

const Events = () => {


    const events = useSelector((state) => state.getEvents1);
    const dispatch = useDispatch();
    const eventTypes = useSelector((state) => state.getEventTypes);
    const [allEvents, setAllEvents] = useState(events);
    const clickHandler = (e) => {
        if (e.target.innerHTML === "All") {
            setAllEvents(events);
            return;
        }
        let filtered = events.filter(event => event.event_type.name === e.target.innerHTML);
        setAllEvents(filtered);
    }

    useEffect(() => {
        dispatch(getEvents());
        dispatch(getEventTypes());
    }, [dispatch])

    useEffect(() => {
        setAllEvents(events);
    }, [events, dispatch])

    return (
        <Wrapper>
            <ContentWrapper>
                <UpperSectionWrapper>
                    <HeaderWrapper>Events that you might like</HeaderWrapper>
                    <CarouselWrapper>
                        <ExtraCarouselWrapper>
                            <Carousel information={allEvents} />
                        </ExtraCarouselWrapper>
                    </CarouselWrapper>
                </UpperSectionWrapper>
                <FilterWrapper>
                    <DropdownButton id="dropdown-item-button" title="Categories">
                        <Dropdown.Item as="button" onClick={clickHandler}>All</Dropdown.Item>
                        {eventTypes.map((e) =>
                            <Dropdown.Item as="button" onClick={(e) => clickHandler(e)}>{e.name}</Dropdown.Item>
                        )}
                    </DropdownButton>
                    <DropdownButton id="dropdown-item-button" title="Categories">
                        <Dropdown.Item as="button" onClick={clickHandler}>All</Dropdown.Item>
                        {eventTypes.map((e) =>
                            <Dropdown.Item as="button" onClick={(e) => clickHandler(e)}>{e.name}</Dropdown.Item>
                        )}
                    </DropdownButton>
                </FilterWrapper>
                <ScrollWrapper>
                    <Scrollbars style={{ width: '100%', height: '100%' }}>
                        {allEvents.length > 0 && allEvents.map((e) => {
                            return <CardComponent information={e} />
                        })}
                    </Scrollbars>
                </ScrollWrapper>
            </ContentWrapper>
        </Wrapper>
    )

}

export default Events;