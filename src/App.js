import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import Layout from "./components/Layout";
import GameOffer from "./components/GameOffer/GameOffer";
import AdminPanel from "./components/Admin/AdminPanel";


function App(props) {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout
                    navbarLinks={props.state.navbarLinks}
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
                        <AdminPanel
                            linksList={props.state.adminPanel.linksList}
                            cardsData={props.state.homePage.cardsData}
                            offerPageForms={props.state.gameOfferPages.offerPageCardsForms}
                            homePageForms={props.state.homePage.homePageCardsForms}
                            dispatch={props.dispatch}
                            gameOfferPages={Object.keys(props.state.gameOfferPages.pagesData)}
                        />}/>
                </Route>
            </Routes>
        </>

    );
}

export default App;
