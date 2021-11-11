import React from "react";
import { Wrapper } from "./styled";
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import eventImg from '../../assets/eventsIcons/event1.jpg'
import eventsType from "../../data/eventsType";

const CreateEvent = ({ information }) => {

    const locationSelected = useSelector((state) => state.getLocation);
    console.log(locationSelected);
    const dispatch = useDispatch();
    const eventTypeData = eventsType();
    console.log(information);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.eventName.value);
        console.log(e.target.numberPeople.value);
        console.log(e.target.address.value);
        console.log(e.target.details.value);
        console.log(e.target.place.value);
        console.log(e.target.eventType.value);
        console.log(e.target.age.value);
        console.log(e.target.dateTime.value);
        console.log(e.target.imgFile.value);

        const newEvent = {
            id: uuidv4(),
            event: e.target.eventName.value,
            eventType: e.target.eventType.value,
            description: e.target.details.value,
            place: e.target.place.value,
            picture: eventImg,
            GEO: locationSelected,
            address: e.target.address.value,
            placesAvailable: e.target.numberPeople.value,
            minAge: e.target.age.value,
            price: e.target.price.value,
            date: e.target.dateTime.value,
            time: e.target.dateTime.value,
            isToggled: false,
        }

        dispatch({ type: "ADD_EVENT", payload: newEvent });


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
                        <Form.Control name="eventName" type="text" placeholder="Enter event name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Number of people</Form.Label>
                        <Form.Control name="numberPeople" type="text" placeholder="Number of people" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" placeholder="1234 Main St" />
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        name="details"
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Place</Form.Label>
                        <Form.Control name="place" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Event type</Form.Label>
                        <Form.Select name="eventType" defaultValue="Choose...">
                            <option>{eventTypeData[0].event}</option>
                            <option>{eventTypeData[1].event}</option>
                            <option>{eventTypeData[2].event}</option>
                            <option>{eventTypeData[3].event}</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Min Age</Form.Label>
                        <Form.Control name="age" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">

                    <Form.Label>Date</Form.Label>
                    <br />
                    <input name="dateTime" id="datetime" type="datetime-local" />
                </Form.Group>
                <Form.Label>Price</Form.Label>
                <br />
                <Form.Control name="price" />
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control name="imgFile" type="file" />
                </Form.Group>

                <Button onClick variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Wrapper>
    )



}

export default CreateEvent;