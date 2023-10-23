import React from "react";
import {useSelector} from "react-redux";
import {Card, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import './SubCategory.css';

const SubCategory = (props) => {

    const cardsSelector = useSelector(state => state.productPage.productData[props.game].subCategories[props.product].cards)

    const cardsList = cardsSelector.map(card => {
        return (
            <Card
                className={'subCategoryCard'}
                style={{background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${card.src})`}}
            >
                <NavLink to={card.link}>
                <Card.Body className={'subCategoryCardBody'}>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
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