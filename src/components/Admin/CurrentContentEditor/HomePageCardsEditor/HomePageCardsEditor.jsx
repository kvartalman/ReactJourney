import React, {useEffect, useState} from "react";
import ChooseHomePageCard from "./ChooseHomePageCard/ChooseHomePageCard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import HomePageCardContentEdit from "./HomePageCardContentEdit/HomePageCardContentEdit";
import {
    cancelHomePageOfferCardDeletion,
    deleteHomePageOfferCard,
    fillHomePageOfferCards
} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {addCardsData} from "../../../../store/slices/homePageSlice";
import HomePageCardsEditorCardPreview from "./HomePageCardsEditorCardPreview/HomePageCardsEditorCardPreview";
import './HomePageCardsEditor.css';
import HomePageCardButtonsEditor from "./HomePageCardButtonsEditor/HomePageCardButtonsEditor";
import HomePageCardEditorCurrentCardPreview
    from "./HomePageCardEditorCurrentCardPreview/HomePageCardEditorCurrentCardPreview";
import HomePageCardsEditorFinalPreview from "./HomePageCardsEditorFinalPreview/HomePageCardsEditorFinalPreview";
import Button from "react-bootstrap/Button";

const HomePageCardsEditor = () => {

    const dispatch = useDispatch();

    const cardsSelector = useSelector(state => state.adminPanel.homePageOfferCards);
    const deletedCardsSelector = useSelector(state => state.adminPanel.deletedHomePageOfferCards);


    const [card, setCard] = useState(null);
    const [button, setButton] = useState(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);


    const deleteCardHandler = () => {
        dispatch(deleteHomePageOfferCard(
            {
                card: card,
                activeCardIndex: activeCardIndex
            }
        ))
    }

    const cancelDeletionHandler = () => {
        dispatch(cancelHomePageOfferCardDeletion())
    }

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(fillHomePageOfferCards(response.data));
            dispatch(addCardsData(response.data));
            if (response.data) {
                setCard(response.data[0]);
                setButton(response.data[0].button[0]);
            }
        });
    }, [])

    useEffect(() => {

    },)

    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <ChooseHomePageCard
                        activeCardIndex={activeCardIndex}
                        setActiveCardIndex={setActiveCardIndex}
                        setCard={setCard}
                        cardsSelector={cardsSelector}
                        card={card}
                        setButton={setButton}
                        setActiveButtonIndex={setActiveButtonIndex}
                    />
                    {cardsSelector.length > 0 ?
                        <Button
                            className={'nextPageButton'}
                            onClick={() => deleteCardHandler()}
                        >Delete card
                        </Button>
                        :
                        null
                    }
                    {deletedCardsSelector.length > 0 ?
                        <Button
                            className={'nextPageButton'}
                            onClick={() => cancelDeletionHandler()}
                        >
                            Cancel
                        </Button>
                        :
                        null
                    }
                    <h2>Edit card</h2>
                    <HomePageCardContentEdit
                        cardsSelector={cardsSelector}
                        card={card}
                        setCard={setCard}
                        activeCardIndex={activeCardIndex}
                        activeButtonIndex={activeButtonIndex}
                        setButton={setButton}
                    />
                    <HomePageCardButtonsEditor
                        cardsSelector={cardsSelector}
                        card={card}
                        button={button}
                        setButton={setButton}
                        activeCardIndex={activeCardIndex}
                        activeButtonIndex={activeButtonIndex}
                        setActiveButtonIndex={setActiveButtonIndex}
                    />
                </Col>
                <Col md={6} id={'homePageCardsEditorCardPreviewCol'}>
                    <div>
                        <HomePageCardEditorCurrentCardPreview
                            cardsSelector={cardsSelector}
                            activeCardIndex={activeCardIndex}
                            card={card}
                        />
                        <HomePageCardsEditorCardPreview
                            card={card}
                            activeCardIndex={activeCardIndex}
                            cardsSelector={cardsSelector}
                        />
                    </div>
                </Col>
            </Row>
            <Row className={'homePageCardsEditorCardsFinalPreviewRow'}>
                <h1>Final preview</h1>
                <HomePageCardsEditorFinalPreview/>
            </Row>
        </Container>
    );
};

export default HomePageCardsEditor;