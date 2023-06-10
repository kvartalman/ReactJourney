import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Cards.css';
import OfferCard from "./OfferCard";
import CardsButton from "./Buttons/CardsButton";
import './Buttons/CardsButton.css';
import axios from "axios";

class CardsC extends React.Component {

    componentDidMount() {
        axios.get('https://mocki.io/v1/8cb0f160-92f7-4cf8-a6c1-f63690df514e').then(response => {
            this.props.addCardData(response.data)
        });
    }

    getCardsArray = () => {
        return ((Object.keys(this.props.cardsData)).map(card =>
            (
                <OfferCard
                    key={card.id}
                    bg={this.props.cardsData[card].bg}
                    id={this.props.cardsData[card].tagId}
                    title={this.props.cardsData[card].title}
                    text={this.props.cardsData[card].text}
                    button={
                        <Container fluid><Row className={'row-cols-auto'}>
                            {
                                this.props.cardsData[card].button.map(button => (
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
            )))
    }

    render () {
        return (
            <Container fluid>
                <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
                <Row xs={1} md={2} id={'cards-row'} className={'border border-4 g-3'}>
                    {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                    {this.getCardsArray()}
                </Row>
            </Container>
        )
    }
}

export default CardsC