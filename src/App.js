import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import {Route, Routes, Link} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import DotaOffer from "./components/GameOffer/DotaOffer";
import HotsOffer from "./components/GameOffer/HotsOffer";
import LolOffer from "./components/GameOffer/LolOffer";
import Layout from "./components/Layout";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'dota2'} element={<DotaOffer/>}/>
                    <Route path={'hots'} element={<HotsOffer/>}/>
                    <Route path={'lol'} element={<LolOffer/>}/>
                </Route>
            </Routes>
            {/*<Canvas name={'button'} placement={'end'} key={'idx'}/>*/}
        </>

    );
}

export default App;
