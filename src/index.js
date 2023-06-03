import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}



reRender(store.getState());
store.subscribe(() => {
    let state = store.getState();
    reRender(state)
});
