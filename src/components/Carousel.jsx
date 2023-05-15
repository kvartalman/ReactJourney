import React from 'react';
import {Carousel} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Carousell = () => {
    return (
        <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.hdqwalls.com/download/heroes-of-the-storm-10k-2i-1920x1080.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className={'carousel-text'}>
                    <h3>И КАК Я ВСЕГДА ЛЮБЛЮ ГОВОРИТЬ</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.hdqwalls.com/download/hanamura-heroes-of-the-storm-4k-1920x1080.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className={'carousel-text'}>
                    <h3>ИГРАЙ</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.hdqwalls.com/download/orphea-heroes-of-the-storm-8k-9g-1920x1080.jpg"
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