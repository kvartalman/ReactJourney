import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import '../../../../GameOffer/OfferContent/OfferContent.css';
import './GamePageTextAndTitleEdit.css';
import Button from "react-bootstrap/Button";
const GamePageTextAndTitleEdit = (props) => {

    const [enterMainTitle, setEnterMainTitle] = useState('');
    const [enterText, setEnterText] = useState('');
    const [enterCardsTitle, setEnterCardsTitle] = useState('');

    const enterMainTitleInput = (e) => {
        setEnterMainTitle(e.target.value);
        props.setMainTitle(e.target.value);
    };

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
        props.setText(e.target.value);
    };

    const enterCardsTitleInput = (e) => {
        setEnterCardsTitle(e.target.value);
        props.setCardsTitle(e.target.value);
    };

    const nextPage = (key) => {
        props.setKey(key);
    };

    return (
        <Container fluid id={'gamePageNewTitleAndTextMainContainer'}>
            <Row>
                <h1>Current titles and text</h1>
                <h2>{props.gamePagesSelector[props.game].mainTitle}</h2>
                <p>{props.gamePagesSelector[props.game].text}</p>
                <h2>{props.gamePagesSelector[props.game].cardsTitle}</h2>
            </Row>
            <Row>
                <Col md={6}>
                    <h1>Input Forms</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Main title form</Form.Label>
                            <Form.Control
                                value={enterMainTitle}
                                onChange={enterMainTitleInput}
                                placeholder="Enter new main title..."
                            />
                            <Form.Label>Text form</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                value={enterText}
                                onChange={enterTextInput}
                                placeholder="Enter new text..."
                            />
                            <Form.Label>Cards title form</Form.Label>
                            <Form.Control
                                value={enterCardsTitle}
                                onChange={enterCardsTitleInput}
                                placeholder='Enter new cards title...'
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} id={'gamePageNewTitleAndTextPreview'}>
                    <h1>New titles and text</h1>
                    <h2 style={{ overflowWrap: 'break-word' }}>{enterMainTitle ? enterMainTitle : 'Enter new main title'}</h2>
                    <p style={{ overflowWrap: 'break-word' }}>{enterText ? enterText : 'Enter new text'}</p>
                    <h2 style={{ overflowWrap: 'break-word' }}>{enterCardsTitle ? enterCardsTitle : 'Enter new cards title'}</h2>
                </Col>
            </Row>
            <div>
                <Button className={'nextPageButton'} onClick={() => nextPage('cards')}>Next</Button>
            </div>
        </Container>
    );
}

export default GamePageTextAndTitleEdit;