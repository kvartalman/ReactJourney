import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
            <Outlet/>
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout