import Row from 'react-bootstrap/Row';
import React, {useEffect, useState} from "react";
import './AdminPanel.css';
import Cards from "../Homepage/Cards/Cards";
import ContentSliderSettings
    from "./NewContentSettings/ProductPageSettings/NewProductSettings/ContentSliderSettings/ContentSliderSettings";
import ContentSliderEditor
    from "./CurrentContentEditor/ProductsEditor/ProductSliderEdit/ContentSliderEditor/ContentSliderEditor";
import HomePageCardsSettings from "./NewContentSettings/HomePageCardsSettings/HomePageCardsSettings";
import HomePageCardsButtonsSettings
    from "./NewContentSettings/HomePageCardsSettings/HomePageCardsButtonsSettings/HomePageCardsButtonsSettings";
import OfferPageCardsSettings from "./NewContentSettings/OfferPageCardsSettings/OfferPageCardsSettings";
import Container from "react-bootstrap/Container";
import {Accordion, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProductsEditor from "./CurrentContentEditor/ProductsEditor/ProductsEditor";

const AdminPanel = () => {

    const [contentCol, setContentCol] = useState(0);

    const handleContentCol = (type) => {
        setContentCol(type)
        console.log(type, contentCol)
    }


    return (
        <Container fluid id={'adminPanelMainContainer'}>

            <Row id={'adminPanelMainRow'}>
                <Col md={2} id={'adminPanelMenuCol'}>
                    <Container fluid id={'adminPanelMenuContainer'}>
                        <Row className={'adminPanelMenuLinks'}>
                            <ul>
                                <li>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className={'accordionHeaderContainer'}>
                                                    Create new
                                                    <div className={'accordionArrowContainer'}></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                { /* I use stopPropagation here because handler bubbling to li element
                                                 and starts handleContentCol there. stopPropagation prevent this
                                                 problem from occuring */}
                                                <p>Game</p>
                                                <p>Subcategory</p>
                                                <p>Product</p>
                                                <p
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleContentCol(3)
                                                    }}
                                                >Homepage card
                                                </p>
                                                <p
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleContentCol(4)
                                                    }}
                                                >
                                                    Offerpage card
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </li>
                                <li>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className={'accordionHeaderContainer'}>
                                                    Editor
                                                    <div className={'accordionArrowContainer'}></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                { /* I use stopPropagation here because handler bubbling to li element
                                                 and starts handleContentCol there. stopPropagation prevent this
                                                 problem from occuring */}
                                                <p>Game pages</p>
                                                <p>Subcategories</p>
                                                <p onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleContentCol(7)
                                                }
                                                }>
                                                    Products
                                                </p>
                                                <p
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleContentCol(8)
                                                    }}>
                                                    Homepage card
                                                </p>
                                                <p
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleContentCol(9)
                                                    }}
                                                >
                                                    Offerpage card
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </li>
                                <li>Add new game</li>
                                <li onClick={() => handleContentCol(0)}>Dashboard</li>
                                <li></li>
                                <li></li>
                                <li><NavLink to={'/'} id={'backToShopLink'}>Back to shop</NavLink></li>
                            </ul>
                        </Row>
                    </Container>
                </Col>
                <Col md={10} id={'adminPanelSetEditCol'}>
                    <Container fluid>
                        <Row>
                            {[
                                <Dashboard/>, 1, 2, <HomePageCardsSettings/>, <OfferPageCardsSettings/>,
                                5, 6, <ProductsEditor/>, 8, 9
                            ].map(
                                (elem, index) => (
                                    contentCol === index ?
                                        elem
                                        :
                                        null
                                ))
                                // <ContentSliderSettings/>
                                // <ContentSliderEditor/>
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminPanel