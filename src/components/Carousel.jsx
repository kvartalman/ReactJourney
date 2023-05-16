import React from 'react';
import {Carousel} from "react-bootstrap";

const Carousell = () => {
    return (
        <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"./carousel/carousel1.jpg"}
                    alt="First slide"
                />
                <Carousel.Caption className={'carousel-text'}>
                    <h3>И КАК Я ВСЕГДА ЛЮБЛЮ ГОВОРИТЬ</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./carousel/carousel2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className={'carousel-text'}>
                    <h3>ИГРАЙ</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./carousel/carousel3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className={'carousel-text'}>
                    <h3>И НЕ ПРОИГРЫВАЙ</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}



export default Carousell;