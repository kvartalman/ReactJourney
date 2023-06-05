import React from "react";
import GameOffer from "./GameOffer";

const GameOfferContainer = (props) => {

    const state = props.store.getState();

    return (
       <GameOffer
           gameOffer={state.gameOfferPages.pagesData[props.page]}
           canvasMenuData={state.gameOfferPages.canvasMenuData}
       />
    )
}

export default GameOfferContainer