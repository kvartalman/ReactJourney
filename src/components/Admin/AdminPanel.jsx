import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cards from "../Homepage/Cards/Cards";
import React from "react";
import './AdminPanel.css'

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
        let crdTitle = cardTitle.current.value;
        let linkName = newLink.current.value;
        let btnType = newButtonType.current.value;
        let newName = newButtonName.current.value;
        {props.addButtonFunc(crdTitle, linkName, btnType, newName)}
    }

    let addCard = () => {
        let newId = newCardId.current.value;
        let newTitle = newCardTitle.current.value;
        let newText = newCardText.current.value;
        {props.addCardFunc(newId, newTitle, newText)}
    }

    let onChangeCardId = () => {
        let text = newCardId.current.value;
        {props.adminPanelFormsFunc(text, 'cardId')}
    }

    let onChangeCardTitle = () => {
        let text = newCardTitle.current.value;
        {props.adminPanelFormsFunc(text, 'cardTitle')}
    }

    let onChangeCardText = () => {
        let text = newCardText.current.value;
        {props.adminPanelFormsFunc(text, 'cardText')}
    }

    let onChangeButtonName = () => {
        let text = newButtonName.current.value;
        {props.adminPanelFormsFunc(text, 'buttonName')}
    }

    return (
        <>
            <Form>
                <Row className="mb-3">
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
                        <Button onClick={addCard} variant="primary" form={'addCardForm'}>
                            Create Card
                        </Button>
                    </div>
                </Row>

                <Row className="mb-3">
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

                        <Button variant="primary" onClick={addButton}>
                            Add Button
                        </Button>
                    </Form.Group>
                </Row>
            </Form>

            <Cards cardsImgTab={props.cardsImgTab}
                   cardsData={props.cardsData}/>
        </>
    );
}

export default AdminPanel