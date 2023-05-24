import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import OfferCard from "./OfferContent/OfferCard";
import OfferPanel from "./OfferPanel/OfferPanel";
import './GameOffer.css';
import './OfferContent/OfferContent.css';

const DotaOffer = () => {
    return (
        <Container fluid id={'gameOffer'}>
            <Row>
                <Col sm={3} className={'border border-start-0 border-4'} id={'offerPanelCol'}>
                    <OfferPanel />
                </Col>
                <Col sm={9}>
                    <Container fluid>
                        <Row className={'offerTitleRow'}>
                            <h1>Dota Offer</h1>
                        </Row>
                        <Row className={'offerTextRow'}>
                            <p>I wrote this text just for test. This text means nothing and i will add this text to
                                most of text-blocks on website. However, i should pay attention to the size of text.
                                I think, size of text should not be too high or too little. Better to find something
                                people
                                call "golden mean". Anyway, we will see, how it goes.
                            </p>
                        </Row>
                        <Row className={'offerCardContent'}>
                            <div className={'offerCardTitle'}>
                                <h1>Offers of the week</h1>
                            </div>
                            <OfferCard title={'3000 MMR Boost'} text={'35$'}/>
                            <OfferCard title={'Low priority'} text={'5$'}/>
                            <OfferCard title={'Bladeform legacy'} text={'25$'}/>
                            <OfferCard title={'+200 MMR'} text={'10$'}/>

                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default DotaOffer