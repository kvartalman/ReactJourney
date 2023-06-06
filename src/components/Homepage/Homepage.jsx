import React from 'react';
import AdvantagesContainer from "./Advantages/AdvantagesContainer";
import CardsContainer from "./Cards/CardsContainer";
import StepsContainer from "./Steps/StepsContainer";
import CarouselContainer from "./Carousel/CarouselContainer";
import './Homepage.css';

const HomePage = () => {
    return (
        <>
            <CarouselContainer/>
            <AdvantagesContainer/>
            <CardsContainer/>
            <StepsContainer/>
        </>

    );
}

export default HomePage;