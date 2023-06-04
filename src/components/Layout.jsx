import {Outlet} from "react-router-dom";
import React from "react";
import FooterContainer from "./Footer/FooterContainer";
import NavbarContainer from "./Navbar/NavbarContainer";

const Layout = (props) => {

    let state = props.store.getState();

    return (
        <>
            <header>
                <NavbarContainer
                    navbar={state.navbar}
                />
            </header>
            <body>
            <Outlet/>
            </body>
            <footer>
                <FooterContainer
                    footer={state.footer}
                />
            </footer>
        </>
    )
}

export default Layout