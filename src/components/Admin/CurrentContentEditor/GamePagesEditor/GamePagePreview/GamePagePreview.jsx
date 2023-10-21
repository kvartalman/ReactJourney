import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import GameOfferCard from "../../../../GameOffer/OfferContent/GameOfferCard";
import OfferPanelButton from "../../../../GameOffer/OfferPanel/OfferPanelButton";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Canvas from "../../../../GameOffer/Canvases/Canvas";
import BreadCrumb from "../../../../GameOffer/BreadCrumb/BreadCrumb";

const GamePagePreview = (props) => {

    const adminPanelGamePageCardsSelector = useSelector(state => state.adminPanel.gamePageCardsEditor)

    const canvasMenuData = useSelector(state => state.gameOfferPages.canvasMenuData)

    let offerCardsArr = adminPanelGamePageCardsSelector.map(card => (
        <GameOfferCard title={card.title} key={card.id} text={card.text}/>
    ))

    let panelButtonsArr = props.gamePagesSelector[props.game].panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    return (
        <Container fluid id={'gameOffer'}>

            <Row className={'gameOfferRow'}>
                <div className={'canvasButtonsBlock'}>
                    <Canvas
                        buttonName={props.gamePagesSelector[props.game].canvasCtgData.buttonName}
                        placement={props.gamePagesSelector[props.game].canvasCtgData.placement}
                        title={props.gamePagesSelector[props.game].canvasCtgData.title}
                        canvasButtons={props.gamePagesSelector[props.game].panelButton}
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
                            linkNames={props.gamePagesSelector[props.game].breadCrumbs.linkNames}
                            activeLinkName={props.gamePagesSelector[props.game].breadCrumbs.activeLinkName}
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
                                <h1>
                                    {
                                        props.mainTitle ?
                                            props.mainTitle
                                            :
                                            props.gamePagesSelector[props.game].mainTitle
                                    }
                                </h1>
                            </Row>
                            <Row className={'offerTextRow'}>
                                <p>
                                    {
                                        props.text ?
                                            props.text
                                            :
                                            props.gamePagesSelector[props.game].text
                                    }
                                </p>
                            </Row>
                            <Row className={'offerCardContent'}>
                                <div className={'offerCardTitle'}>
                                    <h1>
                                        {
                                            props.cardsTitle ?
                                                props.cardsTitle
                                                :
                                                props.gamePagesSelector[props.game].cardsTitle
                                        }
                                    </h1>
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
};

export default GamePagePreview;