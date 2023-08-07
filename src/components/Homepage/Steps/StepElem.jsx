import {Col} from "react-bootstrap";
import React from "react";

const StepElem = (props) => {
    return (
        <Col className={'steps-block-col'}>
            <svg xmlns={props.xmlns} width={"100"} height={"100"} fill={"" +
                "currentColor"} className={props.class}
                 viewBox="0 0 16 16">
                {props.path}
            </svg>
            <p className={'steps-text'}>
                {props.text}
            </p>
        </Col>
    )
}

export default StepElem