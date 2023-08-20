import React from "react";
import './ProductTextEdit.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ProductTextEdit = (props) => {

    return (
        <Container fluid>
            <div>
                <Button onClick={() => props.setKey('checkboxes')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductTextEdit;