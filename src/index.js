import state, {addButton, addCard, subscribe, updateAdminPanelForms} from "./redux/state";
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
                    adminPanelFormsFunc={updateAdminPanelForms}
                    addButton={addButton}
                    state={state}
                    addCard={addCard}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}


subscribe(reRender);
reRender(state);

