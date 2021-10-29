import { v4 as uuidv4 } from "uuid";

const eventsType = () => {

    return [
        {
            id: uuidv4(),
            event: "Technology"
        },
        {
            id: uuidv4(),
            event: "Languages"
        },
        {
            id: uuidv4(),
            event: "Cooking"
        },
        {
            id: uuidv4(),
            event: "Social"
        },

    ];

}

export default eventsType;