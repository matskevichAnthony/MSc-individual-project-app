import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const EventPage = () => {

    const events = useSelector((state) => state.getEvents)

    return (
        <div>
            Specific Event
        </div>
    )

}

export default EventPage;