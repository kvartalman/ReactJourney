import React from "react";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import OfferCard from "../../../../Homepage/Cards/OfferCard";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";

const HomePageCardsSettingsFinalPreview = (props) => {

    const getCardsArray = () => {
        if (props.cardsData) {
            return props.cardsData.map(card =>
                (
                    <OfferCard
                        key={card.id}
                        bg={card.bg}
                        id={card.tagId}
                        title={card.title}
                        text={card.text}
                        button={
                            <Container fluid><Row className={'row-cols-auto'}>
                                {
                                    card.button.map(button => (
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
                ))
        }
    }

    return (

        <Container fluid>
            <img src={'/backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={3} id={'cards-row'} className={'border border-4 g-3'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                {props.loading ? <div id={'homePageCardsPreloader'}>
                    <img src={'/preloader.gif'} alt={'Loading...'}/>
                </div> : getCardsArray()
                }
            </Row>
        </Container>
    )
}

export default HomePageCardsSettingsFinalPreview;