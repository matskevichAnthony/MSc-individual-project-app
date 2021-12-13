import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import { Wrapper } from "./styled";
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import eventImg from '../../assets/eventsIcons/event1.jpg'
import { addEvent } from "../../action/events";
import { getEvents } from "../../action/events";
import { getEventTypes } from "../../action/events";

const CreateEvent = ({ setMarkerStatus, markerStatus, markerIsChosen, setMarkerIsChosen }) => {
    const locationSelected = useSelector((state) => state.getLocation);
    const eventTypes = useSelector((state) => state.getEvents.event_type);
    const [address, setAddress] = useState();
    const [eventTypeId, setEventTypeId] = useState(1);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setEventTypeId(e.target.value);
    };

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
        dispatch(getEventTypes());
    }, [locationSelected, dispatch]);

    const submitHandler = (e) => {
        // e.preventDefault();
        const formatedDateTime = `${e.target.date.value} ${e.target.time.value}:00`
        console.log(eventTypeId);
        dispatch(addEvent(
            1,
            e.target.eventName.value,
            e.target.details.value,
            locationSelected.lat,
            locationSelected.lng,
            e.target.address.value,
            e.target.place.value,
            formatedDateTime,
            e.target.price.value,
            eventTypeId,
        ));

        const newEvent = {
            id: uuidv4(),
            event: e.target.eventName.value,
            eventType: e.target.eventType.value,
            description: e.target.details.value,
            place: e.target.place.value,
            GEO: locationSelected,
            address: address,
            price: e.target.price.value,
            date: formatedDateTime,
            isToggled: false,
        }

        dispatch({ type: "ADD_EVENT", payload: newEvent });
        setMarkerIsChosen(!setMarkerIsChosen);
        setMarkerStatus(!markerStatus);
    }

    return (
        <Wrapper>
            <h2 style={{ color: "tomato", textAlign: "center" }}>Create new event!</h2>
            <Form onSubmit={(e) => submitHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Event name</Form.Label>
                        <Form.Control name="eventName" type="text" placeholder="Enter event name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
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
                        <Form.Select name="eventType" defaultValue="Choose..." onChange={changeHandler}>
                            {eventTypes.map((type) => {
                                return <option value={type.id}>{type.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">

                    <Form.Label>Date</Form.Label>
                    <br />
                    <input name="date" id="date" type="date" />
                    <input name="time" id="time" type="time" />
                </Form.Group>
                <Form.Label>Price</Form.Label>
                <br />
                <Form.Control name="price" />
                <br />
                <Button onClick variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Wrapper >
    )
};

export default CreateEvent;