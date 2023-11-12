import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {addCard} from "../../../../../store/slices/homePageSlice";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";

const HomePageCardsSetNewCard = () => {

    const dispatch = useDispatch();

    const [tagId, setTagId] = useState('');
    const [title, setTitle] = useState('');
    const [cardText, setCardText] = useState('');

    const titleInput = (e) => {
        setTitle(e.target.value)
    };
    const cardTextInput = (e) => {
        setCardText(e.target.value)
    };

    const addHomePageCard = () => {
        dispatch(addCard({tagId, title, text: cardText}));
        setTagId('');
        setTitle('');
        setCardText('');
    }

    return (
        <Container fluid>
            <Form>
                <h2>HomePage Cards Editor</h2>
                <Form.Group as={Col} id={'addCardForm'}>
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
                    <Button
                        onClick={addHomePageCard}
                        variant="primary"
                        className={'nextPageButton'}
                    >
                        Create Card
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default HomePageCardsSetNewCard;