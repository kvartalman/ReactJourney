import React from "react";
import {connect} from "react-redux";
import CarouselComponent from "./Carousel";

const mapStateToProps = (state) => {
    return {
        carouselData: state.homePage.carouselData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(CarouselComponent);

export default CarouselContainer