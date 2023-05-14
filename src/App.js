import './App.css';
import React from 'react';
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import Cards from "./components/Cards";

function App() {
    return (
        <Container fluid>
            <Row>
                <Navbar/>
            </Row>
            <Row>
                <Carousel/>
            </Row>
            <Row id={'cards-row'}>
                <h1 id={'cards-header'}>Most valuable</h1>
                <Cards/>
            </Row>
            <Row>
                <Profile/>
            </Row>
        </Container>
    );
}

export default App;
