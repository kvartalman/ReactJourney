import React from "react";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import './HomePageCardsEditorCardPreview.css';

const HomePageCardsEditorCardPreview = ({card, activeCardIndex, cardsSelector}) => {

    return (
        <>
            <h2>Вид карточки после изменений</h2>
            {card && cardsSelector.length > 0 ?
                <OfferCard
                    key={cardsSelector[activeCardIndex].id}
                    bg={cardsSelector[activeCardIndex].bg}
                    id={cardsSelector[activeCardIndex].tagId}
                    title={cardsSelector[activeCardIndex].title}
                    text={cardsSelector[activeCardIndex].text}
                    className={'homePageCardEditorPreviewCard'}
                    button={
                        <Container fluid><Row className={'row-cols-auto'}>
                            {
                                cardsSelector[activeCardIndex].button.map(button => (
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
                :
                null
            }
        </>
    );
};

export default HomePageCardsEditorCardPreview;