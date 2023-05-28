import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React from "react";
import GameOfferCard from "./OfferContent/GameOfferCard";
import './GameOffer.css'
import './OfferContent/OfferContent.css'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import OfferPanelButton from "./OfferPanel/OfferPanelButton";
import './GameOffer.css'
import BreadCrumb from "./BreadCrumb/BreadCrumb";
const GameOffer = (props) => {

    let offerCardsArr = props.gameOffer[props.num].offerCardsData.map(card => (
        <GameOfferCard title={card.title} text={card.text}/>
    ))

    let panelButtonsArr = props.gameOffer[props.num].panelButton.map(button => (
        <OfferPanelButton link={button.link} name={button.name}/>
    ))

    return (
        <Container fluid id={'gameOffer'}>
            <Row className={'gameOfferRow'}>
                <Col md={3}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb />
                    </div>
                    <div className={'panelCol'}>
                            {panelButtonsArr}
                    </div>
                </Col>

                <Col md={9}>
                    <div className={'offerContent'}>
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
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GameOffer