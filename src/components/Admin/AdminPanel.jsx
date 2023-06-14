import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useRef, useState} from "react";
import './AdminPanel.css'
import CardsContainer from "../Homepage/Cards/CardsContainer";


const AdminPanel = (props) => {

    const cardsList = Object.keys(props.cardsData).map(card => (
        <option>{card}</option>
    ))

    const linksList = props.linksList.map(card => (
        <option>{card}</option>
    ))

    const getOfferPages = props.gameOfferPages.map(name => (
        <option>{name}</option>
    ))

    let newButtonType = useRef(null);
    let cardKey = useRef(null);
    let newLink = useRef(null);
    let gameOfferSelector = useRef(null);

    const [tagId, setTagId] = useState('');
    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');
    const [btnName, setBtnName] = useState('');
    const [offerCardTitle, setOfferCardTitle] = useState('');
    const [offerCardText, setOfferCardText] = useState('');
    const tagInput = (e) => {setTagId(e.target.value)};
    const titleInput = (e) => {setTitle(e.target.value)};
    const cardTextInput = (e) => {setCardText(e.target.value)};
    const btnNameInput = (e) => {setBtnName(e.target.value)};
    const offerCardTitleInput = (e) => {setOfferCardTitle(e.target.value)};
    const offerCardTextInput = (e) => {setOfferCardText(e.target.value)};

    const addHomePageCard = () => {
        props.addHomePageCard(tagId, title, cardText);
        setTagId('');
        setTitle('');
        setCardText('');
    }
    const addHomePageCardButton = () => {
        props.addHomePageCardButton(
            cardKey.current.value,
            newLink.current.value,
            newButtonType.current.value,
            btnName
        )
        setBtnName('');
    }

    const addOfferPageCard = () => {
        props.addOfferPageCard(gameOfferSelector.current.value, offerCardTitle, offerCardText);
        setOfferCardTitle('');
        setOfferCardText('');
    }

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
                                {linksList}
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
            </Row>
            <CardsContainer />
        </>
    );
}

export default AdminPanel