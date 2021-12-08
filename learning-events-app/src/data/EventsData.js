import { v4 as uuidv4 } from "uuid";
import Type from "../data/eventsType";
import eventImg from '../assets/eventsIcons/event1.jpg';

const eventsType = () => {
    const types = Type();
    return [
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            event_type_id: types[0],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            geo_lat: 53.763338,
            geo_lng: 36.565466,
            address: "CALLE MANZANA 3",
            price: "20",
            event_date: "2021-12-16 14:31:36",
            isToggled: false,

        },
    ];

}

export default eventsType;