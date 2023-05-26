import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Cards.css';
import OfferCard from "./OfferCard";
import CardsButton from "./Buttons/CardsButton";
import './Buttons/CardsButton.css'

const Cards = (props) => {

    let cardsArray = props.CardsData.map(card => (<OfferCard id={card.tagId} title={
        card.title} text={card.text} button={
        card.button.map(button => (<CardsButton link={button.link} type={button.type} class={button.class}
        name={button.name} />))
    }
    />))

    return (
        <Container fluid>
            <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={2} id={'cards-row'} className={'border border-4 g-3'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                {cardsArray}
            </Row>
        </Container>
    )
}

export default Cards