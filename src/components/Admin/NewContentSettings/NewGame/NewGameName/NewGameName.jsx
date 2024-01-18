import React, {useState} from "react";
import './NewGameName.css';
import Form from "react-bootstrap/Form";

const NewGameName = (props) => {

    const [newName, setNewName] = useState('');

    const newNameInput = (e) => {
        setNewName(e.target.value);
        props.setName(e.target.value);
    }

    return (
        <div id={'newGameNameMainContainer'}>
            <div id={'newGameNameSettingsContainer'}>
                <h2>Укажи название игры</h2>
                <Form>
                    <Form.Label>Название игры</Form.Label>
                    <Form.Control
                        value={newName}
                        onChange={newNameInput}
                        placeholder={'Введите название игры...'}
                    />
                </Form>
            </div>
            <div id={'newGameNamePreviewContainer'}>
                <h2>Игра будет называться:</h2>
                <div>
                    <h3>{newName ? newName : 'Не назначено'}</h3>
                </div>
            </div>
        </div>
    )
}

export default NewGameName;