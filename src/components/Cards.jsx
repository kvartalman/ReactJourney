import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Cards = () => {
    return (
        <Container fluid>
        <Row id={'cards-row'} className={'border border-4'}>
            <h1 id={'cards-header'}>Most valuable</h1>

        <Row xs={1} sm={2} md={3} className="g-4">

            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={'https://s1.1zoom.ru/big0' +
                        '/358/DOTA_2_Logo_Emblem_437317.jpg'} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>Dota 2</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a Dota 2 boost
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-success" className={'btn' +
                        ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={'https://cdn.ag.ru/media/games/736/' +
                        '73619bd336c894d6941d926bfd563946.jpg'} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>CS:GO</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a CS:GO boost
                        </Card.Text>
                    </Card.Body>
                        <Button variant="outline-success" className={'btn' +
                            ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={'https://games.mail.ru/pre_0x736_resize/hotbox/content_files/' +
                        'gallery/54/46/5d79d6c8.jpeg?quality=85'} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>Heroes of the Storm</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a HotS boost
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-success" className={'btn' +
                        ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={'https://cdn.kanobu.ru/articles/' +
                        'pics/tmp/images/2022/12/7/1c99201c-c298-4661-9ef4-c127de3b09be.webp'} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>Warface</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a Warface boost
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-success" className={'btn' +
                        ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={"https://3dnews.ru/assets/external/" +
                        "illustrations/2019/05/22/987938/sm.lol_2.750.jpg"} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>League of Legends</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a LoL boost
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-success" className={'btn' +
                        ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
            <Col className={'card-col'}>
                <Card className={'card-position border border-bottom-0'}>
                    <Card.Img variant="top" src={"https://1lag.com/wp-content/uploads/2022/10/" +
                        "pasted-image-0-122212%D1%81%D1%81%D0%B8-1-1024x576.png"} className={'card-img'}/>
                    <Card.Body className={'card-body'}>
                        <Card.Title>PUBG</Card.Title>
                        <Card.Text className={'card-text'}>
                            We suggest you order a PUBG boost
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-success" className={'btn' +
                        ' btn-outline-success card-button'}>Order</Button>
                </Card>
            </Col>
        </Row>
        </Row>
        </Container>
    )
}

export default Cards