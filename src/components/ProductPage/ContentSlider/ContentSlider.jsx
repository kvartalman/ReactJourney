import React, {useState} from 'react';
import Slider from "rc-slider";
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";
import AddCartModal from "../../Cart/AddCartModal/AddCartModal";

const ContentSlider = (props) => {

    const [sliderValue, setSliderValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSliderChange = (value) => {
        setSliderValue(value);
        if (value < 10) {
            setTotalPrice(value / 5);
        } else if (value >= 10 && value < 20) {
            setTotalPrice((value / 5) + 0.2)
        } else {
            debugger;
            setTotalPrice((value / 5) + 0.6)
        }

        }


    return (
        <div className={'productContentSliderContainer'}>
            <div>{sliderValue}</div>
            <div>{totalPrice}</div>
            <div className={'contentSliderContainer'}>
                <Slider
                    value={sliderValue}
                    min={0}
                    max={1000}
                    onChange={handleSliderChange}
                    step={1}
                    marks={
                        {
                            100: 100,
                            200: 200,
                            300: 300,
                            400: 400,
                            500: 'Diamond',
                            600: 'ML',
                            700: 'GML'
                        }
                    }
                    trackStyle={{backgroundColor: '#ffc107', transition: '0.1s'}}
                    handleStyle={{
                        backgroundColor: '#ffc107',
                        transition: '0.1s',
                        borderColor: '#ffc107',
                        opacity: 1,
                        boxShadow: '0 0 0 8px rgba(255, 193, 7, 0.5)'
                    }}
                    railStyle={{backgroundColor: 'rgba(33, 37, 41, 0.3)'}}
                    dotStyle={{
                        top: '15px',
                        backgroundColor: 'rgb(33, 37, 41)',
                        borderColor: 'rgb(33, 37, 41)',
                        borderRadius: 0,
                        width: '2px',
                        height: '10px'
                    }}
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
                    Total: {props.totalPrice + totalPrice}&#8364;
                </div>
                <div className={'contentSliderButtonsContainer'}>
                    <button
                        className={'contentSliderButton contentSliderButtonBuy'}
                        onClick={() => props.addToCartHandler(sliderValue)}
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