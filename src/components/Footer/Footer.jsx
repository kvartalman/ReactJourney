import React from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Footer.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Footer = () => {

    const pages = useSelector(state => state.footer.pagesLinks)
    const services = useSelector(state => state.footer.servicesLinks)
    const vacancies = useSelector(state => state.footer.vacanciesLinks)
    const payment = useSelector(state => state.footer.paymentIcons)

    const paymentIcons = payment.map(link => (
        <img src={link[0]} alt={link[1]}/>
    ))

    const vacanciesLinks = vacancies.map(link => (
        <p><NavLink to={link[0]}>{link[1]}</NavLink></p>
    ))

    const servicesLinks = services.map(link => (
        <p><NavLink to={link[0]}>{link[1]}</NavLink></p>
    ))

    const pagesLinks = pages.map(link => (
        <p><NavLink to={link[0]}>{link[1]}</NavLink></p>
    ))

    return (
        <Container fluid>
            <Row className={'footer border border-4'} xs={1} md={3}>
                <Col>
                    <div className={'footer-titles'}>
                        <h1>Pages</h1>
                    </div>
                    <div className={'footer-pages'}>
                        {pagesLinks}
                    </div>
                </Col>
                <Col>
                    <div className={'footer-titles'}>
                        <h1>Services</h1>
                    </div>
                    <div className={'footer-pages'}>
                        {servicesLinks}
                    </div>
                    <div className={'footer-titles'}>
                        <h1>Vacancies</h1>
                    </div>
                    <div className={'footer-pages'}>
                        {vacanciesLinks}
                    </div>
                </Col>
                <Col>
                    <div className={'footer-titles'}>
                        <h1>Info</h1>
                    </div>
                    <div className={'footer-pages'}>
                        <p>Our store is an official organization that guarantees its activities at the legislative
                            level</p>
                        <p>INN: 000000000000 <br></br>
                            OGRN: 000000000000000 from 00.00.0000
                        </p>
                    </div>
                    <div className={'payment-icons'}>
                        {paymentIcons}
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