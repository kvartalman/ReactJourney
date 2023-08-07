import React from "react";
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Steps.css'
import StepElem from "./StepElem";
import {useSelector} from "react-redux";



const Steps = () => {

    const stepsElemsData = useSelector(state => state.homePage.stepsElemsData)

    let stepsElemsArr = stepsElemsData.map(elem => (

        <StepElem key={elem.id} xmlns={elem.xmlns} class={elem.class} path={
            elem.path.map(el => (
                <path d={el} />
            ))
        } text={elem.text} />
    ))

    return (
        <Container fluid>
            <img src={'./backgrounds/howtostart.png'} alt={'BEST OFFERS'} className={'' +
                'img-fluid imgTab'}/>
            <Row xs={1} md={2} lg={3} id={'steps-block-row'}>
                {stepsElemsArr}
            </Row>
        </Container>
    )
}

export default Steps