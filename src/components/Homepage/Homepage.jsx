import React from 'react';
import Advantages from "./Advantages/Advantages";
import Cards from "./Cards/Cards";
import Steps from "./Steps/Steps";
import Carousel from "./Carousel/Carousel";

function HomePage(props) {
    return (
        <>
            <Carousel/>
            <Advantages/>
            <Cards
                CardsData={props.CardsData}
            />
            <Steps/>
        </>

    );
}

export default HomePage;