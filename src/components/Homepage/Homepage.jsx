import React from 'react';
import CarouselContainer from "./Carousel/Carousel";
import AdvantagesContainer from "./Advantages/AdvantagesContainer";
import CardsContainer from "./Cards/CardsContainer";
import StepsContainer from "./Steps/StepsContainer";

const HomePage = (props) => {
    return (
        <>
            <CarouselContainer
                carouselData={props.carouselData}
            />
            <AdvantagesContainer
                advData={props.advData}
            />
            <CardsContainer
                cardsData={props.cardsData}
            />
            <StepsContainer
                stepsElemsData={props.stepsElemsData}
            />
        </>

    );
}

export default HomePage;