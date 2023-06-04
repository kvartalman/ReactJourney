import {combineReducers, legacy_createStore as createStore} from "redux";
import homePageReducer from "./homePageReducer";
import offerPagesCardsReducer from "./offerPagesCardsReducer";
import adminPanelFormsReducer from "./adminPanelFormsReducer";
import navbarReducer from "./navbarReducer";

let reducersBatch = combineReducers({
    homePage: homePageReducer,
    gameOfferPages: offerPagesCardsReducer,
    adminPanel: adminPanelFormsReducer,
    navbarLinks: navbarReducer
});

let store = createStore(reducersBatch);

export default store