import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import OfferPanel from "./OfferPanel/OfferPanel";
import React from "react";
import GameOfferCard from "./OfferContent/GameOfferCard";
import './GameOffer.css'
import './OfferContent/OfferContent.css'

const GameOffer = (props) => {

    let offerCardsArr = props.gameOffer[props.num].offerCardsData.map(card => (
        <GameOfferCard title={card.title} text={card.text} />
    ))

    return (
        <Container fluid id={'gameOffer'}>
            <Row>
                <Col sm={3} className={'border border-start-0 border-4'} id={'offerPanelCol'}>
                    <OfferPanel />
                </Col>
                <Col sm={9}>
                    <Container fluid>
                        <Row className={'offerTitleRow'}>
                            <h1>{props.gameOffer[props.num].mainTitle}</h1>
                        </Row>
                        <Row className={'offerTextRow'}>
                            <p>{props.gameOffer[props.num].text}
                            </p>
                        </Row>
                        <Row className={'offerCardContent'}>
                            <div className={'offerCardTitle'}>
                                <h1>{props.gameOffer[props.num].cardsTitle}</h1>
                            </div>
                            {offerCardsArr}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default GameOffer