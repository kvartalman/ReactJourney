import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import AdminPanelContainer from "./components/Admin/AdminPanelContainer";
import CategoriesContainer from "./components/Categories/CategoriesContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import GameOfferContainer from "./components/GameOffer/GameOfferContainer";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout
                />}>
                    <Route index element={<HomepageContainer
                    />}/>
                    <Route path={'categories'} element={<CategoriesContainer
                    />}/>
                    <Route path={'dota2'} element={<GameOfferContainer
                        page={'dota2'}
                    />}/>
                    <Route path={'lol'} element={<GameOfferContainer
                        page={'lol'}
                    />}/>
                    <Route path={'hots'} element={<GameOfferContainer
                        page={'hots'}
                    />}/>
                    <Route path={'admin-panel'} element={
                        <AdminPanelContainer
                        />}/>
                </Route>
            </Routes>
        </>

    );
}

export default App;
