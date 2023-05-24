import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Advantages.css';

const Advantages = () => {
    return (
        <Container fluid>
            <img src={'./backgrounds/whychooseus.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={2} lg={3} className="g-4" id={'advantage-row'}>
                <Col>
                    <Card className={'advantage-cards'}>
                        <Card.Img variant="top" className={'advantage-img'} src={'https://' +
                            'p16-va-tiktok.ibyteimg.com/img/' +
                            'musically-maliva-obj/5a0bf3135d88232251753017dd55093e~c5_720x720.jpeg'}/>
                        <Card.Body className={'advantage-card-body'}>
                            <Card.Title className={'advantage-card-title'}>PROFESSIONAL BOOSTERS</Card.Title>
                            <Card.Text className={'advantage-card-text'}>
                                Our team consists of true professionals in their field.
                                We are very attentive to the issue of cooperation with boosters.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className={'advantage-cards'}>
                        <Card.Img variant="top" className={'advantage-img'} src={'https://pic.onlinewebfonts.com/' +
                            'svg/img_85420.svg'}/>
                        <Card.Body>
                            <Card.Title className={'advantage-card-title'}>POLITE SUPPORT SERVICE</Card.Title>
                            <Card.Text className={'advantage-card-text'}>
                                We deeply respect our customers and therefore provide
                                polite and positive feedback in the shortest possible time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className={'advantage-cards'}>
                        <Card.Img variant="top" className={'advantage-img'} src={'https://pic.onlinewebfonts.com/' +
                            'svg/img_440470.svg'}/>
                        <Card.Body>
                            <Card.Title className={'advantage-card-title'}>FAVORABLE PRICES</Card.Title>
                            <Card.Text className={'advantage-card-text'}>
                                Our goal is to provide the highest quality service
                                at the lowest possible price. We don't overcharge.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Advantages