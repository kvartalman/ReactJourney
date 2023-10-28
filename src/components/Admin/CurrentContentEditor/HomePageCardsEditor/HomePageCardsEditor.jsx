import React, {useEffect, useState} from "react";
import ChooseHomePageCard from "./ChooseHomePageCard/ChooseHomePageCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import HomePageCardContentEdit from "./HomePageCardContentEdit/HomePageCardContentEdit";
import {fillHomePageOfferCards} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {addCardsData} from "../../../../store/slices/homePageSlice";
import HomePageCardsEditorCardPreview from "./HomePageCardsEditorCardPreview/HomePageCardsEditorCardPreview";
import './HomePageCardsEditor.css';
import HomePageCardButtonsEditor from "./HomePageCardButtonsEditor/HomePageCardButtonsEditor";
import OfferCard from "../../../Homepage/Cards/OfferCard";
import CardsButton from "../../../Homepage/Cards/Buttons/CardsButton";
import HomePageCardEditorCurrentCardPreview
    from "./HomePageCardEditorCurrentCardPreview/HomePageCardEditorCurrentCardPreview";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.adminPanel.homePageOfferCards)


    const [card, setCard] = useState(null);
    const [button, setButton] = useState(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(fillHomePageOfferCards(response.data));
            dispatch(addCardsData(response.data));
            if (response.data) {
                setCard(response.data[0]);
                setButton(response.data[0].button[0])
            }
        });
    }, [])

    useEffect(() => {
        setCard(cardsSelector[0])
    }, [cardsSelector])

    return (
        <Container fluid>
            <Row>
                <ChooseHomePageCard
                    activeCardIndex={activeCardIndex}
                    setActiveCardIndex={setActiveCardIndex}
                    setCard={setCard}
                    cardsSelector={cardsSelector}
                    card={card}
                />
                <Col md={6}>
                    <HomePageCardEditorCurrentCardPreview
                        activeCardIndex={activeCardIndex}
                    />
                    <HomePageCardContentEdit
                        cardsSelector={cardsSelector}
                        card={card}
                    />
                    <HomePageCardButtonsEditor
                        cardsSelector={cardsSelector}
                        card={card}
                        button={button}
                        setButton={setButton}
                    />
                </Col>
                <Col md={6} id={'homePageCardsEditorCardPreviewCol'}>
                    <HomePageCardsEditorCardPreview
                        card={card}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageCardsEditor;