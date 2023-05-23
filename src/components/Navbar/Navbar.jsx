import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "react-bootstrap";
import './Navbar.css'

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
                        <Nav.Link href="/main" className={'navbar-link'}>Main</Nav.Link>
                        <Nav.Link href="#action2" className={'navbar-link'}>Boosters</Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" className={'navbar-dropdown'}>Heroes of the
                                Storm</NavDropdown.Item>
                            <NavDropdown.Item href="/dota2" className={'navbar-dropdown'}>
                                Dota 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5" className={'navbar-dropdown'}>
                                League of Legends
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action6" className={'navbar-link'}>
                            Help
                        </Nav.Link>
                    </Nav>
                    <Nav.Link href="#action7" className={'navbar-link'}>Sign up</Nav.Link>
                    <Button variant="outline-success" id={'login-button'}>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navigation