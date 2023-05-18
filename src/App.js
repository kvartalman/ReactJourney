import './App.css';
import React from 'react';
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import Cards from "./components/Cards";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";


function App() {
    return (
        <Container fluid>
            <header>
                <Navbar/>
                <Carousel/>

            </header>
            <body>
                <Advantages/>
                <Cards />
                <Steps/>
            </body>
            <footer id={'foot'}>
                <Footer/>
            </footer>
        </Container>
    );
}

export default App;
