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

    const getOfferPages = props.gameOfferPages.map(name => (
        <option>{name}</option>
    ))

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

    const onChangeCardId = () => {
        props.onChangeCardId(newCardId.current.value)
    }
    const onChangeCardTitle = () => {
        props.onChangeCardTitle(newCardTitle.current.value)
    }
    const onChangeCardText = () => {
        props.onChangeCardText(newCardText.current.value)
    }
    const addHomePageCard = () => {
        props.addHomePageCard();
    }
    const onChangeButtonName = () => {
        props.onChangeButtonName(newButtonName.current.value)
    }
    const addHomePageCardButton = () => {
        props.addHomePageCardButton(cardTitle.current.value, newLink.current.value, newButtonType.current.value)}
    const onChangeOfferCardTitle = () => {
        props.onChangeOfferCardTitle(newOfferPageCardTitle.current.value)
    }
    const onChangeOfferCardText = () => {
        props.onChangeOfferCardText(newOfferPageCardText.current.value)
    }
    const addOfferPageCard = () => {
        props.addOfferPageCard(gameOfferSelector.current.value)
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