import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router';

const EventPage = ({ state }) => {

    const info = useLocation(state);


    const events = useSelector((state) => state.getEvents)
    console.log(state)
    return (
        <div>
            Specific Event {info.props.event}
        </div>
    )

}

export default EventPage;