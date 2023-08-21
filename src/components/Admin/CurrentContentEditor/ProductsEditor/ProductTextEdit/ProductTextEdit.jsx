import React from "react";
import './ProductTextEdit.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ProductTextEdit = (props) => {

    return (
        <Container fluid>
            <div>
                <Button className={'nextPageButton'} onClick={() => props.setKey('price')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductTextEdit;