import './App.css';
import React from 'react';
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Steps from "./components/Steps/Steps";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import Cards from "./components/Cards/Cards";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";


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
