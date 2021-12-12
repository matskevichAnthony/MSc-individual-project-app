import React from 'react';
import { useSelector } from 'react-redux';
import {
    Wrapper,
    TitleWrapper,
    InfoWrapper,
    ButtonWrapper,
    IconDataWrapper,
    StyledButton,
    StarWrapper,
    ExtraWrapper,
    StyledLink,
} from './styled';

import { FaHome, FaLocationArrow, FaStar, FaUserAlt, FaClock } from "react-icons/fa";

const ForYouCard = ({ information }) => {
    const userState = useSelector((state) => state.authReducer);
    return (
        <ExtraWrapper>
            <StarWrapper style={{ color: "white" }}><FaStar /></StarWrapper>
            <Wrapper>
                <TitleWrapper><small>{information.title}</small></TitleWrapper>
                <InfoWrapper>
                    <IconDataWrapper><FaLocationArrow style={{ color: "tomato" }} />
                        <small>{information.place}</small>
                    </IconDataWrapper>
                    <IconDataWrapper><FaUserAlt style={{ color: "tomato" }} />
                        {information.user ? <small>{information.user.name}</small> : <small>Not found yet!</small>}
                    </IconDataWrapper>
                    <IconDataWrapper><FaClock style={{ color: "tomato" }} />
                        <small>{information.event_date}</small>
                    </IconDataWrapper>
                </InfoWrapper>
                <ButtonWrapper>
                    {userState.isAuth
                        ? <StyledLink to={{ pathname: `events/${information.id}` }}><StyledButton>about</StyledButton></StyledLink>
                        : <StyledLink to={{ pathname: `/login` }}><StyledButton>about</StyledButton></StyledLink>
                    }


                </ButtonWrapper>
            </Wrapper>
        </ExtraWrapper>
    )
};

export default ForYouCard;