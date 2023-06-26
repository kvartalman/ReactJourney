import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import OfferPanelButton from "../GameOffer/OfferPanel/OfferPanelButton";
import {useParams} from "react-router-dom";
import BreadCrumb from "../GameOffer/BreadCrumb/BreadCrumb";
import './ProductPage.css'
import CheckBoxes from "./CheckBoxes/CheckBoxes";
import Button from "react-bootstrap/Button";
import {useCart} from "react-use-cart";
import AddCartModal from "../Cart/AddCartModal/AddCartModal";

const ProductPage = () => {

    const {addItem} = useCart();
    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[page.name]);
    const productPage = useSelector(state => state.productPage)

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(page.product);
    // This function turns low-priority' to 'lowPriority' (for correct adding as property inside state)
    const productCamelCase = require('change-case').camelCase(page.product)

    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(productPage.productData[page.name][productCamelCase].price);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const addToCartHandler = () => {

        const product = productPage.productData[page.name][productCamelCase];

        const productToAdd = {
            id: product.id,
            title: product.header,
            price: product.price,
            quantity: 1,
            img: product.img
        };
        try {
            addItem(productToAdd);
            setShowModal(true);

        } catch (error) {
            console.log(error.name)
        }
    }

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
                                        <CheckBoxes
                                            game={page.name}
                                            product={productCamelCase}
                                            setPrice={setPrice}
                                            totalPrice={price}
                                        />
                                    </div>
                                    <div className={'customizeCartContainer'}>

                                    </div>
                                    <div className={'customizeDividerLine'}></div>
                                    <div className={'totalPrice'}><p>{price}&#8364;</p></div>
                                    <div className={'customizeDividerLine'}></div>
                                    <div className={'customizeButtonsContainer'}>
                                        <Button onClick={addToCartHandler} className={'customizeButtons'}>Buy
                                            now</Button>
                                        <Button className={'customizeButtons'}>Contact manager</Button>
                                        <AddCartModal show={showModal} setShowModal={setShowModal} />
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