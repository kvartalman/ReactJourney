import React from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";


const BestOffers = () => {
    return (
        <Container fluid>
            <Row id={'offer-row'}>
                <img src={''} alt={'BEST OFFERS'} className={'img-tab'}/>
            </Row>
        </Container>
    )
}

export default BestOffers