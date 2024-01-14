import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import '../../../../GameOffer/OfferContent/OfferContent.css';
import './GamePageTextAndTitleEdit.css';
import Button from "react-bootstrap/Button";

const GamePageTextAndTitleEdit = (props) => {

    const [enterMainTitle, setEnterMainTitle] = useState('');
    const [enterText, setEnterText] = useState('');


    const enterMainTitleInput = (e) => {
        setEnterMainTitle(e.target.value);
        props.setMainTitle(e.target.value);
    };

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
        props.setText(e.target.value);
    };



    const nextPage = (key) => {
        props.setKey(key);
    };

    return (
        <div id={'gamePageEditorTextMainContainer'}>
            <div id={'gamePageEditorTextSettingsContainer'}>
                <div>
                    <h2>Измени заголовок и текст</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Заголовок</Form.Label>
                            <Form.Control
                                value={enterMainTitle}
                                onChange={enterMainTitleInput}
                                placeholder="Введите заголовок для игры..."
                            />
                            <Form.Label>Текст</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={16}
                                value={enterText}
                                onChange={enterTextInput}
                                placeholder="Введите новый текст..."
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div id={'gamePageEditorTextPreviewMainContainer'}>
                <h2>Текущие заголовок и текст</h2>
                <div id={'gamePageEditorTextCurrentPreviewContainer'}>
                    <div>
                        <h3>{props.gamePagesSelector.mainTitle}</h3>
                        <p>{props.gamePagesSelector.text}</p>
                    </div>
                </div>
                <h2>Новые заголовок и текст</h2>
                <div id={'gamePageEditorTextNewPreviewContainer'}>
                    <div>
                        <h3 style={{overflowWrap: 'break-word'}}>{enterMainTitle ? enterMainTitle : 'Заголовок'}</h3>
                        <p style={{overflowWrap: 'break-word'}}>{enterText ? enterText : 'Текст'}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GamePageTextAndTitleEdit;