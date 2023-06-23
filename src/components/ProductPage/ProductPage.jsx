import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import OfferPanelButton from "../GameOffer/OfferPanel/OfferPanelButton";
import {useParams} from "react-router-dom";
import BreadCrumb from "../GameOffer/BreadCrumb/BreadCrumb";
import './ProductPage.css'

const ProductPage = () => {

    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[page.name]);
    const productPage = useSelector(state => state.productPage.breadCrumbsData)

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(page.product);

    return (
        <Container fluid id={'productPageMainContainer'}>
            <Row className={'productPageRow'}>
                <Col md={3} id={'productPagePanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={[productPage[page.name]]}
                            activeLinkName={productTitleCase}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} id={'productPageContentCol'}>
                    <Container fluid>
                    <div>
                        <h1>Product name</h1>
                    </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage