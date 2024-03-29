import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Advantages.css';
import AdvantageCard from "./AdvantageCard";
import {useSelector} from "react-redux";

const Advantages = (props) => {

    const advData = useSelector(state => state.homePage.advData)

    const advCardsArr = advData.map(card => (
        <AdvantageCard img={card.img} key={card.id} title={card.title} text={card.text}/>
    ))

    return (
        <Container fluid>
            <img src={'./backgrounds/whychooseus.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>
            <Row xs={1} md={2} lg={3} className="g-4" id={'advantage-row'}>
                {advCardsArr}
            </Row>
        </Container>
    );
}

export default Advantages