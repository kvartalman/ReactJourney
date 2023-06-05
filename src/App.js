import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import AdminPanelContainer from "./components/Admin/AdminPanelContainer";
import CategoriesContainer from "./components/Categories/CategoriesContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import GameOfferContainer from "./components/GameOffer/GameOfferContainer";


function App(props) {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout
                    store={props.store}
                />}>
                    <Route index element={<HomepageContainer
                        store={props.store}
                    />}/>
                    <Route path={'categories'} element={<CategoriesContainer
                        store={props.store}
                    />}/>
                    <Route path={'dota2'} element={<GameOfferContainer
                        store={props.store}
                        page={'dota2'}
                    />}/>
                    <Route path={'lol'} element={<GameOfferContainer
                        store={props.store}
                        page={'lol'}
                    />}/>
                    <Route path={'hots'} element={<GameOfferContainer
                        store={props.store}
                        page={'hots'}
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
