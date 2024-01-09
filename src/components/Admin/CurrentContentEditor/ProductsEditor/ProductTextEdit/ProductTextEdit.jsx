import React, {useState} from "react";
import './ProductTextEdit.css'
import Form from "react-bootstrap/Form";
import '../../../../ProductPage/ProductPage.css';

const ProductTextEdit = (props) => {

    const [enterHeader, setEnterHeader] = useState('');
    const [enterText, setEnterText] = useState('');

    const enterTextInput = (e) => {
        setEnterText(e.target.value);
        props.setText(e.target.value)
    }

    const enterHeaderInput = (e) => {
        setEnterHeader(e.target.value);
        props.setTitle(e.target.value)
    }

    return (
        <div id={'productTextEditMainContainer'}>
            <div id={'productTextEditSettingsContainer'}>
                <h2 className={'productEditTitleAndTextHeaders'}>Измени заголовок и текст</h2>
                <div id={'productTextEditFormsContainer'}>
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
                </div>
            </div>
            <div id={'productTextEditPreviewMainContainer'}>
                <h2 className={'productEditTitleAndTextHeaders'}>Текущие заголовок и текст</h2>
                <div id={'productTextEditCurrentPreviewContainer'}>
                    <div>
                        <h3>{props.product.header}</h3>
                        <div className={'customizeDividerLine'}></div>
                        <p>{props.product.text}</p>
                    </div>
                </div>
                <h2 className={'productEditTitleAndTextHeaders'}>Новые заголовок и текст</h2>
                <div id={'productTextEditNewPreviewContainer'}>
                    <div>
                        <h3 style={{overflowWrap: 'break-word'}}>{enterHeader ? enterHeader : 'Enter header'}</h3>
                        <div className={'customizeDividerLine'}></div>
                        <p style={{overflowWrap: 'break-word'}}>{enterText ? enterText : 'Enter text...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTextEdit;