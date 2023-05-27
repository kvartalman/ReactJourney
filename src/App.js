import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, Link} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import DotaOffer from "./components/GameOffer/DotaOffer";
import HotsOffer from "./components/GameOffer/HotsOffer";
import LolOffer from "./components/GameOffer/LolOffer";
import Layout from "./components/Layout";


function App(props) {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage
                        carouselData={props.carouselData}
                        advData = {props.advData}
                        advImgTab={props.advImgTab}
                        cardsData={props.cardsData}
                        cardsImgTab={props.cardsImgTab}
                        stepsElemsData={props.stepsElemsData}
                        stepsImgTab={props.stepsImgTab}
                    />}/>
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
