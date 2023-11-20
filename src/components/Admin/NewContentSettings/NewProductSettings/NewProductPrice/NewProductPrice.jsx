import React, {useState} from "react";
import './NewProductPrice.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewProductPrice = (props) => {


    const priceInput = (e) => {
            props.setPrice(e.target.value)
    }

    return (
        <Container fluid>
            <div id={'newProductPriceMainContainer'}>
                <div id={'newProductPriceFormsContainer'}>
                    <h1>Set new price</h1>
                    <Form>
                        <Form.Label>

                        </Form.Label>
                        <Form.Control
                        value={props.price}
                        onChange={priceInput}
                        placehold={'Enter price...'}
                        />
                    </Form>
                </div>
                <div id={'newProductPricePreviewContainer'}>
                    <h1>{props.price}</h1>
                </div>
            </div>
            <Button
                className={'nextPageButton'}
                onClick={() => props.setKey('slider')}
            >
                Next
            </Button>
        </Container>
    );
};

export default NewProductPrice;