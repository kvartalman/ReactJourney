import {Card, Col} from "react-bootstrap";
import React from "react";

const OfferCard = (props) => {
    return (
        <Col className={'cardCol'}>
            <Card className={'cardPosition border'} id={props.id}>
                <Card.Body className={'cardBody'}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className={'cardText'}>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                {props.button}
            </Card>
        </Col>
    )
}

export default OfferCard
