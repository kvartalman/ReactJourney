import React from 'react';
import ContentSliderEditor from "./ContentSliderEditor/ContentSliderEditor";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SliderEditor from "./SliderEditor/SliderEditor";

const ProductSliderEdit = (props) => {

    return (
        <Container fluid>
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
            <div>
                <Button className={'nextPageButton'} onClick={() => props.setKey('preview')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductSliderEdit;