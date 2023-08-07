import React from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from "react-router-dom";

const GameOfferCard = (props) => {
    return (
        <div className={'offerCardContainer'}>
            <NavLink href={'/'} className={'offerLink'}>
                <Card className={'offerCard'}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
}

export default GameOfferCard