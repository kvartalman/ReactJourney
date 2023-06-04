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
    const [showCtg, setShowCtg] = useState(false);
    const closeCtgCanvas = () => setShowCtg(false);
    const showCtgCanvas = () => setShowCtg(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navbarLinksArr = props.navbarLinks.map(link => (
        <NavLink onClick={handleClose} to={link.to} className={'navbarLink'} id={props.linkId}>{link.linkName}</NavLink>
    ))

    let dropDownLinks = props.dropdownLinks.map(link => (
        <NavLink onClick={() => {setShow(false)}} to={link[0]} className={'dropdown-item'}>
            {link[1]}
        </NavLink>
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
                    <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${'md'}`} id={'navbarToggle'}/>
                    <Navbar.Offcanvas
                        show={show}
                        onHide={handleClose}
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="top"
                        className={'navbarOffCanvas'}
                    >
                        <Offcanvas.Header closeButton>
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
                                    {dropDownLinks}
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