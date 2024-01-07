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
        <div>
            <div id={'newProductTitleAndTextMainContainer'}>
                <div id={'newProductFormsContainer'}>
                    <h3>Придумай название и описание</h3>
                    <Form>
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            placeholder={'Введите название...'}
                            value={props.title}
                            onChange={titleInput}
                        />
                        <Form.Label>Описание</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={10}
                            placeholder={'Введите текс...'}
                            value={props.text}
                            onChange={textInput}
                        />
                    </Form>
                </div>
                <div id={'newProductTextTitlePreviewContainer'}>
                    <h3>Превью</h3>
                    <div>
                        <h2 style={{overflowWrap: 'break-word'}}>{props.title}</h2>
                        <div className={'newProductDividerLine'}></div>
                        <p style={{overflowWrap: 'break-word'}}>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProductTitleAndText;