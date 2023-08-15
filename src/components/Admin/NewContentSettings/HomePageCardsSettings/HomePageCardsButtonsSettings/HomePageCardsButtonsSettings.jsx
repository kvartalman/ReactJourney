import React, {useRef, useState} from "react";
import '../../../AdminPanel.css';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addButton} from "../../../../../store/slices/homePageSlice";
import {useDispatch, useSelector} from "react-redux";

const HomePageCardsButtonsSettings = () => {

    const cardsData = useSelector(state => state.homePage.cardsData);
    const linksList = useSelector(state => state.adminPanel.linksList);
    const dispatch = useDispatch();

    const [btnName, setBtnName] = useState('');

    let newButtonType = useRef(null);
    let cardKey = useRef(null);
    let newLink = useRef(null);

    const btnNameInput = (e) => {
        setBtnName(e.target.value)
    };

    const addHomePageCardButton = () => {
        dispatch(addButton({
            cardKey: cardKey.current.value,
            link: newLink.current.value,
            btnType: newButtonType.current.value,
            btnName
        }))
        setBtnName('');
    }

    const cardsList = Object.keys(cardsData).map(card => (
        <option>{card}</option>
    ))

    const links = linksList.map(card => (
        <option>{card}</option>
    ))

    return (
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
    );
}

export default HomePageCardsButtonsSettings;