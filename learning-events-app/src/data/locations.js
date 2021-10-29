import { v4 as uuidv4 } from "uuid";

const locations = () => {

    return [
        {
            id: uuidv4(),
            coordinates: [55.763338, 37.565466],
            address: 'ACD',
        },
        {
            id: uuidv4(),
            coordinates: [55.713338, 37.435466],
            address: 'cde',
        },
        {
            id: uuidv4(),
            coordinates: [55.363338, 37.465466],
            address: '69KENT ROAD',
        },
        {
            id: uuidv4(),
            coordinates: [40.41226639978614, -3.7054208737736456],
            address: 'THIS IS ISLAMS APARTMENT',
        },
    ];

}

export default locations;