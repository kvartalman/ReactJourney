import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cards from "../Homepage/Cards/Cards";
import React from "react";
import './AdminPanel.css'
import {offerPageCardsActionCreator, offerPageOnChangeActionCreator} from "../../redux/offerPagesCardsReducer";
import {
    homePageButtonsActionCreator,
    homePageCardsActionCreator,
    homePageOnChangeActionCreator
} from "../../redux/homePageReducer";

const AdminPanel = (props) => {

    let newCardId = React.createRef();
    let newCardTitle = React.createRef();
    let newCardText = React.createRef();

    let newButtonType = React.createRef();
    let cardTitle = React.createRef();
    let newButtonName = React.createRef();
    let newLink = React.createRef();

    let newOfferPageCardTitle = React.createRef();
    let newOfferPageCardText = React.createRef();
    let gameOfferSelector = React.createRef();

    const cardsList = props.cardsData.map(card => (
        <option>{card.title}</option>
    ))

    const linksList = props.linksList.map(card => (
        <option>{card}</option>
    ))

    const getOfferPages = props.gameOfferPages.map(name => (
        <option>{name}</option>
    ))

    let addHomePageCardButton = () => {
        props.dispatch(homePageButtonsActionCreator(
            cardTitle.current.value, newLink.current.value, newButtonType.current.value
        ))
    }
    let addHomePageCard = () => {
        props.dispatch(homePageCardsActionCreator())
    }

    let addOfferPageCard = () => {
            props.dispatch(offerPageCardsActionCreator(gameOfferSelector.current.value))
    }

    let onChangeCardId = () => {
        let text = newCardId.current.value;
        props.dispatch(homePageOnChangeActionCreator(text, 'cardId'))
    }
    let onChangeCardTitle = () => {
        let text = newCardTitle.current.value;
        props.dispatch(homePageOnChangeActionCreator(text, 'cardTitle'))
    }
    let onChangeCardText = () => {
        let text = newCardText.current.value;
        props.dispatch(homePageOnChangeActionCreator(text, 'cardText'))
    }
    let onChangeButtonName = () => {
        let text = newButtonName.current.value;
        props.dispatch(homePageOnChangeActionCreator(text, 'buttonName'))
    }

    let onChangeOfferCardTitle = () => {
        let text = newOfferPageCardTitle.current.value;
        props.dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardTitle'))
    }
    let onChangeOfferCardText = () => {
        let text = newOfferPageCardText.current.value;
        props.dispatch(offerPageOnChangeActionCreator(text, 'offerPageCardText'))
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
                                onChange={onChangeCardId}
                                ref={newCardId}
                                type=""
                                placeholder="Ented cardID"
                                value={props.homePageForms.cardIdForm}
                            />
                            <Form.Label>Card title</Form.Label>
                            <Form.Control
                                onChange={onChangeCardTitle}
                                ref={newCardTitle}
                                type=""
                                placeholder="Enter card title"
                                value={props.homePageForms.cardTitleForm}
                            />
                            <Form.Label>Card text</Form.Label>
                            <Form.Control
                                onChange={onChangeCardText}
                                value={props.homePageForms.cardTextForm}
                                ref={newCardText}
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
                            <Form.Select ref={cardTitle}>
                                {cardsList}
                            </Form.Select>
                            <Form.Label>Links list</Form.Label>
                            <Form.Select ref={newLink}>
                                {linksList}
                            </Form.Select>
                            <Form.Label>Button Name</Form.Label>
                            <Form.Control
                                onChange={onChangeButtonName}
                                ref={newButtonName}
                                placeholder={'Enter button name...'}
                                value={props.homePageForms.buttonNameForm}
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
                                onChange={onChangeOfferCardTitle}
                                ref={newOfferPageCardTitle}
                                value={props.offerPageForms.cardTitleForm}
                                placeholder="Enter card title"
                            />
                            <Form.Label>Card text</Form.Label>
                            <Form.Control
                                onChange={onChangeOfferCardText}
                                ref={newOfferPageCardText}
                                value={props.offerPageForms.cardTextForm}
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
            <Cards cardsImgTab={props.cardsImgTab}
                   cardsData={props.cardsData}/>
        </>
    );
}

export default AdminPanel