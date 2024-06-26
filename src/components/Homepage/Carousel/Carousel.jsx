import React from 'react';
import {Carousel} from "react-bootstrap";
import './Carousel.css'
import CarouselItems from "./CarouselItems";
import {useSelector} from "react-redux";

const CarouselComponent = () => {

    const carouselData = useSelector(state => state.homePage.carouselData)

    const carouselItemArr = carouselData.map(item => (
        <Carousel.Item>
            <CarouselItems key={item.id} srcImg={item.srcImg} altImg={item.altImg}/>
        </Carousel.Item>
    ))

    return (
            <Carousel fade className={'carousel'} indicators={false} interval={5000} pause={false}>
                {carouselItemArr}
            </Carousel>
    )
}


export default CarouselComponent;