import {Link, Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import React from "react";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar/>
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