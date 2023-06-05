import Container from "react-bootstrap/Container";
import './Categories.css'
import {Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const Categories = (props) => {

    const categoriesLinks = props.categoriesLinks.map(link => (
        <span style={{
            background: `linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) ), 
            url(${link.bg})`
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