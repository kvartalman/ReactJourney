import React from 'react';
import './ProductsEditorPreview.css'
import ProductPage from "../../../../ProductPage/ProductPage";
import ProductPagePreview from "./ProductPagePreview/ProductPagePreview";

const ProductsEditorPreview = (props) => {

    return (
        <>


                    <ProductPagePreview
                        gameSelector={props.gameSelector}
                        game={props.game}
                        product={props.product}
                        price={Number(props.price)}
                        text={props.text}
                        title={props.title}
                        contentSliderMinValue={props.contentSliderMinValue}
                        contentSliderMaxValue={props.contentSliderMaxValue}
                        contentSliderLeftThumb={props.contentSliderLeftThumb}
                        contentSliderRightThumb={props.contentSliderRightThumb}
                        contentSliderStep={props.contentSliderStep}
                        sliderMin={Number(props.sliderMin)}
                        sliderMax={Number(props.sliderMax)}
                        sliderMultiplier={props.sliderMultiplier}
                    />

        </>
    );
}

export default ProductsEditorPreview;