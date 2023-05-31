import React from 'react';
import Advantages from "./Advantages/Advantages";
import Cards from "./Cards/Cards";
import Steps from "./Steps/Steps";
import Carousel from "./Carousel/Carousel";

function HomePage(props) {
    return (
        <>
            <Carousel
                carouselData={props.carouselData}
            />
            <Advantages
                advData={props.advData}
            />
            <Cards
                cardsData={props.cardsData}
            />
            <Steps
                stepsElemsData={props.stepsElemsData}
            />
        </>

    );
}

export default HomePage;