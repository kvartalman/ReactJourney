import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {handleHomePageOfferCardsChanges} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";

const HomePageCardContentEdit = (props) => {

    const dispatch = useDispatch();

    const [enterTitle, setEnterTitle] = useState('');
    const [enterText, setEnterText] = useState('');

    const enterTitleInput = (e) => {
        setEnterTitle(e.target.value);
    };

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
    };

    const acceptChanges = () => {
        dispatch(handleHomePageOfferCardsChanges(
            {
                card: props.card,
                title: enterTitle,
                text: enterText
            }
        ))
    }

    useEffect(
        () => {
           props.setCard(props.cardsSelector[props.activeCardIndex]);
           props.setButton(props.cardsSelector[props.activeCardIndex].button[props.activeButtonIndex])
        }, [props.cardsSelector]
    )

    return (
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Edit title</Form.Label>
                    <Form.Control
                        value={enterTitle}
                        onChange={enterTitleInput}
                        placeholder={'Enter title...'}
                    />

                    <Form.Label>Edit text</Form.Label>
                    <Form.Control
                        value={enterText}
                        onChange={enterTextInput}
                        placeholder={'Enter text...'}
                    />
                </Form.Group>
            </Form>
            <Button
                className={'nextPageButton'}
                onClick={() => acceptChanges()}
            >Accept</Button>
        </Container>
    );
};

export default HomePageCardContentEdit;