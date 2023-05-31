import React from 'react';
import ReactDOM from 'react-dom/client';
import './../src/index.css';
import App from './../src/App';
import {BrowserRouter} from "react-router-dom";
import {addCard} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addCard={addCard}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}

export default reRender