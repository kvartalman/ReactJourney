import React, {useState} from 'react';
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";
import AddCartModal from "../../Cart/AddCartModal/AddCartModal";
import MultiRangeSlider from 'multi-range-slider-react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import ContentSliderCheckboxesPreview
    from "../../Admin/CurrentContentEditor/ProductsEditor/ProductsEditorPreview/ContentSliderCheckboxesPreview";

const ContentSlider = (props) => {

    const sliderRangesValues = props.sliderRangesData ? props.sliderRangesData : props.productData.sliderRangesValues
    const sliderSettings = props.productData.sliderSettings

    const [finalPrice, setFinalPrice] = useState(0);
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);

    const handleChange = (e) => {

        setMinValue(e.minValue)
        setMaxValue(e.maxValue)

        let calculatedPrice = 0;
        // In this cycle, we're finding all values of our ranges and concatenate them. To realise, what the range
        // and what the value of range we need, we use array of objects [{range: [0, 100], value: 0.2}, ...]
        // If we find range, then we can take value of this range (each step +=value)
        for (let level = minValue; level < maxValue; level++) {
            const matchingRange = sliderRangesValues.find(
                rangeEntry =>
                    level >= rangeEntry.range[0] && level < rangeEntry.range[1]
            );

            if (matchingRange) {
                calculatedPrice += matchingRange.value;
            }
        }

        setFinalPrice(calculatedPrice);
    };

    return (
        <Container fluid id={'productContentSliderContainer'}>
            <Row id={'productContentSliderRow'}>
                <div className={'sliderValuesContainer'}>
                    <div className={'sliderMinValueContainer'}>
                        {minValue}
                    </div>
                    <div className={'sliderMaxValueContainer'}>
                        {maxValue}
                    </div>
                </div>
                <div id={'multiRangeSliderContainer'}>
                    <MultiRangeSlider
                        min={props.contentSliderMinValue ? props.contentSliderMinValue : sliderSettings.min}
                        max={props.contentSliderMaxValue ? props.contentSliderMaxValue : sliderSettings.max}
                        step={props.contentSliderStep ? props.contentSliderStep : sliderSettings.step}
                        minValue={
                            props.contentSliderLeftThumb && props.contentSliderLeftThumb < sliderSettings.minValue ?
                                props.contentSliderLeftThumb :
                                sliderSettings.minValue
                        }
                        maxValue={
                            props.contentSliderRightThumb && props.contentSliderRightThumb > sliderSettings.minValue ?
                                props.contentSliderRightThumb :
                                sliderSettings.maxValue
                        }
                        ruler={false}
                        onInput={(e) => {
                            handleChange(e)
                        }}
                    />
                </div>
                <Row id={'productContentCheckboxesContainer'}>
                    {props.preview ? <ContentSliderCheckboxesPreview
                            game={props.page}
                            product={props.product}
                            setPrice={props.setPrice}
                        />
                        :
                        <ContentSliderCheckboxes
                            productData={props.productData}
                            setPrice={props.setPrice}
                        />
                    }
                </Row>
                <div className={'customizeDividerLine'}></div>
                <Container fluid id={'contentSliderFooter'}>
                    <Row id={'contentSliderTotalPrice'}>
                        Total: {props.totalPrice + Number(finalPrice.toFixed(2))}&#8364;
                    </Row>
                    <Row id={'contentSliderButtonsContainer'}>
                        {props.showModal ?
                            <>
                                <button
                                    className={'contentSliderButton contentSliderButtonBuy'}
                                    onClick={() => props.addToCartHandler(finalPrice)}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className={'contentSliderButton contentSliderButtonHelp'}
                                >
                                    I have question
                                </button>
                            </>
                            :
                            <>
                                <button
                                    className={'contentSliderButton contentSliderButtonBuy'}
                                >
                                    Buy Now
                                </button>
                                <button
                                    className={'contentSliderButton contentSliderButtonHelp'}
                                >
                                    I have question
                                </button>
                            </>
                        }
                    </Row>
                    <AddCartModal show={props.showModal} setShowModal={props.setShowModal}/>
                </Container>
            </Row>
        </Container>
    );
}

export default ContentSlider;