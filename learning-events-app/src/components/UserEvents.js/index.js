import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from '../CardComponent';
import { Wrapper } from './styled';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
// TO DO DESIGN AND ORGANIZE. GET DATA FROM REDUX INNIT.
const UserEvents = ({ deviceType, information }) => {

    return (
        <Carousel
            deviceType={deviceType}
            responsive={responsive}
        >
            {information.map((card) =>
                <CardComponent information={card} />
            )}

        </Carousel>
    )

}

export default UserEvents