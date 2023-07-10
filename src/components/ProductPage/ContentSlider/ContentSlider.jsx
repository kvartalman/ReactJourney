import React, {useState} from 'react';
import Slider from "rc-slider";
import CheckBoxes from "../CheckBoxes/CheckBoxes";
import './ContentSlider.css'
import ContentSliderCheckboxes from "./ContentSliderCheckboxes";

const ContentSlider = (props) => {

    const [sliderPrice, setSliderPrice] = useState(0);

    const handleSliderChange = (value) => {
        setSliderPrice(value);
    }

    return (
        <div className={'productContentSliderContainer'}>
            <Slider
                value={sliderPrice}
                min={0}
                max={1000}
                onChange={handleSliderChange}
                marks={
                    {
                        100: 100,
                        200: 200,
                        300: 300,
                        400: 400,
                        500: 500
                    }
                }
                trackStyle={{backgroundColor: '#ffc107', transition: '0.1s'}}
                handleStyle={{
                    backgroundColor: '#ffc107',
                    transition: '0.1s',
                    borderColor: '#ffc107',
                    opacity: 1
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
            <div className={'productContentCheckboxesContainer'}>
                <ContentSliderCheckboxes
                    game={props.page}
                    product={props.product}
                    setPrice={props.setPrice}
                    totalPrice={props.price}
                />
            </div>
        </div>
    );
}

export default ContentSlider;