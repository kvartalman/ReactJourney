import Row from 'react-bootstrap/Row';
import React, {useEffect, useState} from "react";
import './AdminPanel.css';
import HomePageCardsSettings from "./NewContentSettings/HomePageCardsSettings/HomePageCardsSettings";
import OfferPageCardsSettings from "./NewContentSettings/OfferPageCardsSettings/OfferPageCardsSettings";
import Container from "react-bootstrap/Container";
import {Accordion, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import AdminPanelDashboard from "./AdminPanelContent/AdminPanelDashboard/AdminPanelDashboard";
import ProductsEditor from "./CurrentContentEditor/ProductsEditor/ProductsEditor";
import GamePagesEditor from "./CurrentContentEditor/GamePagesEditor/GamePagesEditor";
import SubCategoriesEditor from "./CurrentContentEditor/SubCategoriesEditor/SubCategoriesEditor";
import HomePageCardsEditor from "./CurrentContentEditor/HomePageCardsEditor/HomePageCardsEditor";
import AdvantagesEditor from "./CurrentContentEditor/AdvantagesEditor/AdvantagesEditor";
import StepsEditor from "./CurrentContentEditor/StepsEditor/StepsEditor";
import CarouselEditor from "./CurrentContentEditor/CarouselEditor/CarouselEditor";
import NewProductSettings from "./NewContentSettings/NewProductSettings/NewProductSettings";
import AdminPanelMainMenu from "./AdminPanelMainMenu/AdminPanelMainMenu";
import AdminPanelNavBar from "./AdminPanelNavBar/AdminPanelNavBar";
import AdminPanelContent from "./AdminPanelContent/AdminPanelContent";

const AdminPanel = () => {

    const [contentName, setContentName] = useState(0);
    const [menuIndex, setMenuIndex] = useState(0);
    const [backIndex, setBackIndex] = useState(0);

    useEffect(() => {
        console.log(backIndex, menuIndex, 'main')
    }, [backIndex, menuIndex]);

    return (
        <div id={'adminPanelMainContainer'}>
            <AdminPanelNavBar
                setMenuIndex={setMenuIndex}
                setBackIndex={setBackIndex}
                menuIndex={menuIndex}
                backIndex={backIndex}
            />
            {menuIndex === 0 && backIndex === 0 ?
                <AdminPanelMainMenu
                    backIndex={backIndex}
                    menuIndex={menuIndex}
                    setMenuIndex={setMenuIndex}
                    setContentName={setContentName}
                    setBackIndex={setBackIndex}
                />
                :
                <AdminPanelContent
                    contentName={contentName}
                    backIndex={backIndex}
                    setBackIndex={setBackIndex}
                />
            }
        </div>
        // <Container fluid id={'adminPanelMainContainer'}>
        //
        //
        //     <Row id={'adminPanelMainRow'}>
        //         <Col md={2} id={'adminPanelMenuCol'}>
        //             <Container fluid id={'adminPanelMenuContainer'}>
        //                 <Row className={'adminPanelMenuLinks'}>
        //                     <ul>
        //                         <li>
        //                             <Accordion>
        //                                 <Accordion.Item eventKey="0">
        //                                     <Accordion.Header>
        //                                         <div className={'accordionHeaderContainer'}>
        //                                             Create new
        //                                         </div>
        //                                     </Accordion.Header>
        //                                     <Accordion.Body>
        //                                         { /* I use stopPropagation here because handler bubbling to li element
        //                                          and starts handleContentCol there. stopPropagation prevent this
        //                                          problem from occuring */}
        //                                         <p>Game</p>
        //                                         <p>Subcategory</p>
        //                                         <p
        //                                             onClick={(e) => {
        //                                                 e.stopPropagation();
        //                                                 handleContentCol(3)
        //                                             }}
        //                                         >Product</p>
        //                                         <p
        //                                             onClick={(e) => {
        //                                                 e.stopPropagation();
        //                                                 handleContentCol(4)
        //                                             }}
        //                                         >Homepage card
        //                                         </p>
        //                                         <p
        //                                             onClick={(e) => {
        //                                                 e.stopPropagation();
        //                                                 handleContentCol(5)
        //                                             }}
        //                                         >
        //                                             Offerpage card
        //                                         </p>
        //                                     </Accordion.Body>
        //                                 </Accordion.Item>
        //                             </Accordion>
        //                         </li>
        //                         <li>
        //                             <Accordion>
        //                                 <Accordion.Item eventKey="0">
        //                                     <Accordion.Header>
        //                                         <div className={'accordionHeaderContainer'}>
        //                                             Editor
        //                                         </div>
        //                                     </Accordion.Header>
        //                                     <Accordion.Body>
        //                                         { /* I use stopPropagation here because handler bubbling to li element.
        //                                         stopPropagation prevent this problem from occuring */}
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(6)
        //                                         }}>Game pages</p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(7)
        //                                         }}>Subcategories</p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(8)
        //                                         }
        //                                         }>
        //                                             Products
        //                                         </p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(9);
        //                                         }}>
        //                                             Homepage Cards
        //                                         </p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(10)
        //                                         }}>
        //                                             Carousel
        //                                         </p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(11)
        //                                         }}>
        //                                             Advantages
        //                                         </p>
        //                                         <p onClick={(e) => {
        //                                             e.stopPropagation();
        //                                             handleContentCol(12)
        //                                         }}>
        //                                             Steps
        //                                         </p>
        //                                     </Accordion.Body>
        //                                 </Accordion.Item>
        //                             </Accordion>
        //                         </li>
        //                         <li onClick={() => handleContentCol(0)}>AdminPanelDashboard</li>
        //                         <li></li>
        //                         <li></li>
        //                         <li><NavLink to={'/'} id={'backToShopLink'}>Back to shop</NavLink></li>
        //                     </ul>
        //                 </Row>
        //             </Container>
        //         </Col>
        //         <Col md={10} id={'adminPanelSetEditCol'}>
        //             <Container fluid>
        //                 <Row>
        //                     {[
        //                         <AdminPanelDashboard/>, 1, 2, <NewProductSettings/>, <HomePageCardsSettings/>,
        //                         <OfferPageCardsSettings/>,
        //                         <GamePagesEditor/>, <SubCategoriesEditor/>, <ProductsEditor/>, <HomePageCardsEditor/>,
        //                         <CarouselEditor/>, <AdvantagesEditor/>, <StepsEditor/>
        //                     ].map(
        //                         (elem, index) => (
        //                             contentCol === index ?
        //                                 elem
        //                                 :
        //                                 null
        //                         ))
        //                         // <ContentSliderSettings/>
        //                         // <ContentSliderEditor/>
        //                     }
        //                 </Row>
        //             </Container>
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default AdminPanel