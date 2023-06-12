import React from "react";
import {connect} from "react-redux";
import Carousel from "./Carousel";

class CarouselClass extends React.Component {
    render() {
        return (
            <Carousel carouselData={this.props.carouselData} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: state.homePage.carouselData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(CarouselClass);

export default CarouselContainer