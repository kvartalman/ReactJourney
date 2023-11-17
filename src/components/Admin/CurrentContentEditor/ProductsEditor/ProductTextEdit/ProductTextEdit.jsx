import React, {useState} from "react";
import './ProductTextEdit.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import '../../../../ProductPage/ProductPage.css';
import {Col, Row} from "react-bootstrap";

const ProductTextEdit = (props) => {

    const [enterHeader, setEnterHeader] = useState('');
    const [enterText, setEnterText] = useState('');
    const [showError, setShowError] = useState('');

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
        props.setText(e.target.value)
    }

    const enterHeaderInput = (e) => {
        setEnterHeader(e.target.value);
        props.setTitle(e.target.value)
    }

    const checkIfFormsFilled = () => {
        if (enterHeader && enterText) {
            props.setKey('price')
            setShowError('');
        } else {
            setShowError('Forms must be filled')
        }
    }

    return (
        <Container fluid>
            <div id={'textAndFormsEditContainer'}>
                <div id={'currentTextAndTitleContainer'}>
                    <h2 className={'productEditTitleAndTextHeaders'}>Current header and text</h2>
                    <h2>{props.gameSelector[props.game].products[props.product].header}</h2>
                    <div className={'customizeDividerLine'}></div>
                    <p>{props.gameSelector[props.game].products[props.product].text}</p>
                </div>
                <Row id={'newTextFormsAndPreviewContainer'}>
                    <Col id={'newTextAndTitleFormsContainer'}>
                        <h2 className={'productEditTitleAndTextHeaders'}>Input forms</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Header form</Form.Label>
                                <Form.Control
                                    value={enterHeader}
                                    onChange={enterHeaderInput}
                                    placeholder="Enter new header"
                                />
                                <Form.Label>Text form</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={8}
                                    value={enterText}
                                    onChange={enterTextInput}
                                    placeholder="Enter new text"
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6} id={'newTextAndTitleContainer'}>
                        <h2 className={'productEditTitleAndTextHeaders'}>New header and text</h2>
                        <div id={'newTextAndTitlePreviewContainer'}>
                            <h2 style={{overflowWrap: 'break-word'}}>{enterHeader ? enterHeader : 'Enter header'}</h2>
                            <div className={'customizeDividerLine'}></div>
                            <p style={{overflowWrap: 'break-word'}}>{enterText ? enterText : 'Enter text...'}</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div id={'productEditTextAndTitleNextButtonContainer'}>
                {showError ? <p id={'productTextEditError'}>{showError}</p> : null}
                <Button className={'nextPageButton'} onClick={() => checkIfFormsFilled()}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductTextEdit;