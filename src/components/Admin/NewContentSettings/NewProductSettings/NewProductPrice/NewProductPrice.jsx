import React, {useState} from "react";
import './NewProductPrice.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewProductPrice = (props) => {


    const priceInput = (e) => {
        props.setPrice(e.target.value)
    }

    return (
        <div id={'newProductPriceMainContainer'}>
            <div id={'newProductPriceFormsContainer'}>
                <h3>Задай базовую цену</h3>
                <Form>
                    <Form.Label>

                    </Form.Label>
                    <Form.Control
                        value={props.price}
                        onChange={priceInput}
                        placehold={'Введите цену...'}
                    />
                </Form>
            </div>
            <div id={'newProductPricePreviewContainer'}>
                <h3>Базовая цена</h3>
                <p>{props.price ? props.price : 'Не назначено!'}</p>
            </div>
        </div>
    );
};

export default NewProductPrice;