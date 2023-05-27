import React from "react";
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Steps.css'
import StepElem from "./StepElem";



const Steps = (props) => {

    let stepsElemsArr = props.stepsElemsData.map(elem => (
        <StepElem xmlns={elem.xmlns} class={elem.class} path={elem.path} text={elem.text} />
    ))

    return (
        <Container fluid>
            {props.stepsImgTab}
            <Row xs={1} md={2} lg={3} id={'steps-block-row'}>
                {stepsElemsArr}
            </Row>
        </Container>
    )
}

export default Steps