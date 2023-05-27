import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Cards.css';
import OfferCard from "./OfferCard";
import CardsButton from "./Buttons/CardsButton";
import './Buttons/CardsButton.css'

const Cards = (props) => {

    let cardsArray = props.cardsData.map(card => (<OfferCard id={card.tagId} title={
        card.title} text={card.text} button={<Container fluid><Row className={'row-cols-auto'}>{
        card.button.map(button => (<CardsButton link={button.link} type={button.type} class={button.class}
                                                name={button.name} />))
    }</Row></Container>}
    />))

    return (
        <Container fluid>
            {props.cardsImgTab}
            <Row xs={1} md={2} id={'cards-row'} className={'border border-4 g-3'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                {cardsArray}
            </Row>
        </Container>
    )
}

export default Cards