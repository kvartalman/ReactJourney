import React, {useEffect, useState} from 'react';
import './ProductPagePreview.css';
import {useSelector} from "react-redux";
import OfferPanelButton from "../../../../../GameOffer/OfferPanel/OfferPanelButton";
import {v4 as uuidv4} from "uuid";
import BreadCrumb from "../../../../../GameOffer/BreadCrumb/BreadCrumb";
import ContentSlider from "../../../../../ProductPage/ContentSlider/ContentSlider";
import {Col} from "react-bootstrap";
import CheckboxesPreview from "../CheckboxesPreview";
import CheckBoxes from "../../../../../ProductPage/CheckBoxes/CheckBoxes";
import Slider from "rc-slider";
import Button from "react-bootstrap/Button";
import AddCartModal from "../../../../../Cart/AddCartModal/AddCartModal";
import useForceUpdate from "@restart/hooks/useForceUpdate";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ProductPagePreview = (props) => {

    const gameOffer = useSelector(state => state.gameOfferPages.pagesData[props.game]);
    const sliderRangesData = useSelector(state => state.adminPanel.contentSliderEditorRanges);
    const checkboxesEditor = useSelector(
        state => (state.adminPanel.checkboxesEditor)
    )

    const [productData, setProductData] = useState(props.product);
    const [price, setPrice] = useState(props.price);

    const [sliderPrice, setSliderPrice] = useState(0);
    const [checkboxesState, setCheckboxesState] = useState(checkboxesEditor);
    const [checkboxesChecker, setCheckboxesChecker] = useState(new Array(checkboxesEditor.length).fill(false));

    const panelButtonsArr = gameOffer.panelButton.map(button => (
        <OfferPanelButton preview={true} link={button.link} key={button.id} name={button.name}/>
    ))


    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    useEffect(() => {
        setPrice(props.price)
    }, [props.price]);

    useEffect(() => {
        setCheckboxesState(checkboxesEditor);
        setCheckboxesChecker(new Array(checkboxesEditor.length).fill(false));
    }, [checkboxesEditor]);

    return (
        <div id={'productPagePreviewMainContainer'}>
            <div id={'productPagePreviewMainRow'}>
                <div id={'productPagePreviewCrumbPanelCol'}>
                    <div className={'breadCrumb'}>
                        <BreadCrumb
                            preview={true}
                            game={props.game}
                            sub={props.sub}
                            product={props.product.header}
                        />
                    </div>
                    <div className={'panelCol'}>
                        {panelButtonsArr}
                    </div>
                </div>
                <div id={props.product.sliderType === 'complex' ?
                    'productPagePreviewComplexContentCol'
                    :
                    'productPagePreviewClassicContentCol'
                }
                >
                    <div id={'productPagePreviewHeaderContainer'}>
                        <h1>
                            {
                                props.title || props.product.header
                            }
                        </h1>
                    </div>
                    <div className={'customizeDividerLine'}></div>
                    {props.product.sliderType === 'complex' ?
                        <ContentSlider
                            sliderRangesData={sliderRangesData}
                            preview={!!props.price}
                            contentSliderMinValue={props.contentSliderMinValue}
                            contentSliderMaxValue={props.contentSliderMaxValue}
                            contentSliderLeftThumb={props.contentSliderLeftThumb}
                            contentSliderRightThumb={props.contentSliderRightThumb}
                            contentSliderStep={props.contentSliderStep}

                            productData={productData}
                            setPrice={setPrice}
                            totalPrice={price}

                        />
                        :
                        null
                    }
                    <div id={'productPagePreviewTextContainer'}>
                        <p>{
                            props.text || props.product.text
                        }</p>
                    </div>
                    {props.product.sliderType === 'classic' ?
                        <div id={'productPagePreviewClassicSlider'}>
                            <div><h2>Customize your purchase</h2></div>
                            <div id={'productOptionsContainer'}>
                                <div className={'checkboxesContainer'}>
                                    <CheckboxesPreview
                                        checkboxesState={checkboxesState}
                                        setCheckboxesChecker={setCheckboxesChecker}
                                        checkboxesChecker={checkboxesChecker}
                                        key={props.price}
                                        game={props.game}
                                        setPrice={setPrice}
                                    />
                                </div>
                                <div className={'customizeDividerLine'}></div>
                                <div className={'sliderContainer'}>
                                    <Slider
                                        value={sliderPrice}
                                        min={
                                            props.sliderMin
                                        }
                                        max={
                                            props.sliderMax
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
                                                (props.sliderMultiplier)
                                            ).toFixed(1))
                                    }&#8364;
                                </p></div>
                                <div className={'customizeDividerLine'}></div>
                                <div className={'customizeButtonsContainer'}>
                                    <Button
                                        className={'customizeButtons'}
                                    >
                                        Buy now
                                    </Button>
                                    <Button className={'customizeButtons'}>Contact
                                        manager
                                    </Button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPagePreview;