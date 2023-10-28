import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import '../../../../Homepage/Cards/Cards.css';
import '../../../../Homepage/Cards/Buttons/CardsButton.css';
import './ChooseHomePageCard.css';
import {useSelector} from "react-redux";

const ChooseHomePageCard = (props) => {

    const handleCardSelect = (card, index) => {
        props.setCard(card);
        props.setActiveCardIndex(index);
    }

    const cardsList = () => {
        if (props.cardsSelector) {
            return (
                props.cardsSelector.map((card, index) => (
                    <Button
                        className={props.activeCardIndex === index ? 'activeButton' : 'defaultButton'}
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
            <div>{cardsList()}</div>

        </Container>
    );
};

export default ChooseHomePageCard;
