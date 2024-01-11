import React, {useState} from "react";
import './PriceEdit.css'
import Button from "react-bootstrap/Button";
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
        <div id={'priceEditMainContainer'}>
            <h1>Измени базовую цену товара</h1>
            <div>
                <div id={'priceEditFormContainer'}>
                    <div>
                        <Form>
                            <Form.Group>
                                <Form.Label>Укажи новую цену</Form.Label>
                                <Form.Control
                                    value={enterPrice}
                                    onChange={enterPriceInput}
                                    placeholder="Введите цену..."
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div id={'priceEditPreviewMainContainer'}>
                    <div id={'priceEditCurrentPricePreviewContainer'}>
                        <h3>Старая цена</h3>
                        <p>{props.product.price}</p>
                    </div>
                    <div id={'priceEditNewPricePreviewContainer'}>
                        <h3>Новая цена</h3>
                        <p>{enterPrice ? enterPrice : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceEdit;