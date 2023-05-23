import React from 'react';
import {Col, Row} from "react-bootstrap";
import DotaContent from "./OfferContent/DotaContent";
import Container from "react-bootstrap/Container";
import OfferPanel from "./OfferPanel/OfferPanel";
import './GameOffer.css'

const GameOffer = (props) => {
    return (
        <Container fluid id={'gameOffer'}>
            <Row>
                <Col sm={3} className={'border border-start-0 border-4'} id={'offerPanelCol'}>
                    <OfferPanel />
                </Col>
                <Col sm={9}>
                    <DotaContent />
                </Col>
            </Row>
        </Container>
    )
}

export default GameOffer
