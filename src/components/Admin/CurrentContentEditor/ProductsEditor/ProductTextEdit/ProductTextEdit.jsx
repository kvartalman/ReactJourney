import React, {useState} from "react";
import './ProductTextEdit.css'
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

const ProductTextEdit = () => {

    const gameSelector = useSelector(state => state.productPage.productData)
    const [activeGameButton, setActiveGameButton] = useState(0);

    const handleGameSelect = (game, index) => {

        setActiveGameButton(index);
    }

    const gamesButtons = Object.keys(gameSelector).map((game, index) => (
        <Button
            key={index}
            onClick={() => handleGameSelect(game, index)}
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
        >
            {gameSelector[game].fullName}
        </Button>
    ))

    return (
        <>
            {gamesButtons}
        </>
    );
}

export default ProductTextEdit;