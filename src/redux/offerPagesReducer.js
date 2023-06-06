const offerPageAddCard = 'OFFERPAGE-ADD-CARD';
const offerPageUpdateForms = 'OFFERPAGE-ON-CHANGE'

let initialState = {
    offerPageCardsForms: {
        cardTitleForm: '',
        cardTextForm: ''
    },
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

const offerPagesReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {

        case offerPageUpdateForms:

            let text = action.text;

            stateCopy = {
                ...state,
                offerPageCardsForms: {...state.offerPageCardsForms}
            };

            if (action.formName === 'offerPageCardTitle') {
                stateCopy.offerPageCardsForms.cardTitleForm = text;
            } else if (action.formName === 'offerPageCardText') {
                stateCopy.offerPageCardsForms.cardTextForm = text;
            }
            break

        case offerPageAddCard:

            let game = action.gameOfferSelector;

            stateCopy = {
                ...state,
                offerPageCardsForms: {...state.offerPageCardsForms},
                pagesData: {...state.pagesData,
                }
            };

            stateCopy.pagesData[game].offerCardsData = [
                ...state.pagesData[game].offerCardsData,
                {
                    id: stateCopy.pagesData[game].offerCardsData.length,
                    title: stateCopy.offerPageCardsForms.cardTitleForm,
                    text: stateCopy.offerPageCardsForms.cardTextForm
                }
            ]

            stateCopy.offerPageCardsForms.cardTitleForm = '';
            stateCopy.offerPageCardsForms.cardTextForm = '';
            break

        default:
            return state;

    }

    return stateCopy;
}

export const offerPageCardsActionCreator = (gameOfferSelector) =>
    ({
        type: offerPageAddCard,
        gameOfferSelector: gameOfferSelector
    })

export const offerPageOnChangeActionCreator = (text, formName) =>
    ({
        type: offerPageUpdateForms,
        text: text,
        formName: formName
    })

export default offerPagesReducer