import React from "react";
import GameOffer from "./GameOffer";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        gameOffer: state.gameOfferPages.pagesData[props.page],
        canvasMenuData: state.gameOfferPages.canvasMenuData
    }
}

const mapDispatchToProps = () => {
    return {}
}

const GameOfferContainer = connect(mapStateToProps, mapDispatchToProps)(GameOffer);

export default GameOfferContainer