import React from "react";
import {connect} from "react-redux";
import Carousel from "./Carousel";
import {setIsFetchingAC} from "../../../redux/homePageReducer";

class CarouselClass extends React.Component {

    render() {
        return (
            <Carousel carouselData={this.props.carouselData}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselData: state.homePage.carouselData,
        isFetching: state.homePage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching))
    }
}

const CarouselContainer = connect(mapStateToProps, mapDispatchToProps)(CarouselClass);

export default CarouselContainer