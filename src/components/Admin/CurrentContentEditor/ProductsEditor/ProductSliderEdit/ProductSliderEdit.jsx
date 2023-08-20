import React from 'react';
import ContentSliderEditor from "./ContentSliderEditor/ContentSliderEditor";

const ProductSliderEdit = (props) => {

    return (
        <>
        {
            props.gameSelector[props.game].products[props.product].viewSettings ?
                "Wow"
                :
                <ContentSliderEditor
                    setKey={props.setKey}
                    game={props.game}
                    product={props.gameSelector[props.game].products[props.product].viewSettings ? null : props.product}
                />
        }
        </>
    );
}

export default ProductSliderEdit;