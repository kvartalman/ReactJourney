import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";


const OrderButton = () => {
    return (
        <Container fluid id={'card-button'}>
            <Row className={'row-cols-auto'}>
                <button href={'#'} className={'card-main-button'} id={'order-button-body'}>
                    <span className={'main-button-line-top'}></span>
                    <span className={'main-button-line-right'}></span>
                    <span className={'main-button-line-bottom'}></span>
                    <span className={'main-button-line-left'}></span>
                    All services
                </button>
                <button href={'#'} className={'order-button'} id={'order-button-body'}>
                    <span className={'button-line-top'}></span>
                    <span className={'button-line-right'}></span>
                    <span className={'button-line-bottom'}></span>
                    <span className={'button-line-left'}></span>
                    MMR
                </button>
                <button href={'#'} className={'order-button'} id={'order-button-body'}>
                    <span className={'button-line-top'}></span>
                    <span className={'button-line-right'}></span>
                    <span className={'button-line-bottom'}></span>
                    <span className={'button-line-left'}></span>
                    Leveling
                </button>
                <button href={'#'} className={'order-button'} id={'order-button-body'}>
                    <span className={'button-line-top'}></span>
                    <span className={'button-line-right'}></span>
                    <span className={'button-line-bottom'}></span>
                    <span className={'button-line-left'}></span>
                    Lessons
                </button>

            </Row>
        </Container>
    )
}

export default OrderButton