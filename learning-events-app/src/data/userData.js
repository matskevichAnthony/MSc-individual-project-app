import { v4 as uuidv4 } from "uuid";
import Type from "./eventsType";

const userData = () => {

    return {
        userId: uuidv4(),
        userName: "antonMatskevich",
        email: "matskevich.anton777@yandex.ru",
        password: 123456,
        dateOfBirth: "07.07.1998",
        isLogged: false,
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
        ],
        eventsAttend: [],
        eventsManage: [],
    }

}
export default userData;