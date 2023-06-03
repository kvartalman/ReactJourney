import React from "react";

const homePageAddCard = 'HOMEPAGE-ADD-CARD';
const homePageAddButton = 'HOMEPAGE-ADD-BUTTON';
const adminUpdateForms = 'UPDATE-ADMIN-EDITOR-FORMS';
const offerPageAddCard = 'OFFERPAGE-ADD-CARD'

let store = {
    _state: {
        adminPanelForms: {
            homePageCards: {
                cardIdForm: '',
                cardTitleForm: '',
                cardTextForm: '',
                buttonNameForm: ''
            },
            offerPageCards: {
                cardTitleForm: '',
                cardTextForm: ''
            }
        },
        linksList: [
            '/', '/dota2', '/lol', '/hots', '/adminPanel'
        ],
        navbarLinks: [
            {id: 0, to: '/', linkName: 'Main', linkId: ''},
            {id: 1, to: '/', linkName: 'Boosters', linkId: ''},
            {id: 2, to: '/', linkName: 'Help', linkId: ''},
        ],
        homePage: {
            carouselData: [
                {
                    id: 0,
                    srcImg: "./carousel/carousel1.jpg",
                    altImg: "Offer 1",
                    text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
                },
                {
                    id: 1,
                    srcImg: "./carousel/carousel2.jpg",
                    altImg: "Offer 2",
                    text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
                },
                {
                    id: 2,
                    srcImg: "./carousel/carousel3.jpg",
                    altImg: "Offer 3",
                    text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ"
                }
            ],
            advData: [
                {
                    id: 0,
                    img: 'https://p16-va-tiktok.ibyteimg.com/' +
                        'img/musically-maliva-obj/5a0bf3135d88232251753017dd55093e~c5_720x720.jpeg',
                    title: 'PROFESSIONAL BOOSTERS',
                    text: 'Our team consists of true professionals in their field. ' +
                        'We are very attentive to the issue of cooperation with boosters.'
                },
                {
                    id: 1,
                    img: 'https://pic.onlinewebfonts.com/svg/img_85420.svg',
                    title: 'POLITE SUPPORT SERVICE',
                    text: 'We deeply respect our customers and therefore provide ' +
                        'polite and positive feedback in the shortest possible time.'
                },
                {
                    id: 2,
                    img: 'https://pic.onlinewebfonts.com/svg/img_440470.svg',
                    title: 'FAVORABLE PRICES',
                    text: "Our goal is to provide the highest quality service " +
                        "at the lowest possible price. We don't overcharge."
                }
            ],
            cardsData: [
                {
                    id: 0,
                    tagId: 'dotaCard', title: 'Dota 2', text: 'We suggest you to order a Dota 2 boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Skins'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'MMR'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'LOW PRIORITY'},
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/dota2.jpg'
                },
                {
                    id: 1,
                    tagId: 'csCard', title: 'CS:GO', text: 'We suggest you to order a CS:GO boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Skins'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'RMM'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'FACEIT'},
                        {id: 4, link: '#', type: 'button', class: 'order-button', name: 'Lessons'}
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/cs.jpg'
                },
                {
                    id: 2,
                    tagId: 'hotsCard', title: 'Heroes of the Storm', text: 'We suggest you to order a HotS boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'MMR'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Lessons'},
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/hots.avif'
                },
                {
                    id: 3,
                    tagId: 'warfaceCard', title: 'Warface', text: 'We suggest you to order a Warface boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Currency'},
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/warface.jpg'
                },
                {
                    id: 4,
                    tagId: 'lolCard', title: 'League of Legends', text: 'We suggest you to order a LoL boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Elo'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Coaching'},
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/lol.jpg'
                },
                {
                    id: 5,
                    tagId: 'pubgCard', title: 'PUBG', text: 'We suggest you to order a PUBG boost',
                    button: [
                        {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
                        {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Get BP'},
                        {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
                        {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Party'},
                    ],
                    bg: './offerbackgrounds/HomepageOfferCards/pubg.png'
                }
            ],
            stepsElemsData: [
                {
                    id: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    class: 'bi bi-1-circle icon-color',
                    path: [<path
                        d={"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7." +
                            "971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"}/>],
                    text: "Create an account. It's very easy thanks to a simplified menu and detailed instructions!"
                },
                {
                    id: 1,
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
                    id: 2,
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
        },
        gameOfferPages: {
            pagesData: {
                dota2:
                    {
                        mainTitle: 'Dota 2 Offer',
                        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. Better to find something people ' +
                            'call "golden mean". Anyway, we will see, how it goes.',
                        cardsTitle: 'Offers of the week',
                        offerCardsData: [
                            {id: 0, title: '3000 MMR Boost', text: '35$'},
                            {id: 1, title: 'Low priority', text: '5$'},
                            {id: 2, title: 'Bladeform legacy', text: '25$'},
                            {id: 3, title: '+200 MMR', text: '10$'},
                            {id: 4, title: '+200 MMR', text: '10$'},
                            {id: 5, title: '+200 MMR', text: '10$'}
                        ],
                        panelButton: [
                            {id: 0, link: "#", name: "Common skins"},
                            {id: 1, link: "#", name: "Uncommon skins"},
                            {id: 2, link: "#", name: "Rare skins"},
                            {id: 3, link: "#", name: "Immortal skins"},
                            {id: 4, link: "#", name: "Arcana"},
                            {id: 5, link: "#", name: "MMR Boost"},
                            {id: 6, link: "#", name: "Low priority"},
                            {id: 7, link: "#", name: "Coaching"},
                            {id: 8, link: "#", name: "Party with a pro"}
                        ],
                        breadCrumbs: {linkNames: [], activeLinkName: 'Dota 2'},
                        canvasCtgData:
                            {
                                placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                            }
                    },
                lol:
                    {
                        mainTitle: 'League of Legends Offer',
                        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. Better to find something people ' +
                            'call "golden mean". Anyway, we will see, how it goes.',
                        cardsTitle: 'Offers of the week',
                        offerCardsData: [
                            {id: 0, title: '3000 MMR Boost', text: '35$'},
                            {id: 1, title: 'Low priority', text: '5$'},
                            {id: 2, title: 'Bladeform legacy', text: '25$'},
                            {id: 3, title: '+300 MMR', text: '10$'}
                        ],
                        panelButton: [
                            {id: 0, link: "#", name: "Leveling"},
                            {id: 1, link: "#", name: "Ranked"},
                            {id: 2, link: "#", name: "Game skins"},
                            {id: 3, link: "#", name: "Low priority"},
                            {id: 4, link: "#", name: "Coaching"},
                            {id: 5, link: "#", name: "Party with a pro"},
                            {id: 6, link: "#", name: "Achievements"},
                        ],
                        breadCrumbs: {linkNames: [], activeLinkName: 'League of Legends'},
                        canvasCtgData:
                            {
                                placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                            }

                    },
                hots:
                    {
                        mainTitle: 'Heroes of the Storm Offer',
                        text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                            'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. Better to find something people ' +
                            'call "golden mean". Anyway, we will see, how it goes.',
                        cardsTitle: 'Offers of the week',
                        offerCardsData: [
                            {id: 0, title: '3000 MMR Boost', text: '35$'},
                            {id: 1, title: 'Low priority', text: '5$'},
                            {id: 2, title: 'Bladeform legacy', text: '25$'},
                            {id: 3, title: '+400 MMR', text: '10$'}
                        ],
                        panelButton: [
                            {id: 0, link: "#", name: "Low priority"},
                            {id: 1, link: "#", name: "Leveling"},
                            {id: 2, link: "#", name: "Coaching"},
                            {id: 3, link: "#", name: "Ranked"},
                            {id: 4, link: "#", name: "Play with a pro"},
                            {id: 5, link: "#", name: "Achievements"},
                        ],
                        breadCrumbs: {linkNames: [], activeLinkName: 'Heroes of the Storm'},
                        canvasCtgData: {
                            placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                        }
                    }
            },
            canvasMenuData: {
                placement: 'end', buttonName: 'Categories', title: 'Categories', canvasButtons: [
                    {id: 0, link: "/hots", name: "Heroes of the Storm"},
                    {id: 1, link: "/dota2", name: "Dota 2"},
                    {id: 2, link: "/lol", name: "League of Legends"}
                ]
            }
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'HOMEPAGE-ADD-CARD') {
            let newCard = {
                id: this._state.homePage.cardsData.length,
                tagId: this._state.adminPanelForms.homePageCards.cardIdForm,
                title: this._state.adminPanelForms.homePageCards.cardTitleForm,
                text: this._state.adminPanelForms.homePageCards.cardTextForm,
                button: [],
                bg: './offerbackgrounds/HomepageOfferCards/dota2.jpg'
            };
            this._state.homePage.cardsData.push(newCard);
            this._state.adminPanelForms.homePageCards.cardIdForm = '';
            this._state.adminPanelForms.homePageCards.cardTitleForm = '';
            this._state.adminPanelForms.homePageCards.cardTextForm = '';
            this._callSubscriber();
        }
        else if (action.type === 'HOMEPAGE-ADD-BUTTON') {

            let findId = (cardTitle) => {
                for (let i = 0; i < this._state.homePage.cardsData.length; i++) {
                    if (this._state.homePage.cardsData[i].title === cardTitle) {
                        return (i)
                    }
                }
            };

            let newButton = {
                id: this._state.homePage.cardsData[findId(action.cardTitle)].button.length,
                link: action.link,
                type: action.btnType,
                class: action.btnType === 'mainButton' ? 'card-main-button' : 'order-button',
                name: this._state.adminPanelForms.homePageCards.buttonNameForm
            };
            this._state.homePage.cardsData[findId(action.cardTitle)].button.push(newButton);
            this._state.adminPanelForms.homePageCards.buttonNameForm = '';
            this._callSubscriber();
        }
        else if (action.type === 'UPDATE-ADMIN-EDITOR-FORMS') {
            if (action.formName === 'cardId') {
                this._state.adminPanelForms.homePageCards.cardIdForm = action.text;
            } else if (action.formName === 'cardTitle') {
                this._state.adminPanelForms.homePageCards.cardTitleForm = action.text;
            } else if (action.formName === 'cardText') {
                this._state.adminPanelForms.homePageCards.cardTextForm = action.text;
            } else if (action.formName === 'buttonName') {
                this._state.adminPanelForms.homePageCards.buttonNameForm = action.text;
            } else if (action.formName === 'offerPageCardTitle') {
                this._state.adminPanelForms.offerPageCards.cardTitleForm = action.text;
            } else if (action.formName === 'offerPageCardText') {
                this._state.adminPanelForms.offerPageCards.cardTextForm = action.text;
            }

            this._callSubscriber();
        }
        else if (action.type === 'OFFERPAGE-ADD-CARD') {

            let newOfferPageCard = {
                id: this._state.gameOfferPages.pagesData[action.gameOfferSelector].offerCardsData.length,
                title: this._state.adminPanelForms.offerPageCards.cardTitleForm,
                text: this._state.adminPanelForms.offerPageCards.cardTextForm
            }

            this._state.gameOfferPages.pagesData[action.gameOfferSelector].offerCardsData.push(newOfferPageCard);
            this._state.adminPanelForms.offerPageCards.cardTitleForm = '';
            this._state.adminPanelForms.offerPageCards.cardTextForm = '';
            this._callSubscriber();
        }
    }
}

export const homePageCardsActionCreator = () =>
    ({
        type: homePageAddCard,
    })
export const homePageButtonsActionCreator = (cardTitle, link, btnType) =>
    ({
        type: homePageAddButton,
        cardTitle: cardTitle,
        link: link,
        btnType: btnType
    })
export const adminPanelOnChangeActionCreator = (text, formName) =>
    ({
        type: adminUpdateForms,
        text: text,
        formName: formName
    })

export const offerPageCardsActionCreator = (gameOfferSelector) =>
    ({
        type: offerPageAddCard,
        gameOfferSelector: gameOfferSelector
    })

export default store;

