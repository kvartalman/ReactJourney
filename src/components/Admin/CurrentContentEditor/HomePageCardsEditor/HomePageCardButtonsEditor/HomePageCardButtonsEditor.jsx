import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import './HomePageCardButtonsEditor.css';
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {
    handleHomePageOfferCardsButtonChanges
} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";

const HomePageCardButtonsEditor = (props) => {

    const dispatch = useDispatch();

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
            {buttonsList()}
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
            <Form>
                <Form.Group>
                    <Form.Control
                        value={enterButtonName}
                        onChange={enterButtonNameInput}
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