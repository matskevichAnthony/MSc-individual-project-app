import React from 'react';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UserCard from '../CardComponents/UserCard';
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

const UserCarousel = ({ information }) => {
    console.log(information);
    return (
        <ReactCarousel
            responsive={responsive}
            arrows={false}
            centerMode={true}
            autoPlay={false}
            autoPlaySpeed={3500}
            infinite={true}
        >
            {

                information ? information.map((e) => {
                    return <UserCard information={e} />
                })
                    :
                    <></>

            }
        </ReactCarousel>
    );
};

export default UserCarousel;