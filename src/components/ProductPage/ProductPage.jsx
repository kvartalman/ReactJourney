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

const ProductPage = (props) => {

    // We use props here because we also render ProductPage as preview in admin panel. We get props only if we render
    // inside admin panel. It means, if we don't have props, then we're inside our website, and we use useParams.
    // Inside props, we have gameSelector, game and product.

    const {addItem} = useCart();
    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[props.game ? props.game : page.name]);
    const productPage = useSelector(state => state.productPage)

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(props.product || page.product);
    // This function turns low-priority' to 'lowPriority' (for correct adding as property inside state)
    const productCamelCase = require('change-case').camelCase(props.product || page.product);

    const viewSettings = props.gameSelector ?
        props.gameSelector[props.game].products[props.product].viewSettings
        :
        productPage.productData[page.name].products[productCamelCase].viewSettings

    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(
        props.gameSelector ?
            props.gameSelector[props.game].products[productCamelCase].price
            :
            productPage.productData[page.name].products[productCamelCase].price);

    const [sliderPrice, setSliderPrice] = useState(0);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    const addToCartHandler = (sliderPrice) => {

        const product =
            props.gameSelector ?
                props.gameSelector[props.game].products[productCamelCase]
                :
                productPage.productData[page.name].products[productCamelCase];

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
        setPrice(
            props.gameSelector ?
                props.gameSelector[props.game].products[productCamelCase].price
                :
                productPage.productData[page.name].products[productCamelCase].price
        );
        setSliderPrice(0);
    }, [page, productCamelCase, productPage.productData, props.game, props.gameSelector])

    return (
        <Container fluid id={'productPageMainContainer'}>
            <Row className={'productPageRow'}>
                <Col md={3} id={'productPagePanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            linkNames={[
                                productPage.breadCrumbsData[props.game || page.name]
                            ]}
                            activeLinkName={productTitleCase}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} id={'productPageContentCol'}>
                    {productPage.productData[props.game || page.name].products
                        [productCamelCase].hasOwnProperty('cards') ?
                        <SubCategory
                            game={props.game || page.name}
                            product={productCamelCase}
                        />
                        :
                        <Container fluid id={'pdPageContentContainer'}>
                            <Row>
                                <Col md={viewSettings ? 9 : 12}>
                                    <div className={'pdPageContentTitle'}>
                                        <h1>{productPage.productData[props.game || page.name].products[productCamelCase].header}</h1>
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
                                        <p>{productPage.productData[props.game || page.name].products
                                            [productCamelCase].text}</p>
                                    </div>
                                </Col>
                                {viewSettings ?
                                    <Col md={3}>
                                        <div><h2>Customize your purchase</h2></div>
                                        <div id={'productOptionsContainer'}>
                                            <div className={'checkboxesContainer'}>
                                                <CheckBoxes
                                                    game={props.game || page.name}
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