import React from 'react';
import Container from "react-bootstrap/Container";


const OrderButton = () => {
    return (

        <button href={'#'} className={'order-button order-button-body'}>
            <span className={'button-line-top'}></span>
            <span className={'button-line-right'}></span>
            <span className={'button-line-bottom'}></span>
            <span className={'button-line-left'}></span>
            Order
        </button>

    )
}

export default OrderButton