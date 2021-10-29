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
            GEO: [55.763338, 37.565466],
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",

        },
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            eventType: Type[0],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            GEO: [54.763338, 37.565466],
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",

        },
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            eventType: Type[0],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            GEO: [55.763338, 36.565466],
            address: "",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",

        },

    ];

}

export default eventsType;