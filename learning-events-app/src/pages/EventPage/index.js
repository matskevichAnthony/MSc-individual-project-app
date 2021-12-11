import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Wrapper, InnerBox, HeaderBox, HeaderImg, HeaderInfo, SideInfo, MainInfo, InformationDiv, InformationSideDiv, IconWrapper, MapWrapper, JoinButton, GoBackButton } from './styled';
import { FaDollarSign, FaLocationArrow, FaHome, FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import { getEvent } from '../../action/events';
import { addEventAttended } from '../../action/eventsAttended';
import EventMap from '../../components/EventMap';
const EventPage = () => {
    let id = useParams();
    const dispatch = useDispatch();
    const eventData = useSelector((state) => state.getEvent);
    const clickHandler = () => {
        dispatch(addEventAttended(eventData));
    }

    useEffect(() => {
        dispatch(getEvent(id.eventId))
    }, []);

    return (
        <Wrapper>
            <InnerBox>
                <HeaderBox>
                    <Link to="/"><GoBackButton><FaArrowLeft /></GoBackButton></Link>
                    <HeaderImg></HeaderImg>
                    <HeaderInfo>{eventData.title}</HeaderInfo>
                </HeaderBox>
                <HeaderBox>
                    <MainInfo><InformationDiv><b>About the event</b>
                        <br />{eventData.description}
                        <br />
                        how many people will go? <b>{eventData && eventData.user_attends.length}</b>
                        <br />
                        <JoinButton onClick={clickHandler}>Join!</JoinButton>
                    </InformationDiv>
                    </MainInfo>
                    <SideInfo>
                        <InformationSideDiv>
                            <IconWrapper> <FaDollarSign /> {eventData.price}  </IconWrapper>
                            <IconWrapper><FaHome /> {eventData.place}</IconWrapper>
                            <IconWrapper><FaLocationArrow /> {eventData.address}</IconWrapper>
                            <IconWrapper><FaCalendarAlt /> {eventData.event_date}</IconWrapper>
                        </InformationSideDiv>
                    </SideInfo>
                </HeaderBox>
                <MapWrapper> <EventMap data={eventData} event_lat={eventData.geo_lat} event_lng={eventData.geo_lng} /></MapWrapper>
            </InnerBox>
        </Wrapper>
    )

}

export default EventPage;