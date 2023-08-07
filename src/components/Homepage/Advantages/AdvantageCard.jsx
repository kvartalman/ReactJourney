import {Card, Col} from "react-bootstrap";
import React from "react";

const advCard = (props) => {
    return (
        <Col>
            <Card className={'advantage-cards'}>
                <Card.Img variant="top" className={'advantage-img'} src={props.img}/>
                <Card.Body>
                    <Card.Title className={'advantage-card-title'}>{props.title}</Card.Title>
                    <Card.Text className={'advantage-card-text'}>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default advCard