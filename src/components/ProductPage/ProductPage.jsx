import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import OfferPanelButton from "../GameOffer/OfferPanel/OfferPanelButton";
import {useParams} from "react-router-dom";
import BreadCrumb from "../GameOffer/BreadCrumb/BreadCrumb";
import './ProductPage.css'
import CheckBoxes from "./CheckBoxes/CheckBoxes";
import Button from "react-bootstrap/Button";

const ProductPage = () => {

    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[page.name]);
    const productPage = useSelector(state => state.productPage)

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(page.product);
    // This function turns low-priority' to 'lowPriority' (for correct adding as property inside state)
    const productCamelCase = require('change-case').camelCase(page.product)

    return (
        <Container fluid id={'productPageMainContainer'}>
            <Row className={'productPageRow'}>
                <Col md={3} id={'productPagePanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={[productPage.breadCrumbsData[page.name]]}
                            activeLinkName={productTitleCase}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} id={'productPageContentCol'}>
                    <Container fluid id={'pdPageContentContainer'}>
                        <Row>
                            <Col md={9}>
                                <div className={'pdPageContentTitle'}>
                                    <h1>{productPage.productData[page.name][productCamelCase].header}</h1>
                                </div>
                                <div className={'pdPageContentText'}>
                                    <p>{productPage.productData[page.name][productCamelCase].text}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div><h2>Customize your purchase</h2></div>
                                <div id={'productOptionsContainer'}>
                                    <div className={'checkboxesContainer'}>
                                        <CheckBoxes game={page.name} product={productCamelCase}/>
                                    </div>
                                    <div className={'customizeCartContainer'}>

                                    </div>
                                    <div className={'customizeDividerLine'}></div>
                                    <div className={'customizeButtonsContainer'}>
                                        <Button className={'customizeButtons'}>Buy now</Button>
                                        <Button className={'customizeButtons'}>Contact manager</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage