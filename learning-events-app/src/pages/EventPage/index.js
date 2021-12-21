import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FaDollarSign, FaLocationArrow, FaHome, FaCalendarAlt, FaArrowLeft, FaUserAlt } from "react-icons/fa";
import { getEvent } from '../../action/events';
import { getEventsManaged } from '../../action/events';
import { getEventsAttended } from '../../action/eventsAttended';
import { leaveEventAttended } from '../../action/eventsAttended';
import { addEventAttended } from '../../action/eventsAttended';
import { deleteEvent } from '../../action/events';
import EventMap from '../../components/MapComponents/EventMap';
import {
    Wrapper,
    InnerBox,
    HeaderBox,
    HeaderInfo,
    SideInfo,
    MainInfo,
    InformationDiv,
    InformationSideDiv,
    IconWrapper,
    MapWrapper,
    JoinButton,
    GoBackButton,
    IconInnerWrapper,
    TextInnerWrapper,
}
    from './styled';

const EventPage = () => {
    let id = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const [eventManaged, setEventManaged] = useState(false);
    const [eventAttended, setEventAttended] = useState(false);

    const eventData = useSelector((state) => state.getEvents.event);
    const eventsAttend = useSelector((state) => state.getEvents.attends);
    const eventsManaged = useSelector((state) => state.getEvents.managed);

    const isManaged = useMemo(() => {
        if (eventsManaged) {
            return eventsManaged.find(event => event.id === eventData.id)
        }
    }, [eventData, eventsManaged]);

    const isAttended = useMemo(() => {
        if (eventsAttend) {
            return eventsAttend.find(event => event.id === eventData.id)
        }
    }, [eventData, eventsAttend]);

    const joinHandler = () => {
        dispatch(addEventAttended(eventData));
        history.push('/myevents');
    };
    const leaveHandler = () => {
        dispatch(leaveEventAttended(eventData));
        history.goBack();
    };
    const deleteHandler = () => {
        dispatch(deleteEvent(eventData.id));
        history.goBack();
    };

    useEffect(() => {
        dispatch(getEvent(id.eventId))
        dispatch(getEventsManaged());
        dispatch(getEventsAttended());
    }, [dispatch, id.eventId,]);

    console.log(!!isAttended === true);
    console.log(!!isManaged === true);
    return (
        <Wrapper>
            <InnerBox>
                <HeaderBox>
                    <Link to="/"><GoBackButton><FaArrowLeft /></GoBackButton></Link>
                    <HeaderInfo>{eventData.title}</HeaderInfo>
                </HeaderBox>
                <HeaderBox>
                    <MainInfo><InformationDiv><b>About the event</b>
                        <br />{eventData.description}
                        <br />
                        how many people will go? <b>{eventData.user_attends && eventData.user_attends.length}</b>
                        <br />
                        {!!isAttended === false && !!isManaged === true
                            ? <></>
                            : [
                                (isAttended && !!isManaged === false
                                    ? <JoinButton onClick={leaveHandler}>leave</JoinButton>
                                    : <JoinButton onClick={joinHandler}>Join!</JoinButton>
                                )
                            ]

                        }
                        {isManaged
                            ?
                            <JoinButton onClick={deleteHandler}>deleteEvent</JoinButton>
                            : <></>
                        }
                    </InformationDiv>
                    </MainInfo>
                    <SideInfo>
                        <InformationSideDiv>
                            <IconWrapper> <IconInnerWrapper><FaDollarSign /> </IconInnerWrapper><TextInnerWrapper>{eventData.price}</TextInnerWrapper></IconWrapper>
                            <IconWrapper><IconInnerWrapper><FaHome /> </IconInnerWrapper><TextInnerWrapper>{eventData.place}</TextInnerWrapper></IconWrapper>
                            <IconWrapper><IconInnerWrapper><FaLocationArrow /></IconInnerWrapper> <TextInnerWrapper>{eventData.address}</TextInnerWrapper></IconWrapper>
                            <IconWrapper><IconInnerWrapper><FaCalendarAlt /> </IconInnerWrapper><TextInnerWrapper>{eventData.event_date}</TextInnerWrapper></IconWrapper>
                            <IconWrapper><IconInnerWrapper><FaUserAlt /> </IconInnerWrapper><TextInnerWrapper>{eventData.user && eventData.user.name}</TextInnerWrapper></IconWrapper>
                        </InformationSideDiv>
                    </SideInfo>
                </HeaderBox>
                <MapWrapper> <EventMap data={eventData} event_lat={eventData.geo_lat} event_lng={eventData.geo_lng} /></MapWrapper>
            </InnerBox>
        </Wrapper>
    )

}

export default EventPage;