import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import React from "react";
import Footer from "./Footer/Footer";

const Layout = (props) => {
    return (
        <>
            <header>
                <Navbar
                    navbarLinks={props.navbarLinks}
                />
            </header>
            <body>
            <Outlet/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout