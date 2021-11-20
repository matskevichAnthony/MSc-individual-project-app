import { v4 as uuidv4 } from "uuid";
import Type from "./eventsType";
import eventImg from '../assets/eventsIcons/event1.jpg';

const userData = () => {

    return [
        {
            userId: uuidv4(),
            userName: "antonMatskevich",
            password: 123456,
            isLogged: true,
            preferences: [
                {
                    type: "Social",
                    preferenceLevel: 6,
                },
                {
                    type: "Tech",
                    preferenceLevel: 10,
                },
                {
                    type: "Cooking",
                    preferenceLevel: 1,
                },
                {
                    type: "Language",
                    preferenceLevel: 8,
                },
            ]
        }
    ];
}
export default userData;