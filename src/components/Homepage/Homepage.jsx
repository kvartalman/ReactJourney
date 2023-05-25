import React from 'react';
import {Container} from "react-bootstrap";
import Advantages from "./Advantages/Advantages";
import Cards from "./Cards/Cards";
import Steps from "./Steps/Steps";
import Carousel from "./Carousel/Carousel";

function HomePage() {
    return (
        <>
            <Carousel/>
            <Advantages/>
            <Cards/>
            <Steps/>
        </>

    );
}

export default HomePage;