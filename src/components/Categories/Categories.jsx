import Container from "react-bootstrap/Container";
import './Categories.css'
import {Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const Categories = (props) => {

    const ctgLinks = useSelector(state => state.categories.categoriesLinks)

    const categoriesLinks = ctgLinks.map(link => (
        <span style={{
            background: `url(${link.bg})`
        }} className={'ctgGame'}>
                <NavLink className={'ctgLink'} to={link.to}>
                    {link.name}
                </NavLink>
            </span>
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