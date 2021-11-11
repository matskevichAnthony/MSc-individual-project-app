import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, ImgWrapper, StyledButton, StyledLink } from "./styled";
import { useParams, useRouteMatch, path, url, Link, Route } from 'react-router-dom';
import EventPage from '../../pages/EventPage';
import Settings from '../../pages/Settings';


const Card = ({ information }) => {

    let { eventId } = useParams();
    let { path, url } = useRouteMatch();
    console.log(eventId);

    const clickHandler = () => {

        console.log(information.id);
    }

    return (
        <Wrapper>
            <ImgWrapper><img src={information.picture} /></ImgWrapper>
            <h3>{information.event}</h3>
            <StyledLink to={{
                pathname: `${url}/${information.id}`, props: information

            }}><StyledButton onClick={() => clickHandler()}>click me</StyledButton></StyledLink>


        </Wrapper >
    )

}

export default Card