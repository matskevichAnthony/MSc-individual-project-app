import { v4 as uuidv4 } from "uuid";
import Type from "../data/eventsType";
import eventImg from '../assets/eventsIcons/event1.jpg';

const eventsType = () => {
    const types = Type();
    return [
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            eventType: types[0].event,
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.763338,
                lng: 36.565466
            },
            address: "CALLE MANZANA 3",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Singing lessons",
            eventType: types[1].event,
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.563338,
                lng: 36.565466
            },
            address: "TIRSO DE MOLINA",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Drawing lessons",
            eventType: types[2].event,
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.763338,
                lng: 36.265466
            },
            address: "53 GEORGE ST",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: true,

        },
        {
            id: uuidv4(),
            event: "Cooking time",
            eventType: types[0].event,
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Gordon Ramsay",
            picture: eventImg,
            GEO: {
                lat: 53.763338,
                lng: 36.565466
            },
            address: "George Town",
            placesAvailable: 15,
            minAge: 19,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Workout Session",
            eventType: types[1],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Alex Fitness",
            picture: eventImg,
            GEO: {
                lat: 53.563331,
                lng: 36.565463
            },
            address: "Lubertsy",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: false,

        },
        {
            id: uuidv4(),
            event: "Programming tutorials for beginners",
            eventType: types[2],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.763328,
                lng: 36.265476
            },
            address: "Stav",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: true,

        },
        {
            id: uuidv4(),
            event: "Language exchange club",
            eventType: types[3],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 50.763338,
                lng: 36.565466
            },
            address: "Uebak",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: false,

        },

    ];

}

export default eventsType;