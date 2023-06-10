import {combineReducers, legacy_createStore as createStore} from "redux";
import homePageReducer from "./homePageReducer";
import offerPagesReducer from "./offerPagesReducer";
import adminPanelFormsReducer from "./adminPanelFormsReducer";
import navbarReducer from "./navbarReducer";
import footerReducer from "./footerReducer";
import categoriesReducer from "./categoriesReducer";
import notFoundReducer from "./notFoundReducer";

let reducersBatch = combineReducers({
    homePage: homePageReducer,
    gameOfferPages: offerPagesReducer,
    adminPanel: adminPanelFormsReducer,
    navbar: navbarReducer,
    footer: footerReducer,
    categories: categoriesReducer,
    notFound: notFoundReducer
});

let store = createStore(reducersBatch);

export default store