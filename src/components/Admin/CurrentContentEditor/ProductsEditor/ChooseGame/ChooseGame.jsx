import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './ChooseGame.css';
import {forEach} from "react-bootstrap/ElementChildren";

const ChooseGame = (props) => {


    const [activeGameButton, setActiveGameButton] = useState(0);
    const [activeSubCtgButton, setActiveSubCtgButton] = useState(0);
    const [activeProductButton, setActiveProductButton] = useState(0);
    const [sort, setSort] = useState(false);
    const [productsCopy, setProductsCopy] = useState([...props.subCtg.products]);
    const [showSortButtons, setShowSortButtons] = useState(false);

    const alphabetSort = () => {
        setSort(!sort)
        if (sort) {
            setProductsCopy(productsCopy.sort((product1, product2) => product1.header.localeCompare(product2.header)))
        } else {
            setProductsCopy([...props.subCtg.products]);
        }
    }

    const sortButtonsFunc = () => {
        setShowSortButtons(!showSortButtons);
    }

    const handleGameSelect = (game, index) => {
        setActiveGameButton(index);
        setActiveProductButton(0);
        props.setGame(props.gameSelector[game]);
        props.setSubCtg(props.gameSelector[game].subCategories[0]);
        props.setProduct(props.gameSelector[game].subCategories[0].products[0]);
        // We create new productsCopy with products of game we chose last time. Without this, we will get an error
        // because we change game, but we still use old copy of products
        setProductsCopy([...props.gameSelector[game].subCategories[0].products])
    }

    const handleSubCtgSelect = (subCtg, index) => {
        props.setSubCtg(subCtg);
        setActiveSubCtgButton(index);
    }

    const handleProductSelect = (product, index) => {
        setActiveProductButton(index);
        props.setProduct(product);
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

    const subCtgButtons = () => {

            props.gameSelector[props.game].subCategories.map((subCtg, index) => (
                <Button
                    key={index}
                    onClick={() => handleSubCtgSelect(subCtg, index)}
                    className={activeSubCtgButton === index ? 'activeButton' : 'defaultButton'}
                >
                    {subCtg.name}
                </Button>
            ))

    }

    const productsButtons = productsCopy.map((product, index) => (
            <Button
                key={index}
                onClick={() => handleProductSelect(product, index)}
                className={activeProductButton === index ? 'activeButton' : 'defaultButton'}
            >
                {product.header}
            </Button>
    ))

    return (
        <Container fluid id={'chooseButtonsMainContainer'}>
            <div className={'gamesButtonsContainer'}>
                {gamesButtons}
            </div>
            <div>
                {subCtgButtons}
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