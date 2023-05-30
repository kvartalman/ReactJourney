import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "react-bootstrap";
import './Navbar.css'
import {NavLink} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = (props) => {

    const [show, setShow] = useState(false);

    let navbarLinksArr = props.navbarLinks.map(link => (
        <NavLink onClick={() => {setShow(false)}} to={link.to} className={'navbarLink'} id={props.linkId}>{link.linkName}</NavLink>
    ))

    return (
        <>
            <Navbar key={'sm'} bg="light" expand={'md'} className="mb-3">
                <Container fluid id={'navbarContainer'}>
                    <Navbar.Brand>
                        <img className={'logo'} src={'https://upload.wikimedia.org/wikipedia/ru/0/02/' +
                            'Heroes_of_the_Storm_BlizzHeroes_2017_logo.png?20230127151006'}
                             alt={'Heroes of the Storm'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => {setShow(true)}} aria-controls={`offcanvasNavbar-expand-${'md'}`} id={'navbarToggle'}/>
                    <Navbar.Offcanvas
                        show={show}
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="top"
                        className={'navbarOffCanvas'}
                    >
                        <Offcanvas.Header closeButton onClick={() => {setShow(false)}}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {navbarLinksArr}
                                <NavDropdown
                                    title="Categories"
                                    id={`offcanvasNavbarDropdown-expand-${'md'}`}
                                    className={'navbarLink navbarCtg'}
                                >
                                    <NavLink onClick={() => {setShow(false)}} to='dota2' className={'dropdown-item'}>
                                        Dota 2
                                    </NavLink>
                                    <NavLink onClick={() => {setShow(false)}} to='lol' className={'dropdown-item'}>
                                        League of Legends
                                    </NavLink>
                                    <NavLink onClick={() => {setShow(false)}} to='hots' className={'dropdown-item'}>
                                        Heroes of the Storm
                                    </NavLink>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <NavLink to={"#action2"} className={'navbarLink'} id={'signLink'}>Sign
                        in</NavLink>
                    <Button id={'loginButton'}>Log in</Button>
                </Container>
            </Navbar>
        </>

    );
}

export default Navigation