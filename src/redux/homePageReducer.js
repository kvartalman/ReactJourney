import React from "react";

const homePageAddCard = 'HOMEPAGE-ADD-CARD';
const homePageAddButton = 'HOMEPAGE-ADD-BUTTON';
const homePageUpdateForms = 'HOMEPAGE-ON-CHANGE';
const homePageCardsData = 'HOMEPAGE-CARD-DATA';
const homePageToggleFetching = 'HOMEPAGE-TOGGLE-FETCHING';

let initialState = {
    homePageCardsForms: {
        cardIdForm: '',
        cardTitleForm: '',
        cardTextForm: '',
        buttonNameForm: ''
    },
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
    cardsData: {},
    stepsElemsData: [
        {
            id: 0,
            xmlns: "http://www.w3.org/2000/svg",
            class: 'bi bi-1-circle icon-color',
            path: [
                "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7." +
                "971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"],
            text: "Create an account. It's very easy thanks to a simplified menu and detailed instructions!"
        },
        {
            id: 1,
            xmlns: "http://www.w3.org/2000/svg",
            class: 'bi bi-2-circle icon-color',
            path: ["M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-" +
            "1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v." +
            "077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336." +
            "615-1.336 1.306Z"],
            text: 'Choose the offers you like and add them to your cart!'
        },
        {
            id: 2,
            xmlns: "http://www.w3.org/2000/svg",
            class: 'bi bi-3-circle icon-color',
            path: ["M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312" +
            ".498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1" +
            ".776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754" +
            "-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z",
                "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"],
            text: "Pay for your purchases and wait a bit, our manager will contact you soon!"
        }
    ],
    isFetching: false
}
// {
//     dotaCard: {
//         id: 0,
//             tagId: 'dotaCard', title: 'Dota 2', text: 'We suggest you to order a Dota 2 boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Skins'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'MMR'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'LOW PRIORITY'},
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/dota2.jpg'
//     },
//     csCard: {
//         id: 1,
//             tagId: 'csCard', title: 'CS:GO', text: 'We suggest you to order a CS:GO boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Skins'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'RMM'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'FACEIT'},
//             {id: 4, link: '#', type: 'button', class: 'order-button', name: 'Lessons'}
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/cs.jpg'
//     },
//     hotsCard: {
//         id: 2,
//             tagId: 'hotsCard', title: 'Heroes of the Storm', text: 'We suggest you to order a HotS boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'MMR'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Lessons'},
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/hots.avif'
//     },
//     warfaceCard: {
//         id: 3,
//             tagId: 'warfaceCard', title: 'Warface', text: 'We suggest you to order a Warface boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Currency'},
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/warface.jpg'
//     },
//     lolCard: {
//         id: 4,
//             tagId: 'lolCard', title: 'League of Legends', text: 'We suggest you to order a LoL boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Elo'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Leveling'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Coaching'},
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/lol.jpg'
//     },
//     pubgCard: {
//         id: 5,
//             tagId: 'pubgCard', title: 'PUBG', text: 'We suggest you to order a PUBG boost',
//             button: [
//             {id: 0, link: '#', type: 'mainButton', class: 'card-main-button', name: 'All services'},
//             {id: 1, link: '#', type: 'button', class: 'order-button', name: 'Get BP'},
//             {id: 2, link: '#', type: 'button', class: 'order-button', name: 'Ranked'},
//             {id: 3, link: '#', type: 'button', class: 'order-button', name: 'Party'},
//         ],
//             bg: './offerbackgrounds/HomepageOfferCards/pubg.png'
//     }
// }
const homePageReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case homePageToggleFetching: {
            stateCopy = {...state, isFetching: action.isFetching}
            break
        }

        case homePageCardsData: {
            stateCopy = {...state, cardsData: action.data}
            break
        }

        case homePageUpdateForms: {

            stateCopy = {
                ...state,
                homePageCardsForms: {...state.homePageCardsForms}
            };

            if (action.formName === 'cardId') {
                stateCopy.homePageCardsForms.cardIdForm = action.text;
            } else if (action.formName === 'cardTitle') {
                stateCopy.homePageCardsForms.cardTitleForm = action.text;
            } else if (action.formName === 'cardText') {
                stateCopy.homePageCardsForms.cardTextForm = action.text;
            } else if (action.formName === 'buttonName') {
                stateCopy.homePageCardsForms.buttonNameForm = action.text;
            }
            break
        }

        case homePageAddCard: {

            stateCopy = {
                ...state,
                homePageCardsForms: {...state.homePageCardsForms},
                cardsData: {...state.cardsData}
            }

            stateCopy.cardsData[state.homePageCardsForms.cardIdForm] = {
                id: state.cardsData.length,
                tagId: state.homePageCardsForms.cardIdForm,
                title: state.homePageCardsForms.cardTitleForm,
                text: state.homePageCardsForms.cardTextForm,
                button: [],
                bg: './offerbackgrounds/HomepageOfferCards/dota2.jpg'
            }

            stateCopy.homePageCardsForms.cardIdForm = '';
            stateCopy.homePageCardsForms.cardTitleForm = '';
            stateCopy.homePageCardsForms.cardTextForm = '';
            break
        }

        case
        homePageAddButton: {

            stateCopy = {
                ...state,
                homePageCardsForms: {...state.homePageCardsForms},
                cardsData: {...state.cardsData}
            };

            stateCopy.cardsData[action.cardKey].button = [
                ...state.cardsData[action.cardKey].button,
                {
                    id: stateCopy.cardsData[action.cardKey].button.length,
                    link: action.link,
                    type: action.btnType,
                    class: action.btnType === 'mainButton' ? 'card-main-button' : 'order-button',
                    name: stateCopy.homePageCardsForms.buttonNameForm
                }
            ]

            stateCopy.homePageCardsForms.buttonNameForm = '';
            break
        }

        default:
            return state;
    }

    return stateCopy;
}

export const homePageCardsAC = () =>
    ({
        type: homePageAddCard,
    })
export const homePageButtonsAC = (cardKey, link, btnType) =>
    ({
        type: homePageAddButton,
        cardKey: cardKey,
        link: link,
        btnType: btnType
    })

export const homePageOnChangeAC = (text, formName) =>
    ({
        type: homePageUpdateForms,
        text: text,
        formName: formName
    })

export const addCardsData = (data) =>
    ({
        type: homePageCardsData,
        data: data
    })

export const setIsFetchingAC = (isFetching) =>
    ({
        type: homePageToggleFetching,
        isFetching: isFetching
    })

export default homePageReducer
