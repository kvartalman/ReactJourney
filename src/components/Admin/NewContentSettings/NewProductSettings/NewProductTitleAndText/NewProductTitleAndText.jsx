import React from 'react';
import './NewProductTitleAndText.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewProductTitleAndText = (props) => {

    const titleInput = (e) => {
        props.setTitle(e.target.value);
    };

    const textInput = (e) => {
        props.setText(e.target.value);
    };

    return (
        <Container fluid>
            <div id={'newProductMainContainer'}>
                <div id={'newProductFormsContainer'}>
                    <div id={'newProductFormsHeaderContainer'}>
                        <h1>Forms</h1>
                    </div>
                    <Form>
                        <Form.Label>Set new title</Form.Label>
                        <Form.Control
                            placeholder={'Enter title...'}
                            value={props.title}
                            onChange={titleInput}
                        />
                        <Form.Label>Set new text</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={10}
                            placeholder={'Enter text...'}
                            value={props.text}
                            onChange={textInput}
                        />
                    </Form>
                </div>
                <div id={'newProductTextTitlePreviewContainer'}>
                    <div id={'newProductPreviewHeaderContainer'}>
                    <h1>Preview</h1>
                    </div>
                    <h2 style={{overflowWrap: 'break-word'}}>{props.title}</h2>
                    <div className={'newProductDividerLine'}></div>
                    <p style={{overflowWrap: 'break-word'}}>{props.text}</p>
                </div>
            </div>
            <div>
                <Button
                    className={'nextPageButton'}
                    onClick={() => props.setKey('price')}
                >
                    Next
                </Button>
            </div>
        </Container>
    );
};

export default NewProductTitleAndText;