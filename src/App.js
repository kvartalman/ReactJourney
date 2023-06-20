import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import AdminPanel from "./components/Admin/AdminPanel";
import Homepage from "./components/Homepage/Homepage";
import Categories from "./components/Categories/Categories";
import GameOffer from "./components/GameOffer/GameOffer";
import NotFound from "./components/NotFound/NotFound";
import SignPage from "./components/Authorization/SignPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout
                />}>
                    <Route index element={<Homepage />}/>
                    <Route path={'categories'} element={<Categories />}/>
                    <Route path={'dota2'} element={<GameOffer
                        page={'dota2'}
                    />}/>
                    <Route path={'lol'} element={<GameOffer
                        page={'lol'}
                    />}/>
                    <Route path={'hots'} element={<GameOffer
                        page={'hots'}
                    />}/>
                    <Route path={'admin-panel'} element={
                        <AdminPanel />}/>
                </Route>
                <Route path={'sign'} element={<SignPage />} />
                <Route path={'*'} element={<NotFound />}/>
            </Routes>
        </>

    );
}

export default App;
