import React, {useEffect, useState} from "react";
import ChooseHomePageCard from "./ChooseHomePageCard/ChooseHomePageCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import HomePageCardContentEdit from "./HomePageCardContentEdit/HomePageCardContentEdit";
import {fillHomePageOfferCards} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import OfferCard from "../../../Homepage/Cards/OfferCard";
import CardsButton from "../../../Homepage/Cards/Buttons/CardsButton";
import {addCardsData} from "../../../../store/slices/homePageSlice";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.adminPanel.homePageOfferCards)

    const [card, setCard] = useState(null);

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(fillHomePageOfferCards(response.data));
            dispatch(addCardsData(response.data));
            if (response.data) {
                setCard(response.data[0]);
            }
        });
    }, [])

    useEffect(() => {
        setCard(cardsSelector[0])
    }, [cardsSelector])

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <ChooseHomePageCard
                        setCard={setCard}
                        cardsSelector={cardsSelector}
                        card={card}
                    />
                    <HomePageCardContentEdit
                        cardsSelector={cardsSelector}
                        card={card}
                    />
                </Col>
                <Col md={6}>
                    <Row xs={1} md={3} id={'cards-row'} className={'homePageCardEditorPreviewRow'}>
                        {card ?
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
                            :
                            null
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageCardsEditor;