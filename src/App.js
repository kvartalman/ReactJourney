import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import {Route, Routes, Link} from "react-router-dom";
import HomePage from "./components/Main/Homepage";

function App() {
    return (

        <Container fluid>
            <header>
                <Navbar/>
            </header>
            <body>
            <Routes>
                <Route path={'/main'} element={<HomePage/>}/>
                {/*<GameOffer/>*/}
            </Routes>
            {/*<Canvas name={'button'} placement={'end'} key={'idx'}/>*/}
            </body>
            <footer>
                <Footer/>
            </footer>
        </Container>

    );
}

export default App;
