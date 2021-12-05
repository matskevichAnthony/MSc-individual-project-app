import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Wrapper, InnerBox, HeaderBox, HeaderImg, HeaderInfo, SideInfo, MainInfo, InformationDiv, InformationSideDiv, IconWrapper, MapWrapper, JoinButton, GoBackButton } from './styled';
import { FaDollarSign, FaLocationArrow, FaHome, FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import EventMap from '../../components/EventMap'
const EventPage = ({ state }) => {

    const info = useLocation(state);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch({ type: "USER_ATTEND_EVENT", payload: info.props });
    }


    const events = useSelector((state) => state.getEvents)
    return (
        <Wrapper>
            <InnerBox>
                <HeaderBox>
                    <Link to="/"><GoBackButton><FaArrowLeft /></GoBackButton></Link>
                    <HeaderImg src={info.props.picture}></HeaderImg>
                    <HeaderInfo>{info.props.event}</HeaderInfo>
                </HeaderBox>
                <HeaderBox>
                    <MainInfo><InformationDiv><b>About the event</b><br />{info.props.description}<br /><JoinButton onClick={clickHandler}>Join!</JoinButton> </InformationDiv></MainInfo>
                    <SideInfo>
                        <InformationSideDiv>
                            <IconWrapper> <FaDollarSign /> {info.props.price}  </IconWrapper>
                            <IconWrapper><FaHome /> {info.props.place}</IconWrapper>
                            <IconWrapper><FaLocationArrow /> {info.props.address}</IconWrapper>
                            <IconWrapper><FaCalendarAlt /> {info.props.date}</IconWrapper>
                            <IconWrapper> <FaClock />{info.props.time}</IconWrapper>
                        </InformationSideDiv>
                    </SideInfo>
                </HeaderBox>
                <MapWrapper> <EventMap information={info.props} /></MapWrapper>
            </InnerBox>
        </Wrapper>
    )

}

export default EventPage;