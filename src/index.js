import React from 'react';
import ReactDOM from 'react-dom/client';
import './../src/index.css';
import App from './../src/App';
import reportWebVitals from './../src/reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let csButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'Skins'},
    {link: '#', type: 'button', class: 'order-button', name: 'RMM'},
    {link: '#', type: 'button', class: 'order-button', name: 'FACEIT'},
    {link: '#', type: 'button', class: 'order-button', name: 'Lessons'}
]

let dotaButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'Skins'},
    {link: '#', type: 'button', class: 'order-button', name: 'MMR'},
    {link: '#', type: 'button', class: 'order-button', name: 'LOW PRIORITY'},
]

let hotsButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'MMR'},
    {link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
    {link: '#', type: 'button', class: 'order-button', name: 'Lessons'},
]

let lolButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'Elo'},
    {link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
    {link: '#', type: 'button', class: 'order-button', name: 'Coaching'},
]

let pubgButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'Get BP'},
    {link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
    {link: '#', type: 'button', class: 'order-button', name: 'Party'},
]

let warfaceButtonData = [
    {link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
    {link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
    {link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
    {link: '#', type: 'button', class: 'order-button', name: 'Currency'},
]

let CardsData = [
    {tagId: 'dotaCard', title: 'Dota 2', text: 'We suggest you to order a Dota 2 boost',
        button: dotaButtonData},
    {tagId: 'csCard', title: 'CS:GO', text: 'We suggest you to order a CS:GO boost',
        button: csButtonData},
    {tagId: 'hotsCard', title: 'Heroes of the Storm', text: 'We suggest you to order a HotS boost',
        button: hotsButtonData},
    {tagId: 'warfaceCard', title: 'Warface', text: 'We suggest you to order a Warface boost',
        button: warfaceButtonData},
    {tagId: 'lolCard', title: 'League of Legends', text: 'We suggest you to order a LoL boost',
        button: lolButtonData},
    {tagId: 'pubgCard', title: 'PUBG', text: 'We suggest you to order a PUBG boost',
        button: pubgButtonData},
]

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App
                CardsData={CardsData}
            />
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
