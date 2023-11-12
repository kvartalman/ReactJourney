import React from 'react';
import './Homepage.css';
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Advantages from "./Advantages/Advantages";
import Steps from "./Steps/Steps";
import Categories from "./Categories/Categories";

const HomePage = () => {
    return (
        <>
            <Carousel />
            <Categories />
            <Advantages />
            <Cards />
            <Steps />
        </>

    );
}

export default HomePage;