import React from 'react';
import { useSelector } from 'react-redux';
import { StyledButton, StyledLink } from "./styled";
import { Card, Col } from 'react-bootstrap';
import { useParams, useRouteMatch, path, url, Link, Route } from 'react-router-dom';
import EventPage from '../../pages/EventPage';


const CardComponent = ({ information }) => {

    let { eventId } = useParams();
    let { path, url } = useRouteMatch();
    console.log(eventId);
    console.log(information);

    const clickHandler = () => {

        console.log(information.id);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={information.picture} />
                <Card.Body>
                    <Card.Title>{information.event}</Card.Title>
                    <Card.Text>
                        {information.description}
                    </Card.Text>
                    <StyledLink to={{
                        pathname: `events/${information.id}`, props: information

                    }}><StyledButton onClick={() => clickHandler()}>click me</StyledButton></StyledLink>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    )

}

export default CardComponent