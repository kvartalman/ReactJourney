import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ButtonCS from "./Buttons/ButtonCS";
import ButtonLoL from "./Buttons/ButtonLoL";
import ButtonHotS from "./Buttons/ButtonHotS";
import ButtonDota from "./Buttons/ButtonDota";
import ButtonWarface from "./Buttons/ButtonWarface";
import ButtonPUBG from "./Buttons/ButtonPUBG";
import './Cards.css';
import OfferCard from "./OfferCard";

let cardsDataArray = [
    {tagId: 'dotaCard', title: 'Dota 2', text: 'We suggest you to order a Dota 2 boost', button: <ButtonDota />},
    {tagId: 'csCard', title: 'CS:GO', text: 'We suggest you to order a CS:GO boost', button: <ButtonCS />},
    {tagId: 'hotsCard', title: 'Heroes of the Storm', text: 'We suggest you to order a HotS boost', button: <ButtonHotS />},
    {tagId: 'warfaceCard', title: 'Warface', text: 'We suggest you to order a Warface boost', button: <ButtonWarface />},
    {tagId: 'lolCard', title: 'League of Legends', text: 'We suggest you to order a LoL boost', button: <ButtonLoL />},
    {tagId: 'pubgCard', title: 'PUBG', text: 'We suggest you to order a PUBG boost', button: <ButtonPUBG />},
]

let cardsArray = cardsDataArray.map(card => (<OfferCard id={card.tagId} title={
    card.title} text={card.text} button={card.button} />))



const Cards = () => {
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