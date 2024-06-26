import React from "react";
import Button from "react-bootstrap/Button";
import '../../../../Homepage/Cards/Cards.css';
import '../../../../Homepage/Cards/Buttons/CardsButton.css';
import './ChooseHomePageCard.css';

const ChooseHomePageCard = (props) => {

    const handleCardSelect = (card, index) => {
        props.setCard(card);
        props.setActiveCardIndex(index);
        props.setButton(card.button[0]);
        props.setActiveButtonIndex(0);
    }

    const cardsList = () => {
        if (props.cardsSelector.length > 0) {
            return (
                props.cardsSelector.map((card, index) => (
                    <Button
                        key={index}
                        className={props.activeCardIndex === index ? 'homePageCardsEditorActiveButton' : null}
                        onClick={() => handleCardSelect(card, index)}
                    >
                        {card.title}
                    </Button>
                ))
            )
        }
    }

    return (
        <>
            {cardsList()}
        </>
    );
};

export default ChooseHomePageCard;
