import { v4 as uuidv4 } from "uuid";
import Type from "./eventsType";
import eventImg from '../assets/eventsIcons/event1.jpg';

const eventsType = () => {

    return [
        {
            id: uuidv4(),
            event: "Programming and Coffee",
            eventType: Type[0],
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
            event: "Bottellon",
            eventType: Type[1],
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
            event: "Public PickUp",
            eventType: Type[2],
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
            eventType: Type[0],
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
            eventType: Type[1],
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
            event: "Nice tings",
            eventType: Type[2],
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
            event: "Fucking shit",
            eventType: Type[0],
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
        {
            id: uuidv4(),
            event: "Bottellon",
            eventType: Type[1],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 51.563338,
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
            event: "Public PickUp",
            eventType: Type[2],
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
            event: "Programming and Coffee",
            eventType: Type[0],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.563338,
                lng: 36.365466
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
            event: "Bottellon",
            eventType: Type[1],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 53.963338,
                lng: 36.275466
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
            event: "Public PickUp",
            eventType: Type[2],
            description: "Today we are going to learn how to use python and drink some nice coffee",
            place: "Icon Club",
            picture: eventImg,
            GEO: {
                lat: 52.763338,
                lng: 35.265466
            },
            address: "53 GEORGE ST",
            placesAvailable: 15,
            minAge: 18,
            price: "20$",
            date: "11/10/2021",
            time: "12:10",
            isToggled: true,

        },

    ];

}

export default eventsType;