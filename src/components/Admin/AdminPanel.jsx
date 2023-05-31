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

    let newCardId = React.createRef();
    let newCardTitle = React.createRef();
    let newCardText = React.createRef();

    let addCard = () => {
        let newId = newCardId.current.value;
        let newTitle = newCardTitle.current.value;
        let newText = newCardText.current.value;
        {props.addCardFunc(0, newId, newTitle, newText)}
    }

    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} id={'addCardForm'}>
                        <Form.Label>Card ID</Form.Label>
                        <Form.Control ref={newCardId} type="" placeholder="Ented cardID"/>
                        <Form.Label>Card title</Form.Label>
                        <Form.Control ref={newCardTitle} type="" placeholder="Enter card title"/>
                        <Form.Label>Card text</Form.Label>
                        <Form.Control ref={newCardText} placeholder="Enter Card text"/>
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
                        <Form.Select>
                            <option>mainButton</option>
                            <option>button</option>
                        </Form.Select>
                        <Form.Label>Card</Form.Label>
                        <Form.Select>
                            {cardsList}
                        </Form.Select>

                        <Form.Label>Button Name</Form.Label>
                        <Form.Control/>

                        <Button variant="primary">
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