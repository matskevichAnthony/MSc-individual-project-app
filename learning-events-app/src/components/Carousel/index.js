import React, { useEffect, useState } from 'react';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ForYouCard from '../CardComponents/ForYouCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Carousel = ({ information }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(information);
    }, [information]);

    return (
        <ReactCarousel
            responsive={responsive}
            arrows={false}
            centerMode={true}
            autoPlay={false}
            autoPlaySpeed={3500}
            infinite={true}
        >
            {cards.map((e) => {
                return <ForYouCard information={e} />
            })}
        </ReactCarousel>
    );
};

export default Carousel;