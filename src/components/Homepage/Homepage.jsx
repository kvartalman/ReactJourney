import React from 'react';
import './Homepage.css';
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Advantages from "./Advantages/Advantages";
import Steps from "./Steps/Steps";

const HomePage = () => {
    return (
        <>
            <Carousel />
            <Advantages />
            <Cards />
            <Steps />
        </>

    );
}

export default HomePage;