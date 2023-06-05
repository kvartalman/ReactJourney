import {Carousel} from "react-bootstrap";
import React from "react";

const CarouselContainer = (props) => {

    return (
        <Carousel
            carouselData={props.carouselData}
        />
    )
}

export default CarouselContainer