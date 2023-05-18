import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ButtonCS from "./ButtonCS";
import ButtonLoL from "./ButtonLoL";
import ButtonHotS from "./ButtonHotS";
import ButtonDota from "./ButtonDota";
import ButtonWarface from "./ButtonWarface";
import ButtonPUBG from "./ButtonPUBG";


const Cards = () => {
    return (
        <Container fluid>
            <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid img-tab'}/>
            <Row id={'cards-row'} className={'border border-4'}>
                <Row xs={1} md={2} className="g-3">
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'dota-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>Dota 2</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a Dota 2 boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonDota/>
                        </Card>
                    </Col>
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'cs-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>CS:GO</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a CS:GO boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonCS/>
                        </Card>
                    </Col>
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'hots-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>Heroes of the Storm</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a HotS boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonHotS/>
                        </Card>
                    </Col>
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'warface-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>Warface</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a Warface boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonWarface/>
                        </Card>
                    </Col>
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'lol-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>League of Legends</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a LoL boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonLoL/>
                        </Card>
                    </Col>
                    <Col className={'card-col'}>
                        <Card className={'card-position border'} id={'pubg-card'}>
                            <Card.Body className={'card-body'}>
                                <Card.Title>PUBG</Card.Title>
                                <Card.Text className={'card-text'}>
                                    We suggest you order a PUBG boost
                                </Card.Text>
                            </Card.Body>
                            <ButtonPUBG/>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Cards