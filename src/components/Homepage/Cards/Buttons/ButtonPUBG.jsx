import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import './CardsButton.css'
import CardsButton from "./CardsButton";

const OrderButton = () => {
    return (
        <Container fluid id={'card-button'}>
            <Row className={'row-cols-auto'}>
                <CardsButton link={'#'} type={'mainButton'} class={'card-main-button'} name={'All services'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Get BP'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Ranked'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Party'} />
            </Row>
        </Container>
    )
}

export default OrderButton