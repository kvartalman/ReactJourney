import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React from "react";
import GameOfferCard from "./OfferContent/GameOfferCard";
import './GameOffer.css'
import './OfferContent/OfferContent.css'
import OfferPanelButton from "./OfferPanel/OfferPanelButton";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Canvas from "./Canvases/Canvas";

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
                <div className={'canvasButtonsBlock'}>
                    <Canvas
                        buttonName={props.canvasCtgData[props.num].buttonName}
                        placement={props.canvasCtgData[props.num].placement}
                        title={props.canvasCtgData[props.num].title}
                        canvasButtons={props.canvasCtgData[props.num].canvasButtons}
                    />
                    <Canvas
                        buttonName={props.canvasMenuData.buttonName}
                        placement={props.canvasMenuData.placement}
                        title={props.canvasMenuData.title}
                        canvasButtons={props.canvasMenuData.canvasButtons}
                    />
                </div>
                <Col md={3} className={'gameOfferPanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={props.breadCrumbs[props.num].linkNames}
                            activeLinkName={props.breadCrumbs[props.num].activeLinkName}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} className={'gameOfferContentCol'}>
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
                                <Row className={'offerCardArea'}>
                                {offerCardsArr}
                                </Row>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GameOffer