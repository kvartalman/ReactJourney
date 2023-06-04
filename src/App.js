import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import Layout from "./components/Layout";
import GameOffer from "./components/GameOffer/GameOffer";
import AdminPanelContainer from "./components/Admin/AdminPanelContainer";


function App(props) {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout
                    store={props.store}
                />}>
                    <Route index element={<HomePage
                        carouselData={props.state.homePage.carouselData}
                        advData={props.state.homePage.advData}
                        cardsData={props.state.homePage.cardsData}
                        stepsElemsData={props.state.homePage.stepsElemsData}
                    />}/>
                    <Route path={'dota2'} element={<GameOffer
                        gameOffer={props.state.gameOfferPages.pagesData.dota2}
                        canvasMenuData={props.state.gameOfferPages.canvasMenuData}
                    />}/>
                    <Route path={'lol'} element={<GameOffer
                        gameOffer={props.state.gameOfferPages.pagesData.lol}
                        canvasMenuData={props.state.gameOfferPages.canvasMenuData}
                    />}/>
                    <Route path={'hots'} element={<GameOffer
                        gameOffer={props.state.gameOfferPages.pagesData.hots}
                        canvasMenuData={props.state.gameOfferPages.canvasMenuData}
                    />}/>
                    <Route path={'adminPanel'} element={
                        <AdminPanelContainer
                            store={props.store}
                        />}/>
                </Route>
            </Routes>
        </>

    );
}

export default App;
