import {Outlet} from "react-router-dom";
import React from "react";
import FooterContainer from "./Footer/FooterContainer";
import NavbarContainer from "./Navbar/NavbarContainer";

const Layout = () => {

    return (
        <>
            <header>
                <NavbarContainer
                />
            </header>
            <body>
            <Outlet/>
            </body>
            <footer>
                <FooterContainer
                />
            </footer>
        </>
    )
}

export default Layout