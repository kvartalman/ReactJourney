import Row from 'react-bootstrap/Row';
import React, {useState} from "react";
import './AdminPanel.css';
import HomePageCardsSettings from "./NewContentSettings/HomePageCardsSettings/HomePageCardsSettings";
import OfferPageCardsSettings from "./NewContentSettings/OfferPageCardsSettings/OfferPageCardsSettings";
import Container from "react-bootstrap/Container";
import {Accordion, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProductsEditor from "./CurrentContentEditor/ProductsEditor/ProductsEditor";
import GamePagesEditor from "./CurrentContentEditor/GamePagesEditor/GamePagesEditor";
import Categories from "../Categories/Categories";
import SubCategoriesEditor from "./CurrentContentEditor/SubCategoriesEditor/SubCategoriesEditor";
import HomePageCardsEditor from "./CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";

const AdminPanel = () => {

    const [contentCol, setContentCol] = useState(0);

    const handleContentCol = (type) => {
        setContentCol(type)
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
                                                <p onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleContentCol(5)
                                                }}>Game pages</p>
                                                <p onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleContentCol(6)
                                                }}>Subcategories</p>
                                                <p onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleContentCol(7)
                                                }
                                                }>
                                                    Products
                                                </p>
                                                <p onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleContentCol(8);
                                                }}>
                                                    Homepage Cards
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </li>
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
                                <Dashboard />, 1, 2, <HomePageCardsSettings/>, <OfferPageCardsSettings/>,
                                <GamePagesEditor />, <SubCategoriesEditor />, <ProductsEditor/>, <HomePageCardsEditor />
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