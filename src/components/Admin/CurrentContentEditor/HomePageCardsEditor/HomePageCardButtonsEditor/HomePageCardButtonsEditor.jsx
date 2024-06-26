import React, {useEffect, useState} from "react";
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

    // We can do renders in this component only if we already have filled array inside adminPanelSlice
    // We make get request from mocki.io to fill array inside slice. After it, we can this array here.
    // That's why we have here conditions like "if (props.card)..." or "if (props.cardsSelector.length > 0)..."

    const dispatch = useDispatch();

    const deletedButtonsSelector = useSelector(state => state.adminPanel.deletedHomePageOfferCardsButtons);

    const [activeButton, setActiveButton] = useState(0);
    const [enterButtonName, setEnterButtonName] = useState('');

    const handleButtonSelect = (button, index) => {
        props.setButton(button);
        props.setActiveButtonIndex(index);
    }

    const enterButtonNameInput = (e) => {
        setEnterButtonName(e.target.value);
    }

    const acceptButtonChanges = () => {
        dispatch(handleHomePageOfferCardsButtonChanges(
            {
                card: props.card,
                button: props.button,
                text: enterButtonName,
                activeCardIndex: props.activeCardIndex
            }
        ))
    }
    const deleteButtonHandler = () => {
        dispatch(deleteHomePageOfferCardButton(
            {
                card: props.card,
                button: props.button,
                activeCardIndex: props.activeCardIndex
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
                    key={index}
                    className={props.activeButtonIndex === index ? "homePageCardButtonsEditorActiveButton" : null}
                    onClick={() => handleButtonSelect(button, index)}
                >
                    {button.name}
                </Button>
            )))
        }
    }

    useEffect(
        () => {
            if (props.cardsSelector.length > 0) {
                props.setCard(props.cardsSelector[props.activeCardIndex]);
                props.setButton(props.cardsSelector[props.activeCardIndex].button[props.activeButtonIndex])
            }
        }
        , [props.cardsSelector]
    )

    return (
        <>
            <h2>Отредактируй кнопки</h2>
            <div id={'homePageCardButtonsEditorButtonsListContainer'}>
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
            <div id={'homePageCardsEditorCardButtonsEditorDeleteCancelContainer'}>
                {props.cardsSelector.length > 0 ?
                    <Button
                        className={'nextPageButton'}
                        onClick={() => deleteButtonHandler()}
                    >
                        Удалить
                    </Button>
                    :
                    null
                }
                {deletedButtonsSelector.length > 0 ?
                    <Button
                        className={'nextPageButton'}
                        onClick={() => cancelButtonDeletionHandler()}
                    >
                        Отменить
                    </Button>
                    :
                    null
                }
            </div>
            <div id={'homePageCardButtonsEditorButtonNameContainer'}>
                <h4>Измени имя кнопки</h4>
                <div>
                    <Form>
                        <Form.Control
                            value={enterButtonName}
                            onChange={enterButtonNameInput}
                            placeholder={'Введите имя кнопки...'}
                        />
                    </Form>
                </div>
                <Button
                    className={'nextPageButton'}
                    onClick={() => acceptButtonChanges()}
                >
                    Принять
                </Button>
            </div>
        </>
    );
};

export default HomePageCardButtonsEditor;