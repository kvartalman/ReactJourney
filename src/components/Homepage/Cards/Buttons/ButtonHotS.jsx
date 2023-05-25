import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import './CardsButton.css'
import CardsButton from "./CardsButton";

let buttonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'MMR'},
    {link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
    {link: '#', type: 'button', class: 'order-button', name: 'Lessons'},
]

let buttonArray = buttonData.map(b => (
    <CardsButton link={b.link} type={b.type} class={b.class} name={b.name} />
))

const OrderButton = () => {
    return (
        <Container fluid id={'card-button'}>
            <Row className={'row-cols-auto'}>
                {buttonArray}
            </Row>
        </Container>
    )
}

export default OrderButton