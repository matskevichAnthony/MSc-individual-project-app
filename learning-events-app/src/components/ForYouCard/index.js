import React from 'react';
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

import { FaHome, FaArrowUp, FaStar } from "react-icons/fa";

const ForYouCard = ({ information }) => {
    return (
        <ExtraWrapper>
            <StarWrapper style={{ color: "white" }}><FaStar /></StarWrapper>
            <Wrapper>
                <TitleWrapper><small>{information.title}</small></TitleWrapper>
                <InfoWrapper>
                    <IconDataWrapper><FaHome style={{ color: "tomato" }} />
                        <small>{information.place}</small>
                    </IconDataWrapper>
                    <IconDataWrapper><FaHome style={{ color: "tomato" }} />
                        {information.user ? <small>{information.user.name}</small> : <small>Not found yet!</small>}
                    </IconDataWrapper>
                    <IconDataWrapper><FaHome style={{ color: "tomato" }} />
                        <small>{information.event_date}</small>
                    </IconDataWrapper>
                </InfoWrapper>
                <ButtonWrapper>
                    <StyledLink to={{ pathname: `events/${information.id}` }}><StyledButton>about</StyledButton></StyledLink>
                </ButtonWrapper>
            </Wrapper>
        </ExtraWrapper>
    )
}

export default ForYouCard;