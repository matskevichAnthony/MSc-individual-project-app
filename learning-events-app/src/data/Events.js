import { v4 as uuidv4 } from "uuid";
import Type from "./eventsType";


const eventsType = () => {

    return [
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            eventType: Type[0],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            GEO: {
                lat: 53.763338,
                lng: 36.565466
            },
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Bottellon",
            eventType: Type[1],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            GEO: {
                lat: 53.563338,
                lng: 36.565466
            },
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Public PickUp",
            eventType: Type[2],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            GEO: {
                lat: 53.763338,
                lng: 36.265466
            },
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            isToggled: true,

        },

    ];

}

export default eventsType;