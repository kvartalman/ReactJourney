import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, Link} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import Layout from "./components/Layout";
import GameOffer from "./components/GameOffer/GameOffer";


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
                    <Route path={'dota2'} element={<GameOffer
                        num={0} gameOffer={props.gameOffer}
                    />}/>
                    <Route path={'lol'} element={<GameOffer
                        num={1} gameOffer={props.gameOffer}
                    />}/>
                    <Route path={'hots'} element={<GameOffer
                        num={2} gameOffer={props.gameOffer}
                    />}/>
                </Route>
            </Routes>
            {/*<Canvas name={'button'} placement={'end'} key={'idx'}/>*/}
        </>

    );
}

export default App;
