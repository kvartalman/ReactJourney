import {combineReducers, legacy_createStore as createStore} from "redux";
import homePageSlice from "./slices/homePageSlice";
import offerPageSlice from "./slices/offerPageSlice";
import categoriesSlice from "./slices/categoriesSlice";
import adminPanelSlice from "./slices/adminPanelSlice";
import footerSlice from "./slices/footerSlice";
import navbarSlice from "./slices/navbarSlice";
import notFoundSlice from "./slices/notFoundSlice";
import productPageSlice from "./slices/productPageSlice";

let reducersBatch = combineReducers({
    homePage: homePageSlice,
    gameOfferPages: offerPageSlice,
    adminPanel: adminPanelSlice,
    navbar: navbarSlice,
    footer: footerSlice,
    categories: categoriesSlice,
    notFound: notFoundSlice,
    productPage: productPageSlice
});

let store = createStore(reducersBatch);

export default store