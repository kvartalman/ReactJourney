import React from "react";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import {useSelector} from "react-redux";
import './HomePageCardEditorCurrentCardPreview.css';

const HomePageCardEditorCurrentCardPreview = ({cardsSelector, card, activeCardIndex}) => {

    const currentCardsSelector = useSelector(state => state.homePage.cardsData);


    const cardFinder = () => {
        if (card) {
            for (let i = 0; i < currentCardsSelector.length; i++) {
                if (currentCardsSelector[i].tagId === card.tagId) {
                    return (
                        <OfferCard
                            key={currentCardsSelector[i].id}
                            bg={currentCardsSelector[i].bg}
                            id={currentCardsSelector[i].tagId}
                            title={currentCardsSelector[i].title}
                            text={currentCardsSelector[i].text}
                            button={
                                <Container fluid><Row className={'row-cols-auto'}>
                                    {
                                        currentCardsSelector[i].button.map(button => (
                                            <CardsButton
                                                key={button.id}
                                                link={button.link}
                                                type={button.type}
                                                class={button.class}
                                                name={button.name}
                                            />))
                                    }
                                </Row></Container>}
                        />
                    )
                }
            }
        }
    }

    return (
        <>
            <h2>Current view of card</h2>
            {currentCardsSelector.length > 0 ?
                cardFinder()
                :
                null
            }
        </>
    );
};

export default HomePageCardEditorCurrentCardPreview;