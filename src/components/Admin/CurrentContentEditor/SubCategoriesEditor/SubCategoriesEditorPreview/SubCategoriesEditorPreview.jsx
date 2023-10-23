import React from "react";
import Container from "react-bootstrap/Container";
import ProductPage from "../../../../ProductPage/ProductPage";
import OfferPanelButton from "../../../../GameOffer/OfferPanel/OfferPanelButton";
import {Card, Col, Row} from "react-bootstrap";
import BreadCrumb from "../../../../GameOffer/BreadCrumb/BreadCrumb";
import SubCategory from "../../../../ProductPage/SubCategory/SubCategory";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const SubCategoriesEditorPreview = (props) => {

    const breadCrumbsSelector = useSelector(state => state.productPage.breadCrumbsData[props.game]);
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[props.game]);
    const subCategoriesCardsSelector = useSelector(state => state.adminPanel.subCategoriesCardsEditor);

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(props.subCategory);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const cardsList = subCategoriesCardsSelector.map(card => {
        return (
            <Card
                className={'subCategoryCard'}
                style={{background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${card.src})`}}
            >
                <NavLink to={card.link}>
                    <Card.Body className={'subCategoryCardBody'}>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                            {card.text}
                        </Card.Text>
                    </Card.Body>
                </NavLink>
            </Card>
        )
    })

    return (
        <Container fluid id={'productPageMainContainer'}>
            <Row className={'productPageRow'}>
                <Col md={3} id={'productPagePanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={[
                                breadCrumbsSelector
                            ]}
                            activeLinkName={productTitleCase}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} id={'productPageContentCol'}>
                    <Container fluid>
                        <Row id={'subCategoryMainRow'}>
                            {cardsList}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default SubCategoriesEditorPreview;