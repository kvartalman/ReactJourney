import {combineReducers, legacy_createStore as createStore} from "redux";
import homePageSlice from "./slices/homePageSlice";
import offerPageSlice from "./slices/offerPageSlice";
import categoriesSlice from "./slices/categoriesSlice";
import adminPanelSlice from "./slices/adminPanelSlices/adminPanelEditorSlice";
import footerSlice from "./slices/footerSlice";
import navbarSlice from "./slices/navbarSlice";
import notFoundSlice from "./slices/notFoundSlice";
import productPageSlice from "./slices/productPageSlice";
import adminPanelNewContentSlice from "./slices/adminPanelSlices/adminPanelNewContentSlice";
import adminPanelNewProductSlice from "./slices/adminPanelSlices/adminPanelNewProductSlice";
import gameProductsSlice from "./slices/gameProductsSlice";

let reducersBatch = combineReducers({
    homePage: homePageSlice,
    gameOfferPages: offerPageSlice,
    adminPanel: adminPanelSlice,
    adminPanelNewContent: adminPanelNewContentSlice,
    adminPanelNewProduct: adminPanelNewProductSlice,
    navbar: navbarSlice,
    footer: footerSlice,
    categories: categoriesSlice,
    notFound: notFoundSlice,
    productPage: productPageSlice,
    gameProducts: gameProductsSlice
});

let store = createStore(reducersBatch);

export default store