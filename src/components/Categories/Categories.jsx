import Container from "react-bootstrap/Container";
import './Categories.css'
import {Row} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import Category from "./Category";

const Categories = () => {

    const ctgLinks = useSelector(state => state.categories.categoriesLinks)

    const categoriesLinks = ctgLinks.map(link => (
        <Category bg={link.bg} name={link.name} to={link.to} video={link.video} />
    ))

            return (
        <Container fluid id={'ctgContainer'}>
            <Row md={2}>
                {categoriesLinks}
            </Row>
        </Container>
            )

}

export default Categories