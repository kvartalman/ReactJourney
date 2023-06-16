import {combineReducers, legacy_createStore as createStore} from "redux";
import offerPagesReducer from "./offerPagesReducer";
import adminPanelFormsReducer from "./adminPanelFormsReducer";
import navbarReducer from "./navbarReducer";
import footerReducer from "./footerReducer";
import categoriesReducer from "./categoriesReducer";
import notFoundReducer from "./notFoundReducer";
import homePageSlice from "../store/slices/homePageSlice";

let reducersBatch = combineReducers({
    homePage: homePageSlice,
    gameOfferPages: offerPagesReducer,
    adminPanel: adminPanelFormsReducer,
    navbar: navbarReducer,
    footer: footerReducer,
    categories: categoriesReducer,
    notFound: notFoundReducer
});

let store = createStore(reducersBatch);

export default store