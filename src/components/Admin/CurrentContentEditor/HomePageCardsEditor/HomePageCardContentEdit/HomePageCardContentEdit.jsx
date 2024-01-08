import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {handleHomePageOfferCardsChanges} from "../../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";
import './HomePageCardContentEdit.css';

const HomePageCardContentEdit = (props) => {

    const dispatch = useDispatch();

    const [enterTitle, setEnterTitle] = useState('');
    const [enterText, setEnterText] = useState('');

    const enterTitleInput = (e) => {
        setEnterTitle(e.target.value);
    };

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
    };

    const acceptChanges = () => {
        dispatch(handleHomePageOfferCardsChanges(
            {
                card: props.card,
                title: enterTitle,
                text: enterText
            }
        ))
    }

    return (
        <div id={'homePageCardContentEditMainContainer'}>
            <Form>
                <Form.Group>
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        value={enterTitle}
                        onChange={enterTitleInput}
                        placeholder={'Введите заголовок...'}
                    />

                    <Form.Label>Текст</Form.Label>
                    <Form.Control
                        value={enterText}
                        onChange={enterTextInput}
                        placeholder={'Введите текст...'}
                    />
                </Form.Group>
            </Form>
            <Button
                className={'nextPageButton'}
                onClick={() => acceptChanges()}
            >Принять</Button>
        </div>
    );
};

export default HomePageCardContentEdit;