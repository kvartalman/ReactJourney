import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {addCardsData} from "../../../../../store/slices/homePageSlice";
import {useDispatch} from "react-redux";

const ChooseHomePageCard = (props) => {

    const dispatch = useDispatch();

    const [activeCard, setActiveCard] = useState(0);

    const handleCardSelect = (card, index) => {
        props.setCard(card);
        setActiveCard(index);
    }

    const cardsList = () => {
        if (props.cardsSelector) {
            return (
                props.cardsSelector.map((card, index) => (
                    <Button
                        className={activeCard === index ? 'activeButton' : 'defaultButton'}
                        onClick={() => handleCardSelect(card, index)}
                    >
                        {card.title}
                    </Button>
                ))
            )
        }
    }

    return (
        <Container fluid>
            {cardsList()}
        </Container>
    );
};

export default ChooseHomePageCard;
