import React from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid>
        <Row className={'footer border border-4'} xs={1} md={3}>
            <Col>
                <div className={'footer-titles'}>
                    <h1>Pages</h1>
                </div>
                <div className={'footer-pages'}>
                    <p><a href={'https://vk.com'}>Main page</a></p>
                    <p><a href={'#'}>Categories</a></p>
                    <p><a href={'#'}>Boosters</a></p>
                    <p><a href={'#'}>Help</a></p>
                    <p><a href={'#'}>Guides</a></p>
                    <p><a href={'#'}>Contacts</a></p>
                    <p><a href={'#'}>FAQ</a></p>
                </div>
            </Col>
            <Col>
                <div className={'footer-titles'}>
                    <h1>Services</h1>
                </div>
                <div className={'footer-pages'}>
                    <p><a href={'https://vk.com'}>Game currency</a></p>
                    <p><a href={'#'}>Boost</a></p>
                    <p><a href={'#'}>Achievements</a></p>
                    <p><a href={'#'}>Play with a pro</a></p>
                </div>
                <div className={'footer-titles'}>
                    <h1>Vacancies</h1>
                </div>
                <div className={'footer-pages'}>
                    <p><a href={'https://vk.com'}>Become a booster</a></p>
                </div>
            </Col>
            <Col>
                <div className={'footer-titles'}>
                    <h1>Info</h1>
                </div>
                <div className={'footer-pages'}>
                    <p>Our store is an official organization that guarantees its activities at the legislative level</p>
                    <p>INN: 000000000000 <br></br>
                        OGRN: 000000000000000 from 00.00.0000
                    </p>
                </div>
                <div className={'payment-icons'}>
                    <img src={'./payment-icons/mastercard.png'} alt={'mastercard'}/>
                    <img src={'./payment-icons/visa.png'} alt={'visa'}/>
                    <img src={'./payment-icons/qiwi.png'} alt={'qiwi'}/>
                    <img src={'./payment-icons/paypal.png'} alt={'paypal'}/>
                </div>
            </Col>
        </Row>
            <Row id={'all-rights'} bg={'dark'}>
                <p>All rights reserved - 2023 &copy;</p>
            </Row>
        </Container>
    )
}

export default Footer