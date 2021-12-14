import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, DropdownButton, Dropdown } from 'react-bootstrap';
import CardComponent from '../../components/CardComponents/CardComponent';
import { getEvents, getEventTypes } from '../../action/events';
import { getPreferences } from '../../action/preferences';
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
}
    from './styled';

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.getEvents.events);
    const preferences = useSelector((state) => state.getEvents.preferences);
    const eventTypes = useSelector((state) => state.getEvents.event_type);
    const [allEvents, setAllEvents] = useState(events);
    const [forYouEvents, setForYouEvents] = useState(events);
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
        dispatch(getPreferences());
    }, [dispatch])

    //algorithm to sort the events based on user interests and date

    const sortedEvents = useMemo(() => {
        if (events?.length && preferences?.length) {
            const preparedPreferences = {};
            preferences.forEach(preference => {
                preparedPreferences[preference.event_type_id] = preference.preference_number
            });
            return [...events]
                .sort((a, b) => {
                    return new Date(a.event_date) - new Date(b.event_date)
                })
                .sort((a, b) => {
                    return preparedPreferences[b.event_type_id] - preparedPreferences[a.event_type_id];
                }).slice(0, 9)
        };

    }, [events, preferences])

    console.log(forYouEvents);

    useEffect(() => {
        setAllEvents(events);
        setForYouEvents(sortedEvents);
    }, [events, preferences, allEvents, sortedEvents]);

    console.log(forYouEvents);
    return (
        <Wrapper>
            <ContentWrapper>
                <UpperSectionWrapper>
                    <HeaderWrapper>Events that you might like</HeaderWrapper>
                    <CarouselWrapper>
                        <ExtraCarouselWrapper>
                            {forYouEvents &&
                                <Carousel information={sortedEvents && forYouEvents} />
                            }
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