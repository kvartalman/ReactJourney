import React from "react";
import {useSelector} from "react-redux";
import {Card, Row} from "react-bootstrap";
import {NavLink, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import './SubCategory.css';

const SubCategory = (props) => {

    const params = useParams();

    const subCtgSelector = useSelector(state => state.gameProducts[params.name].subCategories)


    const cardsList =
        () => {

        for (let i = 0; i < subCtgSelector.length; i++) {
            const subCtgName = require('change-case').sentenceCase(params.sub)
            if (subCtgSelector[i].name === subCtgName) {
                return (
                    subCtgSelector[i].products.map((product, index) => (
                        <Card
                            className={'subCategoryCard'}
                            style={{background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), 
            url(${product.img})`}}
                        >
                            {/*/categories/${params.name}/${params.sub}/${require('change-case').paramCase(subCtgSelector[i][product])}*/}
                            <NavLink
                                to={`/categories/${params.name}/${params.sub}/${require('change-case').paramCase((product.header))}`}>
                                <Card.Body className={'subCategoryCardBody'}>
                                    <Card.Title>{product.header}</Card.Title>
                                </Card.Body>
                            </NavLink>
                        </Card>
                    ))
                )
            }
        }
        }


    return (
        <Container fluid>
            <Row id={'subCategoryMainRow'}>
                {cardsList()}
            </Row>
        </Container>
    )
}

export default SubCategory;