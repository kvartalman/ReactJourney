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

const Cards = () => {
    return (
        <Container fluid>
            <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={2} id={'cards-row'} className={'border border-4 g-3'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                    <OfferCard id={'dotaCard'} title={'Dota 2'} text={'We suggest you' +
                        ' to order a Dota 2 boost'} button={<ButtonDota />} />
                    <OfferCard id={'csCard'} title={'CS:GO'} text={'We suggest you' +
                        ' to order a CS:GO boost'} button={<ButtonCS />} />
                    <OfferCard id={'hotsCard'} title={'Heroes of the Storm'} text={'We suggest you ' +
                        'order a HotS boost'} button={<ButtonHotS />} />
                    <OfferCard id={'warfaceCard'} title={'Warface'} text={'We suggest you' +
                        ' order a Warface boost'} button={<ButtonWarface />} />
                    <OfferCard id={'lolCard'} title={'League of Legends'} text={'We suggest you' +
                        ' order a LoL boost'} button={<ButtonLoL />} />
                    <OfferCard id={'pubgCard'} title={'PUBG'} text={'We suggest' +
                        ' you order a PUBG boost'} button={<ButtonPUBG />} />
            </Row>
        </Container>
    )
}

export default Cards