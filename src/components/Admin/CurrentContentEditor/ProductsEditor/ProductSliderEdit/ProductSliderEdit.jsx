import React from 'react';
import ContentSliderEditor from "./ContentSliderEditor/ContentSliderEditor";
import SliderEditor from "./SliderEditor/SliderEditor";
import './ProductSliderEdit.css'

const ProductSliderEdit = (props) => {

    return (
        <div id={'productSliderEditMainContainer'}>
        {
            props.product.sliderType === 'classic' ?
                <SliderEditor
                    price={props.price}
                    setSliderMin={props.setSliderMin}
                    setSliderMax={props.setSliderMax}
                    setSliderMultiplier={props.setSliderMultiplier}
                    product={props.product}
                />
                :
                <ContentSliderEditor
                    price={props.price}
                    setContentSliderMinValue={props.setContentSliderMinValue}
                    setContentSliderMaxValue={props.setContentSliderMaxValue}
                    setContentSliderLeftThumb={props.setContentSliderLeftThumb}
                    setContentSliderRightThumb={props.setContentSliderRightThumb}
                    setContentSliderStep={props.setContentSliderStep}
                    product={props.product}
                />
        }
        </div>
    );
}

export default ProductSliderEdit;