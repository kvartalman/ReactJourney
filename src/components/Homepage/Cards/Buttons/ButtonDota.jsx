import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import './CardsButton.css'
import CardsButton from "./CardsButton";

const OrderButton = (props) => {
    return (
        <Container fluid id={'card-button'}>
            <Row className={'row-cols-auto'}>
                <CardsButton link={'#'} type={'mainButton'} class={'card-main-button'} name={'All services'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'Skins'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'MMR'} />
                <CardsButton link={'#'} type={'button'} class={'order-button'} name={'LOW PRIORITY'} />
            </Row>
        </Container>
    )
}

export default OrderButton