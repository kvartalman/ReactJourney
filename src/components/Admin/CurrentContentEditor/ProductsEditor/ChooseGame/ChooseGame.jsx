import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './ChooseGame.css';

const ChooseGame = (props) => {


    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeProductButton, setActiveProductButton] = useState(0);
    const [sort, setSort] = useState(false);
    const [productsCopy, setProductsCopy] = useState([...Object.keys(props.gameSelector[props.game].products)]);
    const [showSortButtons, setShowSortButtons] = useState(false);
    const alphabetSort = () => {
        setSort(!sort)
        if (sort) {
            setProductsCopy(productsCopy.sort())
        } else {
            setProductsCopy([...Object.keys(props.gameSelector[props.game].products)]);
        }
    }

    const sortButtonsFunc = () => {
        setShowSortButtons(!showSortButtons);
    }

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

    // In this map function we get only products without key 'cards' inside. We have cards only in subcategories and
    // game pages

    const productsButtons = productsCopy.map((product, index) => (
        !props.gameSelector[props.game].products[product].cards ?
            <Button
                key={index}
                onClick={() => handleProductSelect(product, index)}
                className={activeProductButton === index ? 'activeButton' : 'defaultButton'}
            >
                {props.gameSelector[props.game].products[product].header}
            </Button>
            :
            null
    ))

    return (
        <Container fluid id={'chooseButtonsMainContainer'}>
            <div className={'gamesButtonsContainer'}>
                {gamesButtons}
            </div>
            <div>
                <Button className={'nextPageButton'} onClick={() => sortButtonsFunc()}>{showSortButtons ?
                    'Hide sort types'
                    :
                    'Show sort types'
                }
                </Button>
            </div>
            {showSortButtons ?
                <div>
                    <Button className={'nextPageButton'} onClick={() => alphabetSort()}>Alphabet sort</Button>
                </div>
                :
                null
            }
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