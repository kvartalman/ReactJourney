import React, {useEffect, useState} from "react";
import '../../AdminPanel.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addCard} from "../../../../store/slices/homePageSlice";
import {useDispatch, useSelector} from "react-redux";
import HomePageCardsButtonsSettings from "./HomePageCardsButtonsSettings/HomePageCardsButtonsSettings";
import Container from "react-bootstrap/Container";
import HomePageCardsSettingsFinalPreview from "./HomePageCardsSettingsFinalPreview/HomePageCardsSettingsFinalPreview";
import axios from "axios";
import {addHomePageOfferCardsData} from "../../../../store/slices/adminPanelSlices/adminPanelNewContentSlice";

const HomePageCardsSettings = () => {

    const dispatch = useDispatch();

    const cardsData = useSelector(state => state.adminPanelNewContent.homePageOfferCards)
    const gamesSelector = useSelector(state => state.gameOfferPages.pagesData)

    const [loading, setLoading] = useState(true);
    const [tagId, setTagId] = useState('');
    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');


    const titleInput = (e) => {
        setTitle(e.target.value)
    };
    const cardTextInput = (e) => {
        setCardText(e.target.value)
    };

    const addHomePageCard = () => {
        dispatch(addCard({tagId, title, text: cardText}));
        setTagId('');
        setTitle('');
        setCardText('');
    }

    useEffect(() => {
        axios.get('https://mocki.io/v1/bbcef0d5-c8a0-44a0-bedf-6e3ca13ff643').then(response => {
            dispatch(addHomePageOfferCardsData(response.data));
            setLoading(false);

        });
    }, [])

    return (
        <Container fluid>
            <Form>
                    <h2>HomePage Cards Editor</h2>
                    <Form.Group as={Col} id={'addCardForm'}>
                        <Form.Label>Card title</Form.Label>
                        <Form.Control
                            onChange={titleInput}
                            type=""
                            placeholder="Enter card title"
                            value={title}
                        />
                        <Form.Label>Card text</Form.Label>
                        <Form.Control
                            onChange={cardTextInput}
                            value={cardText}
                            placeholder="Enter Card text"
                        />
                    </Form.Group>
                    <div className={'addCardButtons'}>
                        <Button
                            onClick={addHomePageCard}
                            variant="primary"
                            className={'nextPageButton'}
                        >
                            Create Card
                        </Button>
                    </div>
            </Form>
            <HomePageCardsButtonsSettings
                cardsData={cardsData}
                gamesSelector={gamesSelector}
            />
            <HomePageCardsSettingsFinalPreview
                cardsData={cardsData}
                loading={loading}
            />
        </Container>
    );
}

export default HomePageCardsSettings;