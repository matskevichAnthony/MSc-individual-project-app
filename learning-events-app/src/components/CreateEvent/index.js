import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import { Wrapper } from "./styled";
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import eventImg from '../../assets/eventsIcons/event1.jpg'
import eventsType from "../../data/eventsType";
import { addEvent } from "../../action/events";
import { getEvents } from "../../action/events";

const CreateEvent = ({ information, setMarkerStatus, markerStatus, markerIsChosen, setMarkerIsChosen }) => {
    const locationSelected = useSelector((state) => state.getLocation);
    const events = useSelector((state) => state.getEvents1);
    const [address, setAddress] = useState();
    const dispatch = useDispatch();
    const eventTypeData = eventsType();
    //geocode
    useEffect(() => {
        Geocode.setApiKey("AIzaSyC6nhjY1_Ft9Z4LxyfyHglsoD7ZpO9cWl4");
        Geocode.setLanguage("en");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
        Geocode.fromLatLng(locationSelected.lat, locationSelected.lng).then(
            (response) => {
                setAddress(response.results[0].formatted_address);
            },
            (error) => {
                console.error(error + "errrorrrrrr");
            }
        );
        dispatch(getEvents());
    }, [locationSelected, dispatch]);

    const submitHandler = (e) => {
        // e.preventDefault();

        dispatch(addEvent(
            1,
            e.target.eventName.value,
            e.target.details.value,
            locationSelected.lat,
            locationSelected.lng,
            e.target.address.value,
            e.target.place.value,
            "2021-11-16 14:31:36",
            e.target.price.value
        ));

        const newEvent = {
            id: uuidv4(),
            event: e.target.eventName.value,
            eventType: e.target.eventType.value,
            description: e.target.details.value,
            place: e.target.place.value,
            picture: eventImg,
            GEO: locationSelected,
            address: address,
            placesAvailable: e.target.numberPeople.value,
            minAge: e.target.age.value,
            price: e.target.price.value,
            date: e.target.dateTime.value,
            time: e.target.dateTime.value,
            isToggled: false,
        }

        dispatch({ type: "USER_ADD_EVENT", payload: newEvent });
        dispatch({ type: "ADD_EVENT", payload: newEvent });

        setMarkerIsChosen(!setMarkerIsChosen);
        setMarkerStatus(!markerStatus);

        window.location.reload();
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
                    <Form.Control name="address" placeholder="1234 Main St" value={address} />
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
};

export default CreateEvent;