import './App.css';
import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";

function App() {
    return (
        <Container fluid>
            <Row>
                <Navbar/>
            </Row>
            <Row>
                    <Header/>
                    <Profile/>

            </Row>
        </Container>
    );
}

export default App;
