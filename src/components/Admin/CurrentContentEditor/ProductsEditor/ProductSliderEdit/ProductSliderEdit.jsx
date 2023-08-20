import React from 'react';
import ContentSliderEditor from "./ContentSliderEditor/ContentSliderEditor";

const ProductSliderEdit = (props) => {


    return (
        <>
        {
            props.gameSelector[props.game].viewSettings ?
                "Wow"
                :
                < ContentSliderEditor setKey={props.setKey} game={props.game}
                />
        }
        </>
    );
}

export default ProductSliderEdit;