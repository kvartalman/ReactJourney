import React, {useEffect, useState} from 'react';
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
import {v4 as uuidv4} from 'uuid';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import ContentSlider from "./ContentSlider/ContentSlider";
import SubCategory from "./SubCategory/SubCategory";

const ProductPage = () => {

    const {addItem} = useCart();
    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[page.name]);
    const productPage = useSelector(state => state.productPage)

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(page.product);
    // This function turns low-priority' to 'lowPriority' (for correct adding as property inside state)
    const productCamelCase = require('change-case').camelCase(page.product)

    const viewSettings = productPage.productData[page.name].products[productCamelCase].viewSettings

    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(productPage.productData[page.name].products[productCamelCase].price);
    const [sliderPrice, setSliderPrice] = useState(0);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    const addToCartHandler = (sliderPrice) => {

        const product = productPage.productData[page.name].products[productCamelCase];

        const productToAdd = {
            id: uuidv4(),
            title: product.header,
            price: price + sliderPrice,
            quantity: 1,
            img: product.img
        };
        addItem(productToAdd);
        setShowModal(true);
    }

    // Refresh total price when re-render

    useEffect(() => {
        setPrice(productPage.productData[page.name].products[productCamelCase].price);
        setSliderPrice(0);
    }, [page, productCamelCase, productPage.productData])

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
                    {productPage.productData[page.name].products[productCamelCase].hasOwnProperty('cards') ?
                        <SubCategory
                            game={page.name}
                            product={productCamelCase}
                        />
                        :
                    <Container fluid id={'pdPageContentContainer'}>
                        <Row>
                            <Col md={viewSettings ? 9 : 12}>
                                <div className={'pdPageContentTitle'}>
                                    <h1>{productPage.productData[page.name].products[productCamelCase].header}</h1>
                                </div>
                                <div className={'customizeDividerLine'}></div>
                                {viewSettings ? null :
                                    <ContentSlider
                                        page={page.name}
                                        product={productCamelCase}
                                        setPrice={setPrice}
                                        totalPrice={price}
                                        addToCartHandler={addToCartHandler}
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                    />
                                }
                                <div className={'pdPageContentText'}>
                                    <p>{productPage.productData[page.name].products[productCamelCase].text}</p>
                                </div>
                            </Col>
                            {viewSettings ?
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
                                        <div className={'customizeDividerLine'}></div>
                                        <div className={'sliderContainer'}>
                                            <Slider
                                                value={sliderPrice}
                                                min={0}
                                                max={1000}
                                                onChange={handleSliderChange}
                                            />
                                        </div>
                                        <div className={'customizeDividerLine'}></div>
                                        <div className={'totalPrice'}><p>{price + sliderPrice}&#8364;</p></div>
                                        <div className={'customizeDividerLine'}></div>
                                        <div className={'customizeButtonsContainer'}>
                                            <Button
                                                onClick={() => addToCartHandler(sliderPrice)}
                                                className={'customizeButtons'}
                                            >
                                                Buy now
                                            </Button>
                                            <Button className={'customizeButtons'}>Contact manager</Button>
                                            <AddCartModal show={showModal} setShowModal={setShowModal}/>
                                        </div>
                                    </div>
                                </Col> : null}
                        </Row>
                    </Container>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage