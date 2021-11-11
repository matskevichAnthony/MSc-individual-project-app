import React from "react";
import { Wrapper } from "./styled";
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";
import eventImg from '../../assets/eventsIcons/event1.jpg'
import eventsType from "../../data/eventsType";

const CreateEvent = () => {

    const eventTypeData = eventsType();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);

    }

    const example = {
        id: uuidv4(),
        event: "Fucking shit",
        eventType: eventsType[0],
        description: "Today we are going to learn how to use python and drink some nice coffee",
        place: "Icon Club",
        picture: eventImg,
        GEO: {
            lat: 50.763338,
            lng: 36.565466
        },
        address: "Uebak",
        placesAvailable: 15,
        minAge: 18,
        price: "20$",
        date: "11/10/2021",
        time: "12:10",
        isToggled: false,

    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Event name</Form.Label>
                        <Form.Control type="text" placeholder="Enter event name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Number of people</Form.Label>
                        <Form.Control type="text" placeholder="Number of people" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Place</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Event type</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>{eventTypeData[0].event}</option>
                            <option>{eventTypeData[1].event}</option>
                            <option>{eventTypeData[2].event}</option>
                            <option>{eventTypeData[3].event}</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Min Age</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Label>Date</Form.Label>
                    <br />
                    <input id="datetime" type="datetime-local" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button onClick variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Wrapper>
    )



}

export default CreateEvent;