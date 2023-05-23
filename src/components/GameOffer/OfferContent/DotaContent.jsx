import React from 'react';
import Container from "react-bootstrap/Container";
import OfferCard from "./OfferCard";
import {render} from "@testing-library/react";
import {CardGroup, Row} from "react-bootstrap";
import './OfferContent.css'

const DotaContent = (props) => {

    return (
        <Container fluid>
            <Row className={'offerTitleRow'}>
                <h1>Dota Offer</h1>
            </Row>
            <Row className={'offerTextRow'}>
                <p>I wrote this text just for test. This text means nothing and i will add this text to
                    most of text-blocks on website. However, i should pay attention to the size of text.
                    I think, size of text should not be too high or too little. Better to find something people
                    call "golden mean". Anyway, we will see, how it goes.
                </p>
            </Row>
            <Row className={'offerCardContent'}>
                <div className={'offerCardTitle'}>
                <h1>Offers of the week</h1>
                </div>
                    <OfferCard title={'3000 MMR Boost'} text={'35$'}/>
                    <OfferCard title={'Low priority'} text={'5$'} />
                    <OfferCard title={'Bladeform legacy'} text={'25$'}/>
                    <OfferCard title={'+200 MMR'} text={'10$'}/>

            </Row>
        </Container>
    )
}

export default DotaContent