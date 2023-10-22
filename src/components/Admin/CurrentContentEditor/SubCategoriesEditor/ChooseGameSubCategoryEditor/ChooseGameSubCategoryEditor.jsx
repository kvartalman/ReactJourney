import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ChooseGameSubCategoryEditor = (props) => {

    const nextPageHandler = () => {
        props.setKey('cards')
    }

    return (
        <Container fluid>
            <Button
                className={'nextPageButton'}
                onClick={() => nextPageHandler()}
            >
                Next
            </Button>
        </Container>
    );
};

export default ChooseGameSubCategoryEditor;
