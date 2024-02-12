import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './Layout.css';
import Container from "react-bootstrap/Container";


const Layout = () => {



    return (
            <Container fluid id={'layoutContainer'}>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <div id={'layoutMainContentContainer'}>
                <Outlet/>
                    </div>
                </main>
                <footer id={'layoutFooter'}>
                    <Footer/>
                </footer>
            </Container>
    )
}

export default Layout