import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import './HomePageCardButtonsEditor.css';
import Form from "react-bootstrap/Form";
import {useDispatch, useSelector} from "react-redux";
import {
    cancelHomePageOfferCardButtonDeletion,
    deleteHomePageOfferCardButton,
    handleHomePageOfferCardsButtonChanges
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";

const HomePageCardButtonsEditor = (props) => {

    const dispatch = useDispatch();

    const deletedButtonsSelector = useSelector(state => state.adminPanel.deletedHomePageOfferCardsButtons);

    const [activeButton, setActiveButton] = useState(0);
    const [enterButtonName, setEnterButtonName] = useState('');

    const handleButtonSelect = (button, index) => {
        props.setButton(button);
        setActiveButton(index);
    }

    const enterButtonNameInput = (e) => {
        setEnterButtonName(e.target.value);
    }

    const acceptButtonChanges = () => {
        dispatch(handleHomePageOfferCardsButtonChanges(
            {
                card: props.card,
                button: props.button,
                text: enterButtonName
            }
        ))
    }
    const deleteButtonHandler = () => {
        dispatch(deleteHomePageOfferCardButton(
            {
                card: props.card,
                button: props.button
            }
        ))
    }

    const cancelButtonDeletionHandler = () => {
        dispatch(cancelHomePageOfferCardButtonDeletion());
    }

    const buttonsList = () => {
        if (props.card) {
            return (props.card.button.map((button, index) => (
                <Button
                    className={activeButton === index ? "activeButton" : "defaultButton"}
                    onClick={() => handleButtonSelect(button, index)}
                >
                    {button.name}
                </Button>
            )))
        }
    }

    return (
        <Container fluid>
            <div>
                {buttonsList()}
            </div>
            <div id={'homePageCardsEditorCardButtonPreviewContainer'}>
                {props.button ?
                    <CardsButton
                        key={props.button.id}
                        link={props.button.link}
                        type={props.button.type}
                        class={props.button.class}
                        name={props.button.name}
                    />
                    :
                    null
                }
            </div>
            {props.cardsSelector.length > 0 ?
            <Button
                className={'nextPageButton'}
                onClick={() => deleteButtonHandler()}
            >
                Delete button
            </Button>
                :
                null
            }
            {deletedButtonsSelector.length > 0 ?
                <Button
                    className={'nextPageButton'}
                    onClick={() => cancelButtonDeletionHandler()}
                >
                    Cancel
                </Button>
                :
                null
            }
            <Form>
                <Form.Group>
                    <Form.Label><h4>Edit button name</h4></Form.Label>
                    <Form.Control
                        value={enterButtonName}
                        onChange={enterButtonNameInput}
                        placeholder={'Enter button name...'}
                    />
                </Form.Group>
            </Form>
            <Button
                className={'nextPageButton'}
                onClick={() => acceptButtonChanges()}
            >
                Accept
            </Button>
        </Container>
    );
};

export default HomePageCardButtonsEditor;