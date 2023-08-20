import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ProductCheckboxesEdit = (props) => {
    return (
        <Container fluid>
            <div>
                <Button onClick={() => props.setKey('slider')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductCheckboxesEdit;