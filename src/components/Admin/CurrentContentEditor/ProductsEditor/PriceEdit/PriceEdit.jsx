import React, {useState} from "react";
import './PriceEdit.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const PriceEdit = (props) => {

    const [enterPrice, setEnterPrice] = useState('');
    const [showError, setShowError] = useState('');
    const checkIfNumber = () => {

        if (enterPrice && !isNaN(enterPrice)) {
            props.setKey('checkboxes')
            setShowError('');
        } else if (enterPrice && isNaN(enterPrice)) {
            setShowError('Price must be a number')
        } else {
            setShowError('Enter price')
        }
    }

    const enterPriceInput = (e) => {
        setEnterPrice(e.target.value)
        props.setPrice(e.target.value)
    }

    return (
        <Container fluid>
            <div id={'priceEditPricesAndFormContainer'}>
                <div id={'priceEditFormContainer'}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter new price</Form.Label>
                            <Form.Control
                                value={enterPrice}
                                onChange={enterPriceInput}
                                placeholder="Enter min value"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div id={'priceEditPricesContainer'}>
                    <div id={'priceEditCurrentPriceContainer'}>
                        {props.gameSelector[props.game].products[props.product].price}
                    </div>
                    <div id={'priceEditNewPriceContainer'}>
                        {enterPrice ? enterPrice : 0}
                    </div>
                </div>
            </div>
            <div id={'editPriceNextButtonContainer'}>
                {showError ? <p id={'editPriceFormError'}>{showError}</p> : null}
                <Button className={'nextPageButton'} onClick={() => checkIfNumber()}>Next</Button>
            </div>
        </Container>
    );
}

export default PriceEdit;