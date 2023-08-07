import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React from "react";
import GameOfferCard from "./OfferContent/GameOfferCard";
import './GameOffer.css'
import './OfferContent/OfferContent.css'
import OfferPanelButton from "./OfferPanel/OfferPanelButton";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Canvas from "./Canvases/Canvas";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const GameOffer = (props) => {

    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[page.name])
    const canvasMenuData = useSelector(state => state.gameOfferPages.canvasMenuData)

    let offerCardsArr = gameOffer.offerCardsData.map(card => (
        <GameOfferCard title={card.title} key={card.id} text={card.text}/>
    ))

    let panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    return (
        <Container fluid id={'gameOffer'}>

            <Row className={'gameOfferRow'}>
                <div className={'canvasButtonsBlock'}>
                    <Canvas
                        buttonName={gameOffer.canvasCtgData.buttonName}
                        placement={gameOffer.canvasCtgData.placement}
                        title={gameOffer.canvasCtgData.title}
                        canvasButtons={gameOffer.panelButton}
                    />
                    <Canvas
                        buttonName={canvasMenuData.buttonName}
                        placement={canvasMenuData.placement}
                        title={canvasMenuData.title}
                        canvasButtons={canvasMenuData.canvasButtons}
                    />
                </div>
                <Col md={3} className={'gameOfferPanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={gameOffer.breadCrumbs.linkNames}
                            activeLinkName={gameOffer.breadCrumbs.activeLinkName}
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
                                <h1>{gameOffer.mainTitle}</h1>
                            </Row>
                            <Row className={'offerTextRow'}>
                                <p>{gameOffer.text}
                                </p>
                            </Row>
                            <Row className={'offerCardContent'}>
                                <div className={'offerCardTitle'}>
                                    <h1>{gameOffer.cardsTitle}</h1>
                                </div>
                                <div className={'offerCardArea'}>
                                {offerCardsArr}
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GameOffer