import React from "react";
import GameOffer from "./GameOffer";
import {connect} from "react-redux";

class GameOfferClass extends React.Component {
    render() {
        return (
            <GameOffer
                gameOffer={this.props.gameOffer}
                canvasMenuData={this.props.canvasMenuData}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        gameOffer: state.gameOfferPages.pagesData[props.page],
        canvasMenuData: state.gameOfferPages.canvasMenuData
    }
}

const mapDispatchToProps = () => {
    return {}
}

const GameOfferContainer = connect(mapStateToProps, mapDispatchToProps)(GameOfferClass);

export default GameOfferContainer