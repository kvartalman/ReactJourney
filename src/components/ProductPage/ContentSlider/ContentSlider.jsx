import React, {useState} from 'react';
import Slider from "rc-slider";
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";
import AddCartModal from "../../Cart/AddCartModal/AddCartModal";

const ContentSlider = (props) => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [prevValue, setPrevValue] = useState(0);
    const handleSliderChange = (value) => {

        console.log(prevValue, value)
        if (value <= 10) {
        setFinalPrice((value * 2) / 10);}
        else if (value > 10) {
            setFinalPrice(2 + ((value - 10) * 4) / 10);
        }
        }


    return (
        <div className={'productContentSliderContainer'}>
            <div className={'contentSliderContainer'}>
                <Slider
                    min={0}
                    max={100}
                    onChange={handleSliderChange}
                    step={1}
                    marks={
                        {
                            10: 10,
                            20: 20,
                            30: 30,
                            40: 40,
                            50: 50,
                            60: 60,
                            70: 70,
                            80: 80,
                            90: 90,
                            100: 100
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