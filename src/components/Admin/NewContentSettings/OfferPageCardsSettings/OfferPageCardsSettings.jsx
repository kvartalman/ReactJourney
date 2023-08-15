import React, {useRef, useState} from "react";
import '../../AdminPanel.css';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {offerPageAddCard} from "../../../../store/slices/offerPageSlice";

const OfferPageCardsSettings = () => {

    const gameOfferPages = useSelector(state => Object.keys(state.gameOfferPages.pagesData))
    const dispatch = useDispatch();

    const [offerCardTitle, setOfferCardTitle] = useState('');
    const [offerCardText, setOfferCardText] = useState('');

    let gameOfferSelector = useRef(null);

    const offerCardTitleInput = (e) => {
        setOfferCardTitle(e.target.value)
    };
    const offerCardTextInput = (e) => {
        setOfferCardText(e.target.value)
    };

    const addOfferPageCard = () => {
        dispatch(offerPageAddCard({
            gameOfferSelector: gameOfferSelector.current.value,
            title: offerCardTitle,
            text: offerCardText
        }));
        setOfferCardTitle('');
        setOfferCardText('');
    }

    const getOfferPages = gameOfferPages.map(name => (
        <option>{name}</option>
    ))

    return (
        <Form>
            <Row className="mb-3 formsRow">
                <h2>OfferPage Cards editor</h2>
                <Form.Group as={Col}>
                    <Form.Label>GameOffer Page</Form.Label>
                    <Form.Select ref={gameOfferSelector}>
                        {getOfferPages}
                    </Form.Select>
                    <Form.Label>Card title</Form.Label>
                    <Form.Control
                        onChange={offerCardTitleInput}
                        value={offerCardTitle}
                        placeholder="Enter card title"
                    />
                    <Form.Label>Card text</Form.Label>
                    <Form.Control
                        onChange={offerCardTextInput}
                        value={offerCardText}
                        placeholder="Enter Card text"
                    />
                </Form.Group>

                <div className={'addCardButtons'}>
                    <Button variant="primary" onClick={addOfferPageCard}>
                        Create Card
                    </Button>
                </div>
            </Row>
        </Form>
    );
}

export default OfferPageCardsSettings;