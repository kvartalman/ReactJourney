import React, {useState} from "react";
import './NewGameTextAndTitle.css';
import Form from "react-bootstrap/Form";

const NewGameTextAndTitle = (props) => {

    const [gameTitle, setGameTitle] = useState('');
    const [gameText, setGameText] = useState('');

    const gameTitleInput = (e) => {
        setGameTitle(e.target.value);
        props.setTitle(e.target.value);
    }

    const gameTextInput = (e) => {
        setGameText(e.target.value);
        props.setText(e.target.value);
    }

    return (
        <div id={'newGameTextAndTitleMainContainer'}>
            <div id={'newGameTextAndTitleSettingsContainer'}>
                <h2>Задай заголовок и текст</h2>
                <Form>
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        value={gameTitle}
                        onChange={gameTitleInput}
                        placeholder={'Введите заголовок...'}
                    />
                    <Form.Label>Текст</Form.Label>
                    <Form.Control
                        value={gameText}
                        onChange={gameTextInput}
                        placeholder={'Введите текст...'}
                    />
                </Form>
            </div>
            <div id={'newGameTextAndTitlePreviewMainContainer'}>
                <h2>Превью</h2>
                <div>
                    <h3>{gameTitle ? gameTitle : 'Заголовок'}</h3>
                    <p>{gameText ? gameText : 'Текст'}</p>
                </div>
            </div>
        </div>
    )
}

export default NewGameTextAndTitle;