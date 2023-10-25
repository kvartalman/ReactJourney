import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Cards.css';
import './Buttons/CardsButton.css';
import OfferCard from "./OfferCard";
import CardsButton from "./Buttons/CardsButton";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addCardsData} from "../../../store/slices/homePageSlice";

const Cards = (props) => {
    const cardsData = useSelector(state => state.homePage.cardsData)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://mocki.io/v1/8ea44757-6a9f-4c51-84b9-36a7f17a8aaa').then(response => {
            dispatch(addCardsData(response.data));
            setLoading(false);

        });
    }, [])


    const getCardsArray = () => {
        if (cardsData) {
            return cardsData.map(card =>
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
            <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={3} id={'cards-row'} className={'border border-4 g-3'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                {loading ? <div id={'homePageCardsPreloader'}>
                    <img src={'/preloader.gif'} alt={'Loading...'}/>
                </div> : getCardsArray()
                }
            </Row>
        </Container>
    )
}

export default Cards