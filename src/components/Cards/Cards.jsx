import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ButtonCS from "./Buttons/ButtonCS";
import ButtonLoL from "./Buttons/ButtonLoL";
import ButtonHotS from "./Buttons/ButtonHotS";
import ButtonDota from "./Buttons/ButtonDota";
import ButtonWarface from "./Buttons/ButtonWarface";
import ButtonPUBG from "./Buttons/ButtonPUBG";
import './Cards.css';

const Cards = () => {
    return (
        <Container fluid>
            <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row id={'cards-row'} className={'border border-4'}>
                {/*row-cols-* - set the cards width by setting amount of cards in row*/}
                <Row xs={1} md={2} className="g-3">
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'dotaCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>Dota 2</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a Dota 2 boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonDota />
                        </Card>
                    </Col>
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'csCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>CS:GO</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a CS:GO boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonCS />
                        </Card>
                    </Col>
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'hotsCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>Heroes of the Storm</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a HotS boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonHotS />
                        </Card>
                    </Col>
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'warfaceCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>Warface</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a Warface boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonWarface />
                        </Card>
                    </Col>
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'lolCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>League of Legends</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a LoL boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonLoL />
                        </Card>
                    </Col>
                    <Col className={'cardCol'}>
                        <Card className={'cardPosition border'} id={'pubgCard'}>
                            <Card.Body className={'cardBody'}>
                                <Card.Title>PUBG</Card.Title>
                                <Card.Text className={'cardText'}>
                                    We suggest you order a PUBG boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonPUBG />
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Cards