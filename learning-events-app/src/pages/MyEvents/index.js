import React, { useState, useEffect } from 'react';
import UserEvents from '../../components/UserEvents.js';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../action/events.js';
import { getEventsAttended } from '../../action/eventsAttended.js';
import { Wrapper, ContentWrapper, WindowWrapper, CarouselWrapper } from './styled.js';
import Carousel from '../../components/Carousel'

const MyEvents = () => {
    const events = useSelector((state) => state.getEvents1);
    const eventsAttended = useSelector((state) => state.getEventsAttended);
    const [allEvents, setAllEvents] = useState(events);
    const dispatch = useDispatch();
    console.log(eventsAttended);
    useEffect(() => {
        dispatch(getEvents());
        dispatch(getEventsAttended());
    }, [dispatch])

    useEffect(() => {
        setAllEvents(events);
    }, [events, dispatch])

    return (
        <Wrapper>
            <ContentWrapper>
                <WindowWrapper>
                    <h1>Events you attend:</h1>
                    <CarouselWrapper>
                        <Carousel information={eventsAttended} />
                    </CarouselWrapper>
                </WindowWrapper>
                {/* <UserEvents information={userState.eventsAttend} /> */}
                <WindowWrapper>
                    <h1>Events you manage: </h1>
                    <CarouselWrapper>
                        <Carousel information={events} />
                    </CarouselWrapper>
                </WindowWrapper>
                {/* <UserEvents information={userState.eventsManage} /> */}
            </ContentWrapper>
        </Wrapper>
    )

}

export default MyEvents