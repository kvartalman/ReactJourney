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
import CheckboxesPreview from "../Admin/CurrentContentEditor/ProductsEditor/ProductsEditorPreview/CheckboxesPreview";

const ProductPage = (props) => {

    // We use props here because we also render ProductPage as preview in admin panel. We get props only if we render
    // inside admin panel. It means, if we don't have props, then we're inside our website, and we use useParams.
    // Inside props, we have gameSelector, game and product.

    const {addItem} = useCart();
    const page = useParams();
    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[props.game ? props.game : page.name]);
    const subCtgSelector = useSelector(state => state.gameProducts[page.name].subCategories)

    const [productData, setProductData] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const [price, setPrice] = useState(null);

    const [sliderPrice, setSliderPrice] = useState(0);

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton link={button.link} key={button.id} name={button.name}/>
    ))

    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    const addToCartHandler = (sliderPrice) => {

        const productToAdd = {
            id: uuidv4(),
            title: productData.header,
            price: price + sliderPrice,
            quantity: 1,
            img: productData.img
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
                        setProductData(subCtgSelector[i].products[j]);
                        setPrice(subCtgSelector[i].products[j].price);
                        break;
                    }
                }
            }
        }
    }, []);

    // Refresh total price when re-render

    // useEffect(() => {
    //     setPrice(
    //         props.price != null ?
    //             props.price
    //             :
    //             (props.gameSelector ?
    //                     (props.gameSelector[props.game].products.hasOwnProperty(props.product) ?
    //                             props.gameSelector[props.game].products[props.product].price
    //                             :
    //                             null
    //                     )
    //                     :
    //                     (productPage.productData[page.name].products.hasOwnProperty(productCamelCase) ?
    //                             productPage.productData[page.name].products[productCamelCase].price
    //                             :
    //                             null
    //                     )
    //             ));
    //     setSliderPrice(0);
    // }, [props.price, page, productCamelCase, productPage.productData, props.game, props.gameSelector])

    return (
        <>
            {
                productData ?
                    (
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
                                                    <p>{productData.text}</p>
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
                                                                    setPrice={setPrice}
                                                                /> :
                                                                <CheckBoxes
                                                                    checkboxesData={productData.checkboxes}
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
                                                                    productData.slider.min
                                                                }
                                                                max={
                                                                    props.sliderMax ||
                                                                    productData.slider.max
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
                                                                        (props.sliderMultiplier || productData.slider.multiplier)
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
                                                            <Button className={'customizeButtons'}>Contact
                                                                manager</Button>
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
                    :
                    null
            }
        </>
    )
}

export default ProductPage