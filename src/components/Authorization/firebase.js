import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD2EqpSDXMiZW4-xhEbHFwpK_5mWbXrOls",
    authDomain: "webshopauth-4333d.firebaseapp.com",
    projectId: "webshopauth-4333d",
    storageBucket: "webshopauth-4333d.appspot.com",
    messagingSenderId: "514045599576",
    appId: "1:514045599576:web:a9ee40604c6615649acf2d",
    measurementId: "G-M353KNNGR9"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);