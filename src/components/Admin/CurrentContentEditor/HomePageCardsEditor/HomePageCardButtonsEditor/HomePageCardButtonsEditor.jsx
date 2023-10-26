import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const HomePageCardButtonsEditor = (props) => {

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonSelect = (button, index) => {
        props.setButton(button);
        setActiveButton(index);
    }

    const buttonsList = props.card.button.map((button, index) => (
        <Button
            className={activeButton === index ? "activeButton" : "defaultButton"}
            onClick={() => handleButtonSelect(button ,index)}
        >
            {button.name}
        </Button>
    ))

    return (
        <Container fluid>
            {buttonsList}
        </Container>
    );
};

export default HomePageCardButtonsEditor;