import React, {useState} from 'react';
import Slider from "rc-slider";
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";
import AddCartModal from "../../Cart/AddCartModal/AddCartModal";
import MultiRangeSlider from 'multi-range-slider-react';

const ContentSlider = (props) => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [prevValue, setPrevValue] = useState(-10000);
    const [variable, setVariable] = useState(0);
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
            debugger;
            const matchingRange = rangeAdditions.find(

                rangeEntry =>
                    level >= rangeEntry.range[0] && level < rangeEntry.range[1]
            );
            console.log(matchingRange)
            if (matchingRange) {
                debugger;
                calculatedPrice += matchingRange.addition;
            }
            console.log(minValue, level)
        }
        setFinalPrice(calculatedPrice);
        console.log(finalPrice)
        debugger;
        // let calculatedPrice = 0;
        // for (let level = minValue; level < maxValue; level++) {
        //     if (level < 10) {
        //         calculatedPrice += 2
        //     } else if (level >= 10 && level < 20) {
        //         calculatedPrice += 4
        //     } else if (level >= 20 && level < 30) {
        //         calculatedPrice += 6
        //     } else if (level >= 30 && level < 40) {
        //         calculatedPrice += 8
        //     } else {
        //         calculatedPrice += 10
        //     }
        //     setFinalPrice(calculatedPrice);
        // }
    };

    const handleSliderChange = (value) => {
        console.log(variable)
        const checker = value > prevValue;

        setPrevValue(value);
        console.log(value);
    }


    return (
        <div className={'productContentSliderContainer'}>
            <div className={'contentSliderContainer'}>
                {/*<Slider*/}
                {/*    min={0}*/}
                {/*    max={100}*/}
                {/*    onChange={handleSliderChange}*/}
                {/*    step={1}*/}
                {/*    marks={*/}
                {/*        {*/}
                {/*            10: 10,*/}
                {/*            20: 20,*/}
                {/*            30: 30,*/}
                {/*            40: 40,*/}
                {/*            50: 50,*/}
                {/*            60: 60,*/}
                {/*            70: 70,*/}
                {/*            80: 80,*/}
                {/*            90: 90,*/}
                {/*            100: 100*/}
                {/*        }*/}
                {/*    }*/}
                {/*    trackStyle={{backgroundColor: '#ffc107', transition: '0.1s'}}*/}
                {/*    handleStyle={{*/}
                {/*        backgroundColor: '#ffc107',*/}
                {/*        transition: '0.1s',*/}
                {/*        borderColor: '#ffc107',*/}
                {/*        opacity: 1,*/}
                {/*        boxShadow: '0 0 0 8px rgba(255, 193, 7, 0.5)'*/}
                {/*    }}*/}
                {/*    railStyle={{backgroundColor: 'rgba(33, 37, 41, 0.3)'}}*/}
                {/*    dotStyle={{*/}
                {/*        top: '15px',*/}
                {/*        backgroundColor: 'rgb(33, 37, 41)',*/}
                {/*        borderColor: 'rgb(33, 37, 41)',*/}
                {/*        borderRadius: 0,*/}
                {/*        width: '2px',*/}
                {/*        height: '10px'*/}
                {/*    }}*/}
                {/*/>*/}

            </div>
            <div>
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={1}
                    minValue={minValue}
                    maxValue={maxValue}
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
                    Total: {props.totalPrice + finalPrice}&#8364;
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