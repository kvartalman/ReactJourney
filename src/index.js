import store from "./store/reduxStore";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {CartProvider} from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <CartProvider>
                <Provider store={store}>
                    <App
                    />
                </Provider>
            </CartProvider>
        </React.StrictMode>
    </BrowserRouter>
);




