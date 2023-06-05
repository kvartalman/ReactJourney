import {combineReducers, legacy_createStore as createStore} from "redux";
import homePageReducer from "./homePageReducer";
import offerPagesReducer from "./offerPagesReducer";
import adminPanelFormsReducer from "./adminPanelFormsReducer";
import navbarReducer from "./navbarReducer";
import footerReducer from "./footerReducer";
import categoriesReducer from "./categoriesReducer";

let reducersBatch = combineReducers({
    homePage: homePageReducer,
    gameOfferPages: offerPagesReducer,
    adminPanel: adminPanelFormsReducer,
    navbar: navbarReducer,
    footer: footerReducer,
    categories: categoriesReducer
});

let store = createStore(reducersBatch);

window.store = store;

export default store