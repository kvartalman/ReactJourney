import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cards from "../Homepage/Cards/Cards";
import React from "react";
import './AdminPanel.css'
import {
    homePageButtonsActionCreator,
    homePageCardsActionCreator,
    homePageOnChangeActionCreator
} from "../../redux/state";

const AdminPanel = (props) => {

    const cardsList = props.cardsData.map(card => (
        <option>{card.title}</option>
    ))

    const linksList = props.linksList.map(card => (
        <option>{card}</option>
    ))

    let newCardId = React.createRef();
    let newCardTitle = React.createRef();
    let newCardText = React.createRef();

    let newButtonType = React.createRef();
    let cardTitle = React.createRef();
    let newButtonName = React.createRef();
    let newLink = React.createRef();

    let addButton = () => {
        props.dispatch(homePageButtonsActionCreator(
            cardTitle.current.value, newLink.current.value, newButtonType.current.value
        ))
    }

    let addCard = () => {
        props.dispatch(homePageCardsActionCreator())
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

    return (
        <>
            <Row className={'cardButtonForms'}>
                <Form>
                    <Row className="mb-3 cardFormsRow">
                        <Form.Group as={Col} id={'addCardForm'}>
                            <Form.Label>Card ID</Form.Label>
                            <Form.Control
                                onChange={onChangeCardId}
                                ref={newCardId}
                                type=""
                                placeholder="Ented cardID"
                                value={props.forms.homePageCards.cardIdForm}
                            />
                            <Form.Label>Card title</Form.Label>
                            <Form.Control
                                onChange={onChangeCardTitle}
                                ref={newCardTitle}
                                type=""
                                placeholder="Enter card title"
                                value={props.forms.homePageCards.cardTitleForm}
                            />
                            <Form.Label>Card text</Form.Label>
                            <Form.Control
                                onChange={onChangeCardText}
                                value={props.forms.homePageCards.cardTextForm}
                                ref={newCardText}
                                placeholder="Enter Card text"
                            />
                        </Form.Group>
                        <div className={'addCardButtons'}>
                            <Button onClick={addCard} variant="primary">
                                Create Card
                            </Button>
                        </div>
                    </Row>
                </Form>
                <Form>
                    <Row className="mb-3 buttonFormsRow">
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
                                value={props.forms.homePageCards.buttonNameForm}
                            />
                        </Form.Group>
                        <div className={'addCardButtons'}>
                            <Button variant="primary" onClick={addButton}>
                                Add Button
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