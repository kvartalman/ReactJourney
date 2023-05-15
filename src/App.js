import './App.css';
import React from 'react';
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import Cards from "./components/Cards";
import Advantages from "./components/Advantages";

function App() {
    return (
        <Container fluid>
            <header>
                <Navbar/>
                <Carousel/>
            </header>
            <body>
                <Advantages/>
                <Cards/>
                <Profile/>
            </body>
        </Container>
    );
}

export default App;
