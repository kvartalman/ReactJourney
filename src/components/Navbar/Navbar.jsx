import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "react-bootstrap";
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (

        <Navbar bg="warning" expand="lg" id={'navigation-bar'} className={''}>
            <Container fluid>
                <Navbar.Brand><img className={'logo'} src={'https://upload.wikimedia.org/wikipedia/ru/0/02/' +
                    'Heroes_of_the_Storm_BlizzHeroes_2017_logo.png?20230127151006'}
                                   alt={'Heroes of the Storm'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" id={'scroll-button'} className={''}/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink to="/" className={'navbar-link'}>Main</NavLink>
                        <NavLink to="/" className={'navbar-link'}>Boosters</NavLink>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavLink to="hots" className={'navbar-dropdown'}>Heroes of the
                                Storm</NavLink>
                            <NavLink to="dota2" className={'navbar-dropdown'}>
                                Dota 2
                            </NavLink>
                            <NavLink to="lol" className={'navbar-dropdown'}>
                                League of Legends
                            </NavLink>
                        </NavDropdown>
                        <NavLink to="#action6" className={'navbar-link'}>
                            Help
                        </NavLink>
                    </Nav>
                    <NavLink to="#action7" className={'navbar-link'}>Sign up</NavLink>
                    <Button variant="outline-success" id={'login-button'}>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigation