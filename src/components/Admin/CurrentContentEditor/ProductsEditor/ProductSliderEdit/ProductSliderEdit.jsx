import React from 'react';
import ContentSliderEditor from "./ContentSliderEditor/ContentSliderEditor";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ProductSliderEdit = (props) => {

    return (
        <Container fluid>
        {
            props.gameSelector[props.game].products[props.product].viewSettings ?
                "Wow"
                :
                <ContentSliderEditor
                    setContentSliderMinValue={props.setContentSliderMinValue}
                    setContentSliderMaxValue={props.setContentSliderMaxValue}
                    setContentSliderLeftThumb={props.setContentSliderLeftThumb}
                    setContentSliderRightThumb={props.setContentSliderRightThumb}
                    setContentSliderStep={props.setContentSliderStep}
                    setKey={props.setKey}
                    game={props.game}
                    product={props.gameSelector[props.game].products[props.product].viewSettings ? null : props.product}
                />
        }
            <div>
                <Button className={'nextPageButton'} onClick={() => props.setKey('preview')}>Next</Button>
            </div>
        </Container>
    );
}

export default ProductSliderEdit;