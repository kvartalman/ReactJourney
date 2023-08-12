import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useRef, useState} from "react";
import './AdminPanel.css'
import {useDispatch, useSelector} from "react-redux";
import Cards from "../Homepage/Cards/Cards";
import {addCard, addButton} from '../../store/slices/homePageSlice'
import {offerPageAddCard} from "../../store/slices/offerPageSlice";
import ContentSliderSettings from "./ProductPageSettings/ContentSliderSettings/ContentSliderSettings";

const AdminPanel = () => {

    const cardsData = useSelector(state => state.homePage.cardsData)
    const gameOfferPages = useSelector(state => Object.keys(state.gameOfferPages.pagesData))
    const linksList = useSelector(state => state.adminPanel.linksList)
    const dispatch = useDispatch();

    const [tagId, setTagId] = useState('');
    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');
    const [btnName, setBtnName] = useState('');
    const [offerCardTitle, setOfferCardTitle] = useState('');
    const [offerCardText, setOfferCardText] = useState('');

    let newButtonType = useRef(null);
    let cardKey = useRef(null);
    let newLink = useRef(null);
    let gameOfferSelector = useRef(null);

    const tagInput = (e) => {
        setTagId(e.target.value)
    };
    const titleInput = (e) => {
        setTitle(e.target.value)
    };
    const cardTextInput = (e) => {
        setCardText(e.target.value)
    };
    const btnNameInput = (e) => {
        setBtnName(e.target.value)
    };
    const offerCardTitleInput = (e) => {
        setOfferCardTitle(e.target.value)
    };
    const offerCardTextInput = (e) => {setOfferCardText(e.target.value)};

    const addHomePageCard = () => {
        dispatch(addCard({tagId, title, text: cardText}));
        setTagId('');
        setTitle('');
        setCardText('');
    }
    const addHomePageCardButton = () => {
        dispatch(addButton({
            cardKey: cardKey.current.value,
            link: newLink.current.value,
            btnType: newButtonType.current.value,
            btnName
        }))
        setBtnName('');
    }

    const addOfferPageCard = () => {
        dispatch(offerPageAddCard({
            gameOfferSelector: gameOfferSelector.current.value,
            title: offerCardTitle,
            text: offerCardText
        }));
        setOfferCardTitle('');
        setOfferCardText('');
    }

    const cardsList = Object.keys(cardsData).map(card => (
        <option>{card}</option>
    ))

    const links = linksList.map(card => (
        <option>{card}</option>
    ))

    const getOfferPages = gameOfferPages.map(name => (
        <option>{name}</option>
    ))

    return (
        <>
            <Row className={'cardButtonForms'}>

                {/*HOMEPAGE CARDS EDITOR*/}
                <Form>
                    <Row className="mb-3 formsRow">
                        <h2>HomePage Cards Editor</h2>
                        <Form.Group as={Col} id={'addCardForm'}>
                            <Form.Label>Card ID</Form.Label>
                            <Form.Control
                                onChange={tagInput}
                                type=""
                                placeholder="Ented cardID"
                                value={tagId}
                            />
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
                            <Button onClick={addHomePageCard} variant="primary">
                                Create Card
                            </Button>
                        </div>
                    </Row>
                </Form>

                {/*HOMEPAGE CARDS BUTTONS EDITOR*/}
                <Form>
                    <Row className="mb-3 formsRow">
                        <h2>HomePage Card Buttons Editor</h2>
                        <Form.Group as={Col}>
                            <Form.Label>Choose button type</Form.Label>
                            <Form.Select ref={newButtonType}>
                                <option>mainButton</option>
                                <option>button</option>
                            </Form.Select>
                            <Form.Label>Card</Form.Label>
                            <Form.Select ref={cardKey}>
                                {cardsList}
                            </Form.Select>
                            <Form.Label>Links list</Form.Label>
                            <Form.Select ref={newLink}>
                                {links}
                            </Form.Select>
                            <Form.Label>Button Name</Form.Label>
                            <Form.Control
                                onChange={btnNameInput}
                                placeholder={'Enter button name...'}
                                value={btnName}
                            />
                        </Form.Group>
                        <div className={'addCardButtons'}>
                            <Button variant="primary" onClick={addHomePageCardButton}>
                                Add Button
                            </Button>
                        </div>
                    </Row>
                </Form>

                {/*OFFERPAGE CARDS EDITOR*/}
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

                <ContentSliderSettings />
            </Row>
            <Cards />
        </>
    );
}

export default AdminPanel