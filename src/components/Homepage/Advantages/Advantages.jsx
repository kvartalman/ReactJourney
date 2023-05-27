import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Advantages.css';
import AdvantageCard from "./AdvantageCard";

const Advantages = (props) => {

    let advCardsArr = props.advData.map(card => (
        <AdvantageCard img={card.img} title={card.title} text={card.text}/>
    ))

    return (
        <Container fluid>
            {props.advImgTab}
            <Row xs={1} md={2} lg={3} className="g-4" id={'advantage-row'}>
                {advCardsArr}
            </Row>
        </Container>
    );
}

export default Advantages