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
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {app} from "../Authorization/firebase";
import CartGoodsModal from "../Cart/CartGoodsModal/CartGoodsModal";

const Navigation = (props) => {

    const navbarLinks = useSelector(state => state.navbar.navbarLinks)
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(null);
    const [goodsModal, setGoodsModal] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth >= 767);
    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let navbarLinksArr = navbarLinks.map(link => (
        <NavLink onClick={() => {
            handleClose();
            closeModal()
        }} to={link.to} className={'navbarLink'} id={props.linkId}>{link.linkName}</NavLink>
    ))

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 767) {
                handleClose();
                closeModal();
            }
            if (window.innerWidth >= 768) {
                if (!windowWidth) {
                    setWindowWidth(true);
                }
            } else {
                setWindowWidth(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    useEffect(() => {
        const auth = getAuth(app);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Navbar key={'sm'} bg="light" expand={'md'} className="mb-3">
                <Container fluid id={'navbarContainer'}>

                    <Navbar.Brand>
                        <img className={'logo'} src={'https://upload.wikimedia.org/wikipedia/ru/0/02/' +
                            'Heroes_of_the_Storm_BlizzHeroes_2017_logo.png?20230127151006'}
                             alt={'Heroes of the Storm'}/>
                    </Navbar.Brand>
                    <div className={'navbarIconsContainer'}>
                    {windowWidth ? null :
                        <div>
                            <Button
                                onClick={() => setGoodsModal(true)}
                                id={'cartButton'}
                            >
                                <img className={'navbarIcons'} src={'/icons/cartIcon.png'} alt={'Cart'}/>
                            </Button>
                            <NavLink to={"profile"}>
                                <img className={'navbarIcons'} src={'/icons/profileIcon.png'} alt={'Profile'}/>
                            </NavLink>
                        </div>
                    }
                    <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${'md'}`}
                                   id={'navbarToggle'}/>
                    </div>
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
                    {user ?
                        <>
                            {windowWidth ?
                                <>
                                    <Button
                                        onClick={() => setGoodsModal(true)}
                                        className={'navbarLink'}
                                        id={'cartButton'}
                                    >
                                        Cart

                                    </Button>
                                    <NavLink to={"profile"} className={'navbarLink'}>
                                        Profile
                                    </NavLink>
                                </>
                                :
                                null
                            }
                        </>
                        :
                        <>
                            <NavLink to={"sign"} className={'navbarLink'} id={'signLink'}>Sign
                                in</NavLink>
                            <Button id={'loginButton'} onClick={showModal}>Log in</Button>
                        </>
                    }

                </Container>
            </Navbar>
            <CartGoodsModal show={goodsModal} onHide={() => setGoodsModal(false)}/>
            <LoginModal modal={modal} closeModal={closeModal}/>
        </>

    );
}

export default Navigation