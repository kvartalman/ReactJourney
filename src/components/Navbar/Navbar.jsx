import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import './Navbar.css'
import {NavLink} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector} from "react-redux";
import LoginModal from "../Authorization/LoginModal";
import Modal from "react-bootstrap/Modal";

const Navigation = (props) => {

    const navbarLinks = useSelector(state => state.navbar.navbarLinks)

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navbarLinksArr = navbarLinks.map(link => (
        <NavLink onClick={() => {handleClose(); closeModal()}} to={link.to} className={'navbarLink'} id={props.linkId}>{link.linkName}</NavLink>
    ))

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 767) {
                handleClose();
                closeModal();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

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
                            <Nav className="flex-grow-1 pe-3">
                                {navbarLinksArr}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <NavLink to={"sign"} className={'navbarLink'} id={'signLink'}>Sign
                        in</NavLink>
                    <Button id={'loginButton'} onClick={showModal}>Log in</Button>
                </Container>
            </Navbar>
            <LoginModal modal={modal} closeModal={closeModal} />
        </>

    );
}

export default Navigation