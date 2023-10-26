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

    const currentCardsSelector = useSelector(state => state.homePage.cardsData);

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
            <div>{cardsList()}</div>
            <Row xs={1} md={3} id={'cards-row'} className={'homePageCardEditorPreviewRow'}>
                {currentCardsSelector.length > 0 ?
                    <OfferCard
                        key={currentCardsSelector[activeCard].id}
                        bg={currentCardsSelector[activeCard].bg}
                        id={currentCardsSelector[activeCard].tagId}
                        title={currentCardsSelector[activeCard].title}
                        text={currentCardsSelector[activeCard].text}
                        button={
                            <Container fluid><Row className={'row-cols-auto'}>
                                {
                                    currentCardsSelector[activeCard].button.map(button => (
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
            </Row>
        </Container>
    );
};

export default ChooseHomePageCard;
