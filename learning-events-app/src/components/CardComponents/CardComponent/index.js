import React from 'react';
import { FaHome, FaArrowUp, FaUser, FaLocationArrow } from "react-icons/fa";
import EventPage from '../../../pages/EventPage';
import { useSelector } from 'react-redux';
import {
    Wrapper,
    ContentWrapper,
    InnerWrapperButton,
    InnerWrapperIcon,
    InnerWrapperInfo,
    InnerWrapperTitle,
    IconWrapper,
    StyledLink,
    Title,
    Date,
    Location,
    Owner,
} from './styled';


const CardComponent = ({ information }) => {

    const userState = useSelector((state) => state.authReducer);

    const clickHandler = () => {
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <InnerWrapperIcon>
                    <IconWrapper>
                        <FaHome />
                    </IconWrapper>
                </InnerWrapperIcon>
                <InnerWrapperTitle>
                    <Title><small>{information.title}</small></Title>
                    <Date><small>{information.event_date}</small></Date>
                </InnerWrapperTitle>
                <InnerWrapperInfo>
                    <Location>
                        <IconWrapper small>
                            <FaLocationArrow />
                        </IconWrapper>
                        <small>{information.place}</small>
                    </Location>

                    <Owner>
                        <IconWrapper small>
                            <FaUser />
                        </IconWrapper>
                        {information.user ? <small>{information.user.name}</small> : <small>Not found yet!</small>}
                    </Owner>
                </InnerWrapperInfo>
                <InnerWrapperButton>
                    {userState.isAuth
                        ?
                        <StyledLink to={{ pathname: `events/${information.id}` }}> <FaArrowUp style={{ fontSize: '1.5rem', color: "white" }} /> </StyledLink>
                        :
                        <StyledLink to={{ pathname: `/login` }}> <FaArrowUp style={{ fontSize: '1.5rem', color: "white" }} /> </StyledLink>

                    }
                </InnerWrapperButton>
            </ContentWrapper>
        </Wrapper>
    )
};

export default CardComponent

{/* <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{information.title}</Card.Title>
                    <Card.Text>
                        {information.description}
                    </Card.Text>
                    <StyledLink to={{
                        pathname: `events/${information.id}`, props: information

                    }}><StyledButton onClick={() => clickHandler()}>click me</StyledButton></StyledLink>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"></small>
                </Card.Footer>
            </Card>
</Col> */}