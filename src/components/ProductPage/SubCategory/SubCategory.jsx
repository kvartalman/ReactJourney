import React from "react";
import {useSelector} from "react-redux";
import {Card, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import './SubCategory.css';

const SubCategory = (props) => {

    const cardsSelector = useSelector(state => state.productPage.productData[props.game].subCategories[props.product])

    const cardsList = Object.keys(cardsSelector.cards).map(card => {
        return (
            <Card
                className={'subCategoryCard'}
                style={{background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${cardsSelector.cards[card].src})`}}
            >
                <NavLink to={cardsSelector.cards[card].link}>
                <Card.Body className={'subCategoryCardBody'}>
                    <Card.Title>{cardsSelector.cards[card].title}</Card.Title>
                    <Card.Text>
                        {cardsSelector.cards[card].text}
                    </Card.Text>
                </Card.Body>
                </NavLink>
            </Card>
        )
    })

    return (
        <Container fluid>
            <Row id={'subCategoryMainRow'}>
                {cardsList}
            </Row>
        </Container>
    )
}

export default SubCategory;