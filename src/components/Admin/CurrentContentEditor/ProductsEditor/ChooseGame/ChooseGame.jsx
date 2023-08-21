import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './ChooseGame.css';

const ChooseGame = (props) => {


    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeProductButton, setActiveProductButton] = useState(0);

    const handleProductSelect = (product, index) => {

        setActiveProductButton(index);
        props.setProduct(product);
    }

    const handleGameSelect = (game, index) => {

        setActiveGameButton(index);
        setActiveProductButton(0);
        props.setGame(game);
        props.setProduct(Object.keys(props.gameSelector[game].products)[0])
    }

    const gamesButtons = Object.keys(props.gameSelector).map((game, index) => (
        <Button
            key={index}
            onClick={() => handleGameSelect(game, index)}
            className={activeGameButton === index ? 'activeButton' : 'defaultButton'}
        >
            {props.gameSelector[game].fullName}
        </Button>
    ))

    const productsButtons = Object.keys(props.gameSelector[props.game].products).map((product, index) => (
        <Button
            key={index}
            onClick={() => handleProductSelect(product, index)}
            className={activeProductButton === index ? 'activeButton' : 'defaultButton'}
        >
            {props.gameSelector[props.game].products[product].header}
        </Button>
    ))

    return (
        <Container fluid id={'chooseButtonsMainContainer'}>
                <div className={'gamesButtonsContainer'}>
                    {gamesButtons}
                </div>
                <div className={'productsButtonsContainer'}>
                    {productsButtons}
                </div>
                <div>
                    <Button className={'nextPageButton'} onClick={() => props.setKey('title')}>Next</Button>
                </div>
        </Container>
    );
}

export default ChooseGame;