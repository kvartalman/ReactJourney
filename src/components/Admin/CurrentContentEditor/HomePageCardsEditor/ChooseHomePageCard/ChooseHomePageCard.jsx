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
        if (currentCardsSelector) {
            return (
                currentCardsSelector.map((card, index) => (
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
                {props.card ?
                    <OfferCard
                        key={props.card.id}
                        bg={props.card.bg}
                        id={props.card.tagId}
                        title={props.card.title}
                        text={props.card.text}
                        button={
                            <Container fluid><Row className={'row-cols-auto'}>
                                {
                                    props.card.button.map(button => (
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
