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

    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Card ID</Form.Label>
                        <Form.Control type="" placeholder="Ented cardID"/>
                        <Form.Label>Card title</Form.Label>
                        <Form.Control type="" placeholder="Enter card title"/>
                        <Form.Label>Card text</Form.Label>
                        <Form.Control placeholder="Enter Card text"/>
                        <div className={'addCardButtons'}>
                            <Button onClick={props.addCard} variant="primary">
                                Create Card
                            </Button>
                        </div>
                    </Form.Group>
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