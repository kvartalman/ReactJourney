import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import '../CardsButton.css'
import CardsButton from "./CardsButton";

const OrderButton = () => {
    return (
        <Container fluid id={'card-button'}>
            <Row className={'row-cols-auto'}>
                <CardsButton link={'#'} type={'mainButton'} class={'card-main-button'} name={'All services'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Skins'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'RMM'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'FACEIT'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Lessons'} />
            </Row>
        </Container>
    )
}

export default OrderButton