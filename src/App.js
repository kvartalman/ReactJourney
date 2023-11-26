import './App.css';
import React, {lazy, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const ProductPage = lazy(() => import("./components/ProductPage/ProductPage"));
const SubCategory = lazy(() => import("./components/ProductPage/SubCategory/SubCategory"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Layout = lazy(() => import("./components/Layout"));
const AdminPanel = lazy(() => import("./components/Admin/AdminPanel"));
const Homepage = lazy(() => import("./components/Homepage/Homepage"));
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
                        <Route path={'categories/:name'} element={<GameOffer/>}/>
                        <Route path={'categories/:name/:sub'} element={<SubCategory/>}/>
                        <Route path={'/categories/:name/:sub/:product'} element={<ProductPage />}/>
                        <Route path={'cart'} element={<Cart/>}/>
                        <Route path={'profile'} element={<UserProfile/>}/>
                    </Route>
                    <Route exact path={'admin-panel'} element={<AdminPanel/>}>
                    </Route>
                    <Route path={'sign'} element={<SignPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </>

    );
}

export default App;
