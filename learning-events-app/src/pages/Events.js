import React from 'react';
import { useSelector } from 'react-redux';
const Events = () => {

    const events = useSelector((state) => state.getEvents)
    console.log(events);

    return (
        <div>
            Events section
        </div>
    )

}

export default Events;