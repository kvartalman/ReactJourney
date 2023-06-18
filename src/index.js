import store from "./store/reduxStore";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                <App
                />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );




