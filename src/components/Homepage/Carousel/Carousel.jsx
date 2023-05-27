import React from 'react';
import {Carousel} from "react-bootstrap";
import './Carousel.css'
import CarouselItems from "./CarouselItems";

const Carousell = (props) => {

    let carouselItemArr = props.carouselData.map(item => (
        <Carousel.Item>
            <CarouselItems srcImg={item.srcImg} altImg={item.altImg}
                           text={<Carousel.Caption className={'carousel-text'}>{item.text}</Carousel.Caption>} />
        </Carousel.Item>
    ))

    return (
        <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
            {carouselItemArr}
        </Carousel>

    )
}



export default Carousell;