import React from 'react';
import Card from 'react-bootstrap/Card';

const GameOfferCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}  className={'offerCard'}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GameOfferCard