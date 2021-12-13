import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, DropdownButton, Dropdown } from 'react-bootstrap';
import CardComponent from '../../components/CardComponents/CardComponent';
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
    FilterButton,
    CarouselWrapepr,
}
    from './styled';

const Events = () => {
    const events = useSelector((state) => state.getEvents.events);
    const dispatch = useDispatch();
    const eventTypes = useSelector((state) => state.getEvents.event_type);
    const [allEvents, setAllEvents] = useState(events);
    const clickHandler = (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === "All") {
            setAllEvents(events);
            return;
        } else {
            let filtered = events.filter(event => event.event_type.name === e.target.innerHTML);
            setAllEvents(filtered);
        }
    }

    useEffect(() => {
        dispatch(getEvents());
        dispatch(getEventTypes());
    }, [dispatch])

    useEffect(() => {
        setAllEvents(events);
    }, [events, dispatch]);

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
                    <FilterButton onClick={clickHandler}>All</FilterButton>
                    {eventTypes.map((e) =>
                        <FilterButton onClick={(e) => clickHandler(e)}>{e.name}</FilterButton>
                    )}
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