import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CardsButton from "../../../../Homepage/Cards/Buttons/CardsButton";
import './HomePageCardButtonsEditor.css';

const HomePageCardButtonsEditor = (props) => {

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonSelect = (button, index) => {
        props.setButton(button);
        setActiveButton(index);
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
        </Container>
    );
};

export default HomePageCardButtonsEditor;