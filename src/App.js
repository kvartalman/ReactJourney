import './App.css';
import React, {lazy, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const ProductPage = lazy(() => import("./components/ProductPage/ProductPage"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Layout = lazy(() => import("./components/Layout"));
const AdminPanel = lazy(() => import("./components/Admin/AdminPanel"));
const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const Categories = lazy(() => import("./components/Categories/Categories"));
const GameOffer = lazy(() => import("./components/GameOffer/GameOffer"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const SignPage = lazy(() => import("./components/Authorization/SignPage/SignPage"));
const UserProfile = lazy(() => import("./components/UserProfile/UserProfile"));

function App() {
    return (
        <>
            <Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route exact path={'/'} element={<Layout
                    />}>
                        <Route index element={<Homepage/>}/>
                        <Route path={'categories'} element={<Categories/>} />
                        <Route path={'categories/:name'} element={<GameOffer/>} />
                        <Route path={'/categories/:name/:product'} element={<ProductPage/>}/>
                        <Route path={'admin-panel'} element={<AdminPanel/>}/>
                        <Route path={'cart'} element={<Cart/>}/>
                        <Route path={'profile'} element={<UserProfile/>}/>
                    </Route>
                    <Route path={'sign'} element={<SignPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </>

    );
}

export default App;
