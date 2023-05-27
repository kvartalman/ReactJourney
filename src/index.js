import React from 'react';
import ReactDOM from 'react-dom/client';
import './../src/index.css';
import App from './../src/App';
import reportWebVitals from './../src/reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import GameOfferCard from "./components/GameOffer/OfferContent/GameOfferCard";

const root = ReactDOM.createRoot(document.getElementById('root'));

/* HomePageDATA */

/* Start of Carousel Data */

let carouselData = [
    {
        srcImg: "./carousel/carousel1.jpg",
        altImg: "Offer 1",
        text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
    },
    {
        srcImg: "./carousel/carousel2.jpg",
        altImg: "Offer 2",
        text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
    },
    {
        srcImg: "./carousel/carousel3.jpg",
        altImg: "Offer 3",
        text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
    }
]

/* End of Carousel Data */

/* Start of Advantages Data */

let advData = [
    {
        img: 'https://p16-va-tiktok.ibyteimg.com/' +
            'img/musically-maliva-obj/5a0bf3135d88232251753017dd55093e~c5_720x720.jpeg',
        title: 'PROFESSIONAL BOOSTERS',
        text: 'Our team consists of true professionals in their field. ' +
            'We are very attentive to the issue of cooperation with boosters.'
    },
    {
        img: 'https://pic.onlinewebfonts.com/svg/img_85420.svg',
        title: 'POLITE SUPPORT SERVICE',
        text: 'We deeply respect our customers and therefore provide ' +
            'polite and positive feedback in the shortest possible time.'
    },
    {
        img: 'https://pic.onlinewebfonts.com/svg/img_440470.svg',
        title: 'FAVORABLE PRICES',
        text: "Our goal is to provide the highest quality service " +
            "at the lowest possible price. We don't overcharge."
    }
]

const advImgTab = <img src={'./backgrounds/whychooseus.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>

/* End of Advantages Data */

/* Start of Main Cards Data (includes buttons) */

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

let cardsData = [
    {
        tagId: 'dotaCard', title: 'Dota 2', text: 'We suggest you to order a Dota 2 boost',
        button: dotaButtonData
    },
    {
        tagId: 'csCard', title: 'CS:GO', text: 'We suggest you to order a CS:GO boost',
        button: csButtonData
    },
    {
        tagId: 'hotsCard', title: 'Heroes of the Storm', text: 'We suggest you to order a HotS boost',
        button: hotsButtonData
    },
    {
        tagId: 'warfaceCard', title: 'Warface', text: 'We suggest you to order a Warface boost',
        button: warfaceButtonData
    },
    {
        tagId: 'lolCard', title: 'League of Legends', text: 'We suggest you to order a LoL boost',
        button: lolButtonData
    },
    {
        tagId: 'pubgCard', title: 'PUBG', text: 'We suggest you to order a PUBG boost',
        button: pubgButtonData
    },
]

const cardsImgTab = <img src={'./backgrounds/bestoffers.png'} alt={'BEST OFFERS'} className={'img-fluid imgTab'}/>

/* End of Main Cards Data */

/* Start of Steps Data */

let stepsElemsData = [
    {
        xmlns: "http://www.w3.org/2000/svg",
        class: 'bi bi-1-circle icon-color',
        path: [<path
            d={"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7." +
                "971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"}/>],
        text: "Create an account. It's very easy thanks to a simplified menu and detailed instructions!"
    },
    {
        xmlns: "http://www.w3.org/2000/svg",
        class: 'bi bi-2-circle icon-color',
        path: [<path
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v
            -.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287
            2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705
            0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>],
        text: 'Choose the offers you like and add them to your cart!'
    },
    {
        xmlns: "http://www.w3.org/2000/svg",
        class: 'bi bi-3-circle icon-color',
        path: [
            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79
            0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137
            -.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967
            -2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318
            -1.541-1.318Z"/>,
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>],
        text: "Pay for your purchases and wait a bit, our manager will contact you soon!"
    }
]

const stepsImgTab = <img src={'./backgrounds/howtostart.png'} alt={'BEST OFFERS'} className={'' +
    'img-fluid imgTab'}/>

/* End of Steps Data */


/* Start of GameOfferDATA */

let gameOffer = [
    {
        mainTitle: 'Dota Offer',
        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
            'I think, size of text should not be too high or too little. Better to find something people ' +
            'call "golden mean". Anyway, we will see, how it goes.',
        cardsTitle: 'Offers of the week',
        offerCardsData: [
            {title: '3000 MMR Boost', text: '35$'},
            {title: 'Low priority', text: '5$'},
            {title: 'Bladeform legacy', text: '25$'},
            {title: '+200 MMR', text: '10$'}
        ]
    },
    {
        mainTitle: 'League of Legends Offer',
        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
            'I think, size of text should not be too high or too little. Better to find something people ' +
            'call "golden mean". Anyway, we will see, how it goes.',
        cardsTitle: 'Offers of the week',
        offerCardsData: [
            {title: '3000 MMR Boost', text: '35$'},
            {title: 'Low priority', text: '5$'},
            {title: 'Bladeform legacy', text: '25$'},
            {title: '+300 MMR', text: '10$'}
        ]
    },
    {
        mainTitle: 'Heroes of the Storm Offer',
        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
            'I think, size of text should not be too high or too little. Better to find something people ' +
            'call "golden mean". Anyway, we will see, how it goes.',
        cardsTitle: 'Offers of the week',
        offerCardsData: [
            {title: '3000 MMR Boost', text: '35$'},
            {title: 'Low priority', text: '5$'},
            {title: 'Bladeform legacy', text: '25$'},
            {title: '+400 MMR', text: '10$'}
        ]
    }
]

/* End of GameOfferDATA */

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App
                gameOffer={gameOffer}
                carouselData={carouselData}
                advData={advData}
                advImgTab={advImgTab}
                cardsData={cardsData}
                cardsImgTab={cardsImgTab}
                stepsElemsData={stepsElemsData}
                stepsImgTab={stepsImgTab}
            />
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
