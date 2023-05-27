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
                advImgTab={props.advImgTab}
                advData={props.advData}
            />
            <Cards
                cardsImgTab={props.cardsImgTab}
                cardsData={props.cardsData}
            />
            <Steps
                stepsImgTab={props.stepsImgTab}
                stepsElemsData={props.stepsElemsData}
            />
        </>

    );
}

export default HomePage;