import React from 'react';
import ReactDOM from 'react-dom/client';
import './../src/index.css';
import App from './../src/App';
import reportWebVitals from './../src/reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';
import {addCard} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

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

reportWebVitals();
