import React, {useState} from 'react';
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";
import AddCartModal from "../../Cart/AddCartModal/AddCartModal";
import MultiRangeSlider from 'multi-range-slider-react';

const ContentSlider = (props) => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [minValue, setMinValue] = useState(25);
    const  [maxValue, setMaxValue] = useState(75);
    const rangeAdditions = [
        {range: [0, 10], addition: 0.2},
        {range: [10, 20], addition: 0.4},
        {range: [20, 30], addition: 0.6},
        {range: [30, 40], addition: 0.8},
        {range: [40, 100], addition: 1}
    ]

    const handleChange = (e) => {

        setMinValue(e.minValue)
        setMaxValue(e.maxValue)

        let calculatedPrice = 0;

        for (let level = minValue; level < maxValue; level++) {
            const matchingRange = rangeAdditions.find(

                rangeEntry =>
                    level >= rangeEntry.range[0] && level < rangeEntry.range[1]
            );

            if (matchingRange) {
                calculatedPrice += matchingRange.addition;
            }
        }

        setFinalPrice(calculatedPrice);
    };

    return (
        <div className={'productContentSliderContainer'}>
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
                    min={0}
                    max={100}
                    step={1}
                    minValue={minValue}
                    maxValue={maxValue}
                    ruler={false}
                    onInput={(e) => {handleChange(e)}}
                />
            </div>
            <div className={'productContentCheckboxesContainer'}>
                <ContentSliderCheckboxes
                    game={props.page}
                    product={props.product}
                    setPrice={props.setPrice}
                />
            </div>
            <div className={'customizeDividerLine'}></div>
            <div className={'contentSliderFooter'}>
                <div className={'contentSliderTotalPrice'}>
                    Total: {props.totalPrice + Number(finalPrice.toFixed(2))}&#8364;
                </div>
                <div className={'contentSliderButtonsContainer'}>
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
                </div>
                <AddCartModal show={props.showModal} setShowModal={props.setShowModal}/>
            </div>
        </div>
    );
}

export default ContentSlider;