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
import CheckboxesPreview from "../Admin/CurrentContentEditor/ProductsEditor/ProductsEditorPreview/CheckboxesPreview";

const ProductPage = (props) => {

    // We use props here because we also render ProductPage as preview in admin panel. We get props only if we render
    // inside admin panel. It means, if we don't have props, then we're inside our website, and we use useParams.
    // Inside props, we have gameSelector, game and product.

    const {addItem} = useCart();
    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[props.game ? props.game : page.name]);
    const productPage = useSelector(state => state.productPage);
    const subCtgSelector = useSelector(state => state.gameProducts[page.name].subCategories)

    const [productData, setProductData] = useState(null);

    // This function turns 'low-priority' to 'Low priority' (for beautiful breadcrumbs view)
    const productTitleCase = require('change-case').sentenceCase(props.product || page.product);
    // This function turns low-priority' to 'lowPriority' (for correct adding as property inside state)
    const productCamelCase = require('change-case').camelCase(props.product || page.product);

    const [showModal, setShowModal] = useState(false);

    const [price, setPrice] = useState(
        props.price != null ?
            props.price
            :
            (props.gameSelector ?
                    (props.gameSelector[props.game].products.hasOwnProperty(props.product) ?
                            props.gameSelector[props.game].products[props.product].price
                            :
                            null
                    )
                    :
                    (productPage.productData[page.name].products.hasOwnProperty(productCamelCase) ?
                            productPage.productData[page.name].products[productCamelCase].price
                            :
                            null
                    )
            )
    );

    const [sliderPrice, setSliderPrice] = useState(0);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    const addToCartHandler = (sliderPrice) => {

        const product =
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

    useEffect(() => {

        const subName = require('change-case').sentenceCase(page.sub)
        const productName = require('change-case').sentenceCase(page.product)

        for (let i = 0; i < subCtgSelector.length; i++) {
            if (subCtgSelector[i].name === subName) {
                for (let j = 0; j < subCtgSelector[i].products.length; j++) {
                    if (subCtgSelector[i].products[j].header === productName) {
                        setProductData(subCtgSelector[i].products[j])
                        break;
                    }
                }
            }
        }
    }, []);

    // Refresh total price when re-render

    useEffect(() => {
        setPrice(
            props.price != null ?
                props.price
                :
                (props.gameSelector ?
                        (props.gameSelector[props.game].products.hasOwnProperty(props.product) ?
                                props.gameSelector[props.game].products[props.product].price
                                :
                                null
                        )
                        :
                        (productPage.productData[page.name].products.hasOwnProperty(productCamelCase) ?
                                productPage.productData[page.name].products[productCamelCase].price
                                :
                                null
                        )
                ));
        setSliderPrice(0);
    }, [props.price, page, productCamelCase, productPage.productData, props.game, props.gameSelector])

    return (
        <Container fluid id={'productPageMainContainer'}>
            <Row className={'productPageRow'}>
                <Col md={3} id={'productPagePanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            game={page.name}
                            sub={page.sub}
                            product={page.product}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </Col>
                <Col md={9} id={'productPageContentCol'}>
                    <Container fluid id={'pdPageContentContainer'}>
                        <Row>
                            <Col md={productData.sliderType === 'classic' ? 9 : 12}>
                                <div className={'pdPageContentTitle'}>
                                    <h1>
                                        {
                                            productData.header
                                        }
                                    </h1>
                                </div>
                                <div className={'customizeDividerLine'}></div>
                                {productData.sliderType === 'complex' ?
                                    <ContentSlider

                                        preview={!!props.price}
                                        contentSliderMinValue={props.contentSliderMinValue}
                                        contentSliderMaxValue={props.contentSliderMaxValue}
                                        contentSliderLeftThumb={props.contentSliderLeftThumb}
                                        contentSliderRightThumb={props.contentSliderRightThumb}
                                        contentSliderStep={props.contentSliderStep}

                                        productData={productData}
                                        setPrice={setPrice}
                                        totalPrice={price}
                                        addToCartHandler={addToCartHandler}
                                        showModal={showModal}
                                        setShowModal={setShowModal}

                                    />
                                    :
                                    null
                                }
                                <div className={'pdPageContentText'}>
                                    <p>{props.text || productPage.productData[props.game || page.name].products
                                        [productCamelCase].text}</p>
                                </div>
                            </Col>
                            {productData.sliderType === 'classic' ?
                                <Col md={3}>
                                    <div><h2>Customize your purchase</h2></div>
                                    <div id={'productOptionsContainer'}>
                                        <div className={'checkboxesContainer'}>
                                            {props.game ?
                                                <CheckboxesPreview
                                                    game={props.game}
                                                    product={productCamelCase}
                                                    setPrice={setPrice}
                                                /> :
                                                <CheckBoxes
                                                    game={props.game || page.name}
                                                    product={productCamelCase}
                                                    setPrice={setPrice}
                                                    totalPrice={price}
                                                />}
                                        </div>
                                        <div className={'customizeDividerLine'}></div>
                                        <div className={'sliderContainer'}>
                                            <Slider
                                                value={sliderPrice}
                                                min={
                                                    props.sliderMin ||
                                                    productPage.productData
                                                        [page.name || props.game].products[productCamelCase].slider.min
                                                }
                                                max={
                                                    props.sliderMax ||
                                                    productPage.productData
                                                        [page.name || props.game].products[productCamelCase].slider.max
                                                }
                                                onChange={handleSliderChange}
                                            />
                                        </div>
                                        <div className={'customizeDividerLine'}></div>
                                        <div className={'totalPrice'}><p>
                                            {
                                                price +
                                                Number(
                                                    (
                                                        sliderPrice *
                                                        (props.sliderMultiplier || productPage.productData
                                                            [page.name || props.game].products
                                                            [productCamelCase].slider.multiplier)
                                                    ).toFixed(1))
                                            }&#8364;
                                        </p></div>
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
                                </Col>
                                :
                                null
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage