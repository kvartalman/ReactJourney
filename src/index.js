import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}



reRender();
store.subscribe(reRender);
