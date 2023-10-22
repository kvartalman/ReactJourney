import React from "react";
import {useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const SubCategory = (props) => {

    const cardsSelector = useSelector(state => state.productPage.productData[props.game].subCategories[props.product])

    const cardsList = Object.keys(cardsSelector.cards).map(card => {
        return (
            <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>{cardsSelector.cards[card].title}</Card.Title>
                <Card.Text>
                    {cardsSelector.cards[card].text}
                </Card.Text>
                <NavLink to={cardsSelector.cards[card].link}>Go somewhere</NavLink>
            </Card.Body>
        </Card>
        )
    })

    return (
        <>
        {cardsList}
        </>
    )
}

export default SubCategory;